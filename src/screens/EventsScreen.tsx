// EventsScreen.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import { useRegistration } from "../context/RegistrationContext"; // adjust path as needed

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
};

const EventsScreen = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [registering, setRegistering] = useState<number | null>(null);

  const { registrations, registerEvent } = useRegistration();

  // Fetch events from the mock API
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://192.168.1.27:3000/events");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
      Alert.alert("Error", "Unable to fetch events. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Register for an event (API + update global context)
  const registerForEvent = async (eventId: number) => {
    try {
      setRegistering(eventId);
      const response = await fetch("http://192.168.1.27:3000/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "userId": 1, "eventId": eventId }),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      registerEvent(eventId); // update global state
      Alert.alert("Success", "You have registered for the event!");
    } catch (error) {
      console.error("Registration error:", error);
      Alert.alert("Error", "Registration failed. Please try again.");
    } finally {
      setRegistering(null);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const renderItem = ({ item }: { item: Event }) => {
    const isRegistered = registrations.includes(item.id);
    const isLoading = registering === item.id;

    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>
          {item.date} | {item.location}
        </Text>
        {isRegistered ? (
          <Text style={styles.registered}>✅ Registered</Text>
        ) : (
          <Button
            title={isLoading ? "Registering..." : "Register"}
            onPress={() => registerForEvent(item.id)}
            disabled={isLoading}
          />
        )}
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading events...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
      ListEmptyComponent={
        <Text style={styles.centerText}>No events available</Text>
      }
    />
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  registered: {
    fontSize: 14,
    color: "green",
    marginTop: 4,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
