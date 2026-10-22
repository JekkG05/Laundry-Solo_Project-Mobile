import { useLocalSearchParams, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { services } from "../../data/services";
import { styles } from "../../constants/styles";

export default function ServiceDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Layanan tidak ditemukan</Text>
        <Pressable style={styles.primaryButton} onPress={() => router.replace("/")}>
          <Text style={styles.primaryButtonText}>Kembali ke Beranda</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>DETAIL LAYANAN</Text>
      <Text style={styles.header}>{service.name}</Text>
      <View style={styles.card}>
        <Text style={styles.price}>Rp{service.price.toLocaleString("id-ID")} / {service.unit}</Text>
        <Text style={styles.detailText}>Estimasi pengerjaan: {service.duration}</Text>
        <Text style={styles.detailText}>Kategori: {service.type}</Text>
        <Text style={styles.detailText}>Jenis layanan: {service.isExpress ? "Express" : "Reguler"}</Text>
      </View>
      <Text style={styles.intro}>
        Periksa harga dan estimasi di atas. Jumlah pesanan dan total biaya dapat dihitung pada halaman berikutnya.
      </Text>
      <Pressable
        style={styles.primaryButton}
        onPress={() => router.push({ pathname: "/order", params: { serviceId: service.id } })}
      >
        <Text style={styles.primaryButtonText}>Pesan layanan ini</Text>
      </Pressable>
      <Pressable style={styles.secondaryButton} onPress={() => router.back()}>
        <Text style={styles.secondaryButtonText}>Kembali ke daftar layanan</Text>
      </Pressable>
    </View>
  );
}
