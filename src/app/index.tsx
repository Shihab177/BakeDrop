import Categories from "@/components/home/Categories";
import Popular from "@/components/home/Popular";
import Searchbar from "@/components/home/Searchbar";
import { ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <Searchbar />
      <Categories />
      <Popular />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
});
