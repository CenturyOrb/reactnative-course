import { View, Text, StyleSheet } from 'react-native';

export default function App() {
	return (
  		<View style={styles.container}>
			<View style={styles.darkMode}> 
				<Text style={styles.darkModeText}>Style Inheritance</Text>
			</View>
  	  		<View style={[styles.lightblueBg, styles.box, styles.boxShadow]}>
				<Text>Lightblue box</Text>
			</View> 	
			<View style={[styles.lightgreenBg, styles.box]}>
				<Text>Lightgreen box</Text>
			</View> 	
  	  	</View>
  	);
}

// exportable for global styles in other Component files
// View -> Text color style is not inheritable
const styles = StyleSheet.create({
	container: { 
		flex: 1,
		backgroundColor: 'plum',
		padding: 60
	},
	darkMode: {
		backgroundColor: 'black',
	},
	darkModeText: {
		color: 'white'
	},
	box: {
		width: 250,
        height: 250,
        //padding: 10
		paddingHorizontal: 10,
        paddingVertical: 20,
		marginVertical: 10,
		borderWidth: 2,
		borderColor: 'purple',
		borderStyle: 'solid',
		borderRadius: 16

	},
	lightblueBg: { 
		backgroundColor: 'lightblue',
	},
	lightgreenBg: { 
    	backgroundColor: 'lightgreen',
    },
	boxShadow: {
		shadowColor: '#333333',
		shadowOffset: {
			width: 6,
			height: 6
		},
		shadowOpacity: 0.6,
		shadowRadius: 4
	}
});
