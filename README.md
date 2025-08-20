# Event Registration App — Events Screen & Registration Flow

## Overview
This implementation covers the **Events screen** and **registration functionality** for the event registration app. The app fetches events from a mock API (`http://localhost:3000/events`) and allows users to register via a POST request (`http://localhost:3000/registrations`). Events are displayed in a `FlatList`, each with a "Register" button that updates the UI on successful registration. Registrations are managed globally via **Context**, so the Profile screen can display a user’s registered events consistently across the app.

---

## Implementation Details
1. **Component Structure**
   - `EventsScreen`: Fetches events and provides "Register" buttons.
   - `ProfileScreen`: Shows registered events (using Context).
   - `RegistrationContext`: Global state provider for tracking registrations.
   - `App.tsx`: Wraps navigation inside the `RegistrationProvider`.

2. **Navigation**
   - Uses **React Navigation (Bottom Tabs)** with two tabs:
     - `Events` → Browse and register for events.
     - `Profile` → View registered events.

3. **API Integration**
   - `GET /events`: Fetches list of events.
   - `POST /registrations`: Registers user for a specific event.
   - Handles loading state, errors, and disables "Register" button while submitting.

4. **Error Handling & UX**
   - Displays `ActivityIndicator` while loading.
   - Shows alerts for registration success/failure.
   - Once registered, event shows as `✅ Registered`.

5. **Trade-offs**
   - Context is lightweight and fine for mock setup; a production app might migrate to Redux Toolkit or RTK Query for caching and scalability.
   - No authentication layer (mock API only).
   - No persistence across app restarts (could extend with AsyncStorage).

6. **AI Assistance**
   - ChatGPT (OpenAI GPT-5) was used to draft component structure, Context logic, and API integration. Code was reviewed and tested locally before committing.

---

## 📡 Mock API Setup Guide
To test the app, a **mock backend** is required. We use [`json-server`](https://github.com/typicode/json-server).

### 1. Install json-server
```bash
npm install -g json-server



# Debugging & Optimization — ProfileScreen

## Identified Issues
- **Navigation State Crashes**: The original code accepted `navigation` but had no safeguards, causing crashes on re-entry.
- **Performance Bottleneck**: FlatList lacked optimizations, freezing UI with large datasets.
- **Missing Error Handling**: No API integration, no `try/catch`, no fallback UI on failures.
- **Weak UX**: No loading state, empty state, or SafeAreaView usage.

## Fixes Implemented
1. Added **`useIsFocused`** from React Navigation to safely refetch data when the Profile screen is active, preventing crashes on navigation changes.
2. Integrated **API fetching with error handling** using `try/catch` + `Alert` for user feedback and fallback messages.
3. Optimized **FlatList** with props:
   - `initialNumToRender`, `windowSize`, `maxToRenderPerBatch`, `updateCellsBatchingPeriod`, and `getItemLayout` for smooth scrolling on large datasets (1,000+ items).
   - `removeClippedSubviews` to reduce memory usage.
4. Added **loading and error states** with `ActivityIndicator` and error UI.
5. Implemented **empty state UI** when no registrations exist.
6. Wrapped UI in **SafeAreaView** for consistent rendering across devices.

## Production Enhancements
- **Lazy Loading & Pagination**: Fetch registrations in chunks rather than all at once.
- **Caching & Offline Support**: Use `redux-persist` or SQLite to cache past registrations.
- **Global State Management**: Context or Redux Toolkit to share registrations across screens.
- **Performance Monitoring**: Integrate Flipper or Sentry to track freezes and memory leaks.
