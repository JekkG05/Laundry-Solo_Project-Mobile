import { DarkTheme, DefaultTheme, ThemeProvider, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0f766e" },
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight: "700" },
          contentStyle: { backgroundColor: "#e0f2fe" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Laundry Solo" }} />
        <Stack.Screen name="explore" options={{ title: "Tentang Aplikasi" }} />
        <Stack.Screen name="service/[id]" options={{ title: "Detail Layanan" }} />
        <Stack.Screen name="order" options={{ title: "Buat Pesanan" }} />
        <Stack.Screen name="confirmation" options={{ title: "Pesanan Berhasil" }} />
      </Stack>
    </ThemeProvider>
  );
}
