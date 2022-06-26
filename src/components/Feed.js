import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo, Foundation, AntDesign, Ionicons, Feather, MaterialCommunityIcons } from "react-native-vector-icons";
const Feed = () => {
	return (
		<View style={tw`bg-white mt-2 pb-4`}>
			<View style={tw`py-1 px-2 border-b border-gray-300 flex-row justify-between items-center`}>
				<View style={tw`flex-row  items-center pb-1`}>
					<Image
						source={{
							uri: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
						}}
						style={tw`w-8 h-8 rounded-full `}
					/>
					<Text style={tw`font-bold text-gray-500 px-2`}>Sirish Chalise</Text>
					<Text style={tw`font-light text-gray-500`}>likes this</Text>
				</View>
				<Entypo name="dots-three-vertical" size={22} style={tw`text-gray-500`} />
			</View>
			<View style={tw`flex-row justify-between items-center px-4 py-2`}>
				<View style={tw`flex-row`}>
					<Image
						source={{ uri: "https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg" }}
						style={tw`w-12 h-12 rounded-full`}
					/>
					<View style={tw`ml-3`}>
						<View style={tw`flex-row items-center`}>
							<Text style={tw`font-bold text-gray-500 text-[14px] mr-1`}>Praveen Thakur</Text>
							<Text style={tw`-mt-1 font-light`}>.</Text>
							<Text style={tw`font-light text-xs`}>3rd+</Text>
						</View>
						<Text style={tw`font-light text-xs mt-[1px] mb-[1px]`}>Entrepeneur</Text>
						<View style={tw`flex-row items-center`}>
							<Text style={tw`text-gray-500 text-xs`}>7h</Text>
							<Text style={tw`-mt-1 font-light`}>.</Text>
							<Text style={tw`text-gray-500 text-xs`}>Edited</Text>
							<Text style={tw`-mt-1 font-light`}>.</Text>
							<Entypo name="globe" size={12} style={tw`text-gray-500`} />
						</View>
					</View>
				</View>
				<View style={tw`flex-row `}>
					<Text style={tw`text-blue-500 font-bold text-xl mr-1`}>+</Text>
					<Text style={tw`text-blue-500 font-bold text-lg`}>Follow</Text>
				</View>
			</View>

			<View style={tw``}>
				<Text style={tw`px-2 py-1`}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quam quasi itaque nulla qui minima velit sed
					voluptates quas aut!
				</Text>
				<Image
					source={{ uri: "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg" }}
					style={tw`w-full h-48`}
				/>
			</View>
			<View style={tw` border-b border-gray-200 flex-row items-center py-2 justify-between mx-3`}>
				<View style={tw`flex-row items-center`}>
					<View style={tw`bg-blue-300 w-5 h-5 rounded-full flex-row items-center justify-center`}>
						<Foundation name="like" size={16} style={tw`text-gray-100 `} />
					</View>
					<View style={tw`bg-red-300 w-5 h-5 rounded-full flex-row items-center justify-center mx-[1px]`}>
						<AntDesign name="hearto" size={16} style={tw`text-gray-100 `} />
					</View>
					<View style={tw`bg-green-300 w-5 h-5 rounded-full flex-row items-center justify-center`}>
						<AntDesign name="pluscircleo" size={16} style={tw`text-gray-100 `} />
					</View>

					<Text style={tw`font-light ml-2`}>298</Text>
				</View>
				<View>
					<Text style={tw`text-gray-500 font-bold`}>17 Comments</Text>
				</View>
			</View>
			<View style={tw`flex-row justify-around mt-3`}>
				<View style={tw`items-center`}>
					<AntDesign name="like2" size={20} style={tw`text-gray-500`} />
					<Text style={tw`text-gray-500 font-bold`}>Like</Text>
				</View>
				<View style={tw`items-center`}>
					<Ionicons name="chatbox-ellipses-outline" size={20} style={tw`text-gray-500`} />
					<Text style={tw`text-gray-500 font-bold`}>Comments</Text>
				</View>
				<View style={tw`items-center`}>
					<Feather name="corner-up-right" size={20} style={tw`text-gray-500`} />
					<Text style={tw`text-gray-500 font-bold`}>Share</Text>
				</View>
				<View style={tw`items-center`}>
					<MaterialCommunityIcons name="share" size={20} style={tw`text-gray-500`} />
					<Text style={tw`text-gray-500 font-bold`}>Send</Text>
				</View>
			</View>
		</View>
	);
};

export default Feed;

const styles = StyleSheet.create({});
