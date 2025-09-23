import { StyleSheet, View } from 'react-native';
import Box from './components/Box.js'

export default function App() {
  return (
	// <View style={{ backgroundColor: 'plum', flex: 1 }}></View>
    <View style={styles.container}>
		<Box style={{ backgroundColor: 'blue', flex: 1 }}>Box 1</Box>
		<Box style={{ backgroundColor: 'red' }}>Box 2</Box>
		<Box style={{ backgroundColor: 'green' }}>Box 3</Box>
		<Box style={{ backgroundColor: 'black' }}>Box 4</Box>
		<Box style={{ backgroundColor: 'gold' }}>Box 5</Box>
		<Box style={{ backgroundColor: 'plum' }}>Box 6</Box>
		<Box style={{ backgroundColor: 'yellow' }}>Box 7</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	marginTop: 64,
	borderWidth: 6,
    borderColor: 'brown',
  },
});
