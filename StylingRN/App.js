import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
		<Text>StyleSheet API</Text>
    </View>
  );
}

// exportable for global styles in other Component files
const styles = StyleSheet.create({
	container: { 
		flex: 1,
		backgroundColor: 'plum',
		padding: 60
	}
});
