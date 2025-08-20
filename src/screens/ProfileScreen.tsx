// ProfileScreen.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Alert,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";

type Registration = {
  eventId: string;
  id: string;
  event: string;
};

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const isFocused = useIsFocused(); // prevents crashes when navigating back

  // Fetch registrations from mock API
  const fetchRegistrations = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://192.168.1.27:3000/registrations");
      if (!response.ok) throw new Error("Failed to load registrations");
      const data = await response.json();
      setRegistrations(data);
      setError(null);
    } catch (err) {
      console.error("API Error:", err);
      setError("Unable to load your registrations.");
      Alert.alert("Error", "Failed to load registrations.");
    } finally {
      setLoading(false);
    }
  };

  // Refetch whenever the screen is focused
  useEffect(() => {
    if (isFocused) {
      fetchRegistrations();
    }
  }, [isFocused]);

  const renderItem = ({ item }: { item: Registration }) => (
    <View style={styles.item}>
      <Text style={styles.eventText}>✅ {item.eventId}</Text>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading your registrations...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Registrations</Text>
      <FlatList
        data={registrations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.empty}>No registrations yet.</Text>
        }
        initialNumToRender={10} // improve large dataset rendering
        windowSize={5} // keeps memory usage low
        removeClippedSubviews={true} // unmount offscreen items
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        getItemLayout={(_, index) => ({
          length: 60,
          offset: 60 * index,
          index,
        })}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  eventText: {
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    marginTop: 20,
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  error: {
    color: "red",
    fontSize: 16,
    fontWeight: "500",
  },
});
