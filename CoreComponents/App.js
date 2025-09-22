import { View, ScrollView, Image, Text } from 'react-native'
const logoImg = require('./assets/adaptive-icon.png');

export default function App() {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'plum',
				padding: 60
			}}
		>
			<ScrollView>
				<Image source={logoImg}
					style={{ width: 300, height: 300 }}
				/>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mauris pulvinar, efficitur lacus nec, facilisis risus. Nullam porta rhoncus metus, sed elementum nisl sagittis congue. Vestibulum nunc massa, eleifend in dignissim vel, sagittis id quam. Duis congue erat in leo scelerisque, non sodales nisl sollicitudin. Vestibulum quis leo nec est malesuada faucibus vitae eget sapien. Sed gravida quam nec pretium imperdiet. Fusce id augue at diam faucibus ultricies non ut erat. Donec semper nisl nec ipsum consectetur scelerisque. Cras cursus pretium auctor. In dapibus leo tortor, sit amet consectetur diam feugiat quis. Sed lacus ex, gravida ut feugiat sed, consectetur eu velit. Pellentesque massa lacus, ornare a nibh pretium, suscipit elementum mi. Sed eu orci quis dui pretium porta.
				</Text>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mauris pulvinar, efficitur lacus nec, facilisis risus. Nullam porta rhoncus metus, sed elementum nisl sagittis congue. Vestibulum nunc massa, eleifend in dignissim vel, sagittis id quam. Duis congue erat in leo scelerisque, non sodales nisl sollicitudin. Vestibulum quis leo nec est malesuada faucibus vitae eget sapien. Sed gravida quam nec pretium imperdiet. Fusce id augue at diam faucibus ultricies non ut erat. Donec semper nisl nec ipsum consectetur scelerisque. Cras cursus pretium auctor. In dapibus leo tortor, sit amet consectetur diam feugiat quis. Sed lacus ex, gravida ut feugiat sed, consectetur eu velit. Pellentesque massa lacus, ornare a nibh pretium, suscipit elementum mi. Sed eu orci quis dui pretium porta.
				</Text>
				<Image source={logoImg}
					style={{ width: 300, height: 300 }}
				/>
			</ScrollView>
		</View>
	);
}
