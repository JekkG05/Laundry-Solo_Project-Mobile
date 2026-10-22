import { useLocalSearchParams, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "../constants/styles";

export default function ConfirmationScreen() {
  const { serviceName, quantity, unit, total } = useLocalSearchParams<{
    serviceName: string;
    quantity: string;
    unit: string;
    total: string;
  }>();

  return (
    <View style={styles.container}>
      <Text style={styles.successIcon}>✓</Text>
      <Text style={styles.header}>Pesanan berhasil dibuat!</Text>
      <Text style={styles.intro}>Berikut ringkasan pesanan demo kamu.</Text>
      <View style={styles.card}>
        <Text style={styles.detailText}>Layanan: {serviceName}</Text>
        <Text style={styles.detailText}>Jumlah: {quantity} {unit}</Text>
        <Text style={styles.detailText}>Total: Rp{Number(total ?? 0).toLocaleString("id-ID")}</Text>
        <Text style={styles.note}>Ini simulasi untuk demo Modul 2, belum merupakan transaksi nyata.</Text>
      </View>
      <Pressable style={styles.primaryButton} onPress={() => router.replace("/")}>
        <Text style={styles.primaryButtonText}>Selesai dan ke Beranda</Text>
      </Pressable>
    </View>
  );
}
