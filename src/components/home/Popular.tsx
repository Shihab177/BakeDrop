import {
    popular_image_five,
    popular_image_four,
    popular_image_one,
    popular_image_three,
    popular_image_two,
} from "@/assets/index";
import {
    FlatList,
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
type TPopularItem = {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
};
export const popularCakes: TPopularItem[] = [
  {
    id: "1",
    title: "Rainbow cake",
    description: "This impressive rainbow cake is the perfect...",
    image: popular_image_one,
  },
  {
    id: "2",
    title: "Chocolate cake",
    description: "A good chocolate cake can be enjoyed on just...",

    image: popular_image_two,
  },
  {
    id: "3",
    title: "Mr. Lion cake",
    description: "Cute little lion can make anyone happy on their...",
    image: popular_image_three,
  },
  {
    id: "94",
    title: "Birthday cake",
    description: "A good vanilla cake can be enjoyed on just...",
    image: popular_image_four,
  },
  {
    id: "64",
    title: "Chocolate cake",
    description: "A good chocolate cake can be enjoyed on just...",
    image: popular_image_five,
  },
];
const Popular = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionText}>POPULAR CAKES</Text>
      </View>
      <FlatList<TPopularItem>
        data={popularCakes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} style={styles.card}>
            <Image
              source={item.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.cardDescription} numberOfLines={2}>
              {item.description}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 12,
    color: "#301F1F",
    fontWeight: "medium",
    letterSpacing: 0.5,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  listContainer: {
    gap: 16,
  },
  card: {
    width: "48%",
  },
  cardImage: {
    width: "100%",
    height: 121,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "medium",
    color: "#301F1F",
    marginTop: 8,
  },
  cardDescription: {
    fontSize: 12,
    color: "#828282",
    fontWeight: "regular",
    marginTop: 4,
    lineHeight: 16,
  },
});
