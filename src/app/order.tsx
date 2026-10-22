import { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { services } from "../data/services";
import { styles } from "../constants/styles";

export default function OrderScreen() {
  const { serviceId } = useLocalSearchParams<{ serviceId: string }>();
  const service = services.find((item) => item.id === serviceId);
  const [quantity, setQuantity] = useState("1");
  const [total, setTotal] = useState(service?.price ?? 0);

  useEffect(() => {
    const parsedQuantity = Number(quantity);
    const safeQuantity = Number.isFinite(parsedQuantity) && parsedQuantity > 0 ? parsedQuantity : 0;
    setTotal((service?.price ?? 0) * safeQuantity);
  }, [quantity, service?.price, serviceId]);

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

  const submitOrder = () => {
    const amount = Number(quantity);
    if (!Number.isFinite(amount) || amount <= 0) {
      Alert.alert("Jumlah belum benar", "Masukkan jumlah lebih dari 0.");
      return;
    }

    router.push({
      pathname: "/confirmation",
      params: {
        serviceName: service.name,
        quantity: String(amount),
        unit: service.unit,
        total: String(total),
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>FORM PESANAN</Text>
      <Text style={styles.header}>{service.name}</Text>
      <View style={styles.card}>
        <Text style={styles.detailText}>Harga satuan</Text>
        <Text style={styles.price}>Rp{service.price.toLocaleString("id-ID")} / {service.unit}</Text>
        <Text style={styles.inputLabel}>Jumlah ({service.unit})</Text>
        <TextInput
          accessibilityLabel={`Jumlah dalam ${service.unit}`}
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
          placeholder="Masukkan jumlah"
          style={styles.input}
        />
        <Text style={styles.detailText}>Total sementara</Text>
        <Text style={styles.total}>Rp{total.toLocaleString("id-ID")}</Text>
      </View>
      <Pressable style={styles.primaryButton} onPress={submitOrder}>
        <Text style={styles.primaryButtonText}>Konfirmasi Pesanan</Text>
      </Pressable>
      <Pressable style={styles.secondaryButton} onPress={() => router.back()}>
        <Text style={styles.secondaryButtonText}>Kembali</Text>
      </Pressable>
      <Text style={styles.note}>Demo ini menghitung pesanan secara lokal; belum mengirim data ke server.</Text>
    </View>
  );
}
