import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Deck from "./src/Deck"
import TinderCard from "./src/Card"

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://source.unsplash.com/random' },
  { id: 2, text: 'Card #2', uri: 'https://source.unsplash.com/random' },
  { id: 3, text: 'Card #3', uri: 'https://source.unsplash.com/random' },
  { id: 4, text: 'Card #4', uri: 'https://source.unsplash.com/random' },
  { id: 5, text: 'Card #5', uri: 'https://source.unsplash.com/random' },
  { id: 6, text: 'Card #6', uri: 'https://source.unsplash.com/random' },
  { id: 7, text: 'Card #7', uri: 'https://source.unsplash.com/random' },
  { id: 8, text: 'Card #8', uri: 'https://source.unsplash.com/random' },
];
export default function App() {

  const renderCard = (item) => {
    return (
      <Text>{item.text}</Text>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Deck data={DATA} renderCard={TinderCard} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
