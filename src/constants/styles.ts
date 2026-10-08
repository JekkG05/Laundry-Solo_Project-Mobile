import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e0f2fe",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    textAlign: "center",
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  serviceName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
  },
  price: {
    fontSize: 16,
    color: "#2563eb",
    marginTop: 4,
  },
  duration: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 2,
  },
});