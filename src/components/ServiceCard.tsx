import { Text, View } from "react-native";
import { styles } from "../constants/styles";
import { LaundryService } from "../types";

interface Props {
  item: LaundryService;
}

export const ServiceCard = ({ item }: Props) => { //
  return (
    <View style={styles.card}>
      <Text style={styles.serviceName}>{item.name}</Text>
      <Text style={styles.price}>
        Rp{item.price.toLocaleString("id-ID")} / {item.unit}
      </Text>
      <Text style={styles.duration}>Estimasi: {item.duration}</Text>

      {/* Inline style untuk badge express */}
      <Text
        style={{
          marginTop: 8,
          fontWeight: "bold",
          color: item.isExpress ? "red" : "green",
        }}
      >
        {item.isExpress ? "EXPRESS" : "REGULER"}
      </Text>
    </View>
  );
}; 