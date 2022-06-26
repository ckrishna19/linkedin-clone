import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo } from "react-native-vector-icons";
const PersonProfile = () => {
	return (
		<View style={tw`px-3 py-2 bg-white mb-3`}>
			<View style={tw`bg-white relative border rounded-lg overflow-hidden`}>
				<Image
					source={{
						uri: "https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?cs=srgb&dl=pexels-valiphotos-589840.jpg&fm=jpg",
					}}
					style={tw`w-full h-28`}
				/>
				<View style={{ position: "absolute", top: 4, right: 4, zIndex: 10 }}>
					<Entypo name="circle-with-cross" size={24} color="white" />
				</View>
				<View style={tw`flex-row justify-between mx-6 items-center`}>
					<Image
						source={{
							uri: "https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
						}}
						style={tw`h-24 w-24 rounded-full z-10 -mt-12 border-2 border-indigo-500`}
					/>
					<Text style={tw`px-4 py-2 border-2 border-blue-500 font-bold text-blue-500 rounded-full`}>Follow</Text>
				</View>
				<View style={tw`p-2`}>
					<Text style={tw`font-bold `}>Kripa Bhujel</Text>
					<Text style={tw`font-light text-[13px] mt-1`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cupiditate!
					</Text>
				</View>
			</View>
		</View>
	);
};

export default PersonProfile;
