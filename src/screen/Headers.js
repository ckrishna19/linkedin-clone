import { StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import tw from "twrnc";
import { EvilIcons, MaterialIcons, Ionicons, Entypo } from "react-native-vector-icons";
const Header = ({ name }) => {
	return (
		<View style={tw` bg-white  py-3`}>
			<View style={tw` flex-row items-center text-gray-500 mx-4 `}>
				<TouchableOpacity>
					<Image
						source={{
							uri: "https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
						}}
						style={tw`w-9 h-9 rounded-full`}
					/>
				</TouchableOpacity>

				<View style={tw`flex-row items-center bg-gray-200 py-1 flex-1 rounded-md mx-2`}>
					<EvilIcons name="search" size={24} style={tw`text-gray-500 px-2`} />
					<TextInput placeholder="Search" style={tw`text-gray-500 flex-1 text-[14px]`} />
					<MaterialIcons name="qr-code-scanner" size={24} style={tw`text-gray-500 px-2`} />
				</View>
				<View style={tw`flex-row`}>
					<Entypo
						name="dots-three-vertical"
						size={22}
						style={tw.style(
							"text-gray-500 mx-3",
							(name === "MyNetwork" || name === "profile" || name === "Notifications") && "hidden"
						)}
					/>
					<Ionicons name="md-chatbox-ellipses" size={22} style={tw`text-gray-500`} />
				</View>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({});
