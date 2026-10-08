import { FlatList, Text, View } from "react-native";
import { ServiceCard } from "../components/ServiceCard";
import { styles } from "../constants/styles";
import { services } from "../data/services";
import { LaundryService } from "../types";

export default function Index() {
  const renderService = ({ item }: { item: LaundryService }) => (
    <ServiceCard item={item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Laundry Solo</Text>
      <Text style={styles.subHeader}>
        Bersih, Cepat, dan Terpercaya
      </Text>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderService}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}