import { View, Text, StyleSheet } from 'react-native';

export default function App() {
	return (
  		<View style={styles.container}>
  	  		<View style={[styles.lightblueBg, styles.box]}>
				<Text>Lightblue box</Text>
			</View> 	
			<View style={[styles.lightgreenBg, styles.box]}>
				<Text>Lightgreen box</Text>
			</View> 	
  	  	</View>
  	);
}

// exportable for global styles in other Component files
const styles = StyleSheet.create({
	container: { 
		flex: 1,
		backgroundColor: 'plum',
		padding: 60
	},
	box: {
		width: 100,
        height: 100,
        padding: 10
	},
	lightblueBg: { 
		backgroundColor: 'lightblue',
	},
	lightgreenBg: { 
    	backgroundColor: 'lightgreen',
    },
});
