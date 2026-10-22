import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { styles } from "../constants/styles";
import { services } from "../data/services";
import { ServiceType, LaundryService } from "../types";

type FilterType = "semua" | ServiceType;

const filters: { label: string; value: FilterType }[] = [
  { label: "Semua", value: "semua" },
  { label: "Kiloan", value: "kiloan" },
  { label: "Satuan", value: "satuan" },
  { label: "Express", value: "express" },
];

export default function Index() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("semua");
  const [summary, setSummary] = useState("Memuat layanan...");

  const filteredServices = services.filter(
    (service) => selectedFilter === "semua" || service.type === selectedFilter
  );

  useEffect(() => {
    setSummary(`${filteredServices.length} layanan tersedia`);
  }, [selectedFilter, filteredServices.length]);

  const renderService = ({ item }: { item: LaundryService }) => (
    <Pressable
      accessibilityRole="button"
      onPress={() =>
        router.push({ pathname: "/service/[id]", params: { id: item.id } })
      }
      style={({ pressed }) => [
        styles.card,
        pressed && { opacity: 0.75, transform: [{ scale: 0.99 }] },
      ]}
    >
      <View style={styles.serviceRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.serviceName}>{item.name}</Text>
          <Text style={styles.duration}>Estimasi: {item.duration}</Text>
        </View>
        <Text style={styles.price}>Rp{item.price.toLocaleString("id-ID")}</Text>
      </View>
      <View style={styles.serviceRow}>
        <Text style={styles.duration}>Per {item.unit}</Text>
        <Text style={{ color: item.isExpress ? "#dc2626" : "#0f766e", fontWeight: "700" }}>
          {item.isExpress ? "EXPRESS" : "REGULER"}
        </Text>
      </View>
      <Text style={styles.detailLink}>Lihat detail →</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>LAUNDRY PRAKTIS UNTUKMU</Text>
      <Text style={styles.header}>Laundry Solo</Text>
      <Text style={styles.intro}>
        Pilih layanan yang sesuai, lihat detail harga, lalu buat pesanan.
      </Text>

      <View style={styles.filterRow}>
        {filters.map((filter) => (
          <Pressable
            key={filter.value}
            onPress={() => setSelectedFilter(filter.value)}
            style={[
              styles.filterButton,
              selectedFilter === filter.value && styles.filterButtonActive,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter.value && styles.filterTextActive,
              ]}
            >
              {filter.label}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.summary}>{summary}</Text>
      <FlatList
        data={filteredServices}
        keyExtractor={(item) => item.id}
        renderItem={renderService}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 28 }}
        ListEmptyComponent={<Text style={styles.intro}>Layanan belum tersedia.</Text>}
      />
      <Pressable style={styles.secondaryButton} onPress={() => router.push("/explore")}>
        <Text style={styles.secondaryButtonText}>Tentang Laundry Solo</Text>
      </Pressable>
    </View>
  );
}
