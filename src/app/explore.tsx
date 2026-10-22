import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "../constants/styles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>TENTANG APLIKASI</Text>
      <Text style={styles.header}>Laundry Solo</Text>
      <Text style={styles.intro}>
        Laundry Solo adalah aplikasi demo pemesanan layanan laundry. Pengguna dapat melihat
        daftar layanan, memeriksa harga dan estimasi pengerjaan, memasukkan jumlah cucian,
        serta melihat ringkasan pesanan.
      </Text>
      <View style={styles.card}>
        <Text style={styles.serviceName}>Fitur demo Modul 2</Text>
        <Text style={styles.detailText}>• Filter layanan menggunakan useState</Text>
        <Text style={styles.detailText}>• useEffect untuk memperbarui ringkasan layanan dan total harga</Text>
        <Text style={styles.detailText}>• Dynamic route untuk halaman detail layanan</Text>
        <Text style={styles.detailText}>• Navigasi push(), back(), dan replace()</Text>
        <Text style={styles.detailText}>• Stack Navigator dan Stack.Screen pada _layout.tsx</Text>
      </View>
      <Pressable style={styles.primaryButton} onPress={() => router.back()}>
        <Text style={styles.primaryButtonText}>Kembali</Text>
      </Pressable>
      <Pressable style={styles.secondaryButton} onPress={() => router.replace("/")}>
        <Text style={styles.secondaryButtonText}>Ke Beranda</Text>
      </Pressable>
    </View>
  );
}
