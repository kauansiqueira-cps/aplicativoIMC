import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './SRC/Components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Pedro Henrique e Kauan Siqueira</Text>
      <Title/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
