import { View, Button, Image, Text, Pressable } from 'react-native'
const logoImg = require('./assets/adaptive-icon.png')

export default function App() {
	return (
		<View
			style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}
		>
			<Button title='press' onPress={() => console.log('Button pressed')} color='midnightblue' disabled={true} />
			<Pressable onPress={() => console.log('Image pressed')}>
				<Image source={logoImg} style={{ width: 300, height: 300 }} />
			</Pressable>
			<Pressable onLongPress={() => console.log('Text pressed')}>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non arcu cursus neque aliquet iaculis. Maecenas vestibulum dui quis orci viverra, eleifend tristique leo aliquam. Pellentesque feugiat mollis pretium. Praesent sit amet urna molestie, ultricies augue ac, porta magna. Vestibulum sed eros eget eros porttitor hendrerit. Sed elementum, ipsum ac ornare tempus, lorem purus varius nisi, sit amet blandit ex urna at libero. Sed euismod, nisl sit amet posuere facilisis, magna nunc ornare magna, semper faucibus quam orci quis libero. Aliquam erat volutpat. Quisque eget est libero. Praesent viverra, mi vel tincidunt cursus, erat enim rhoncus mauris, ut malesuada dolor eros lacinia justo. Vivamus vulputate ultrices nulla, in eleifend nisl ultricies et. Ut finibus dui quis arcu varius, eu consectetur lectus porta. Phasellus commodo mattis magna.

					Aenean iaculis tortor lorem, sed dignissim risus facilisis ut. Ut eu tortor felis. Aliquam quis quam et elit imperdiet tempor. Vestibulum lacus mauris, imperdiet at nisi tincidunt, blandit commodo tortor. Nullam lacus velit, venenatis ac sapien sit amet, sodales eleifend felis. Mauris sed dui nisi. Ut lacinia tortor sed nulla placerat, ac malesuada purus mollis. Sed et mauris consectetur, pulvinar dui vitae, vehicula sem. Aenean lobortis scelerisque purus ut tristique.
				</Text>
			</Pressable>
		</View >
	);
}
