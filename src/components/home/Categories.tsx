import {
  category_image_four,
  category_image_one,
  category_image_three,
  category_image_two,
} from "@/assets/index";
import {
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
type TCategory = {
  id: string;
  title: string;
  image: ImageSourcePropType;
};
type TCategories = TCategory[];
export const categories: TCategories = [
  {
    id: "3",
    title: "Birthday",

    image: category_image_three,
  },
  {
    id: "1",
    title: "Holiday",
    image: category_image_one,
  },
  {
    id: "4",
    title: "Birthday",
    image: category_image_four,
  },
  {
    id: "2",
    title: "Wedding",
    image: category_image_two,
  },
];
const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>CATEGORIES</Text>
        <Text style={{ color: "#FF7800", fontWeight: "medium" }}>SEE ALL</Text>
      </View>
      <FlatList<TCategory>
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item }) => (
          <ImageBackground source={item.image} style={styles.cardImage}>
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 12,
    color: "#301F1F",
    fontWeight: "medium",
    letterSpacing: 0.5,
  },
  cardImage: {
    width: 105,
    height: 120,
    overflow: "hidden",
    borderRadius: 8,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: "100%",
  },
  title: {
    position: "absolute",
    bottom: 8,
    left: 10,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "medium",
  },
});
