import { View, Alert, Button } from 'react-native'

export default function App() {

	return (
		<View
			style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}
		>
			<Button title='alert' onPress={() => Alert.alert('Invalid data!')} />
			<Button
				title='alert2'
				onPress={() => Alert.alert('Invalid data!', 'dob incorrect')}
			/>
			<Button
				title='alert3'
				onPress={() => Alert.alert('Invalid data!', 'DOB incorrect', [
					{
						text: 'Cancel',
						onPress: () => console.log('Cancel pressed')
					},
					{
						text: 'Ok',
						onPress: () => console.log('Ok pressed')
					}
				])}
			/>

		</View >
	);
}
