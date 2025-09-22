import { View, Button, Modal, Text } from 'react-native'
import { useState } from 'react'

export default function App() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	return (
		<View
			style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}
		>
			<Button title='press'
				onPress={() => setIsModalVisible(true)}
				color='midnightblue'
			/>
			<Modal
				visible={isModalVisible}
				onRequestClose={() => setIsModalVisible(false)}
				animationType='slide'
				presentationStyle='pageSheet'
			>
				<View
					style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}
				>
					<Text>Modal Content</Text>
					<Button
						color='midnightblue'
						title='Close'
						onPress={() => setIsModalVisible(false)}
					/>
				</View>
			</Modal>
		</View >
	);
}
