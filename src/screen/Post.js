import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { AntDesign, Entypo, FontAwesome } from "react-native-vector-icons";
import PostIcons from "../components/PostIcons";

const Post = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
			<View style={tw`bg-white`}>
				<View style={tw`py-2 bg-white mb-1 `}>
					<View style={tw`flex-row items-center justify-around`}>
						<View style={tw`flex-row items-center `}>
							<AntDesign name="close" size={24} />
							<Text style={tw`ml-4 font-bold text-[18px] text-gray-500`}>Share Post</Text>
						</View>
						<Text style={tw` font-bold text-[18px] text-gray-500`}>Post</Text>
					</View>
				</View>
				<View>
					<View style={tw`bg-white pl-5`}>
						<View style={tw`pt-3 pb-1`}>
							<View style={tw`flex-row items-center`}>
								<Image
									source={{
										uri: "https://static.remove.bg/remove-bg-web/eb1bb48845c5007c3ec8d72ce7972fc8b76733b1/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
									}}
									style={tw`w-13 h-13 rounded-full mr-4`}
								/>
								<View>
									<Text style={tw`mb-1`}>Sirish Chalise</Text>
									<View style={tw`flex-row items-center py-1 border border-gray-300 px-2 rounded-full`}>
										<Entypo name="globe" size={14} style={tw`text-gray-500`} />
										<Text style={tw`mx-2 text-gray-500`}>Anyone</Text>
										<FontAwesome name="caret-down" size={14} style={tw`text-gray-500`} />
									</View>
								</View>
							</View>
						</View>
						<View style={tw`mt-2 mr-3 h-60 `}>
							<TextInput
								placeholder="What are you talking about "
								multiline={true}
								numberOfLines={5}
								style={tw`text-gray-800 focus:outline-none`}
							/>
						</View>
					</View>

					<View style={tw` mx-3 rounded-lg shadow-gray-200 my-3`}>
						<View style={tw`bg-gray-500 w-16 h-[4px] mx-auto rounded-full mt-4 mb-1`} />
						<View style={tw`-mt-2`}>
							<PostIcons name="photo" text="Add a Photo" />
							<PostIcons name="video-camera" text="Take a Video" />
							<PostIcons name="cog" text="Celebrate an accasion" />
							<PostIcons name="file-o" text="Add a document" />
							<PostIcons name="briefcase" text="Share that you're hiring" />
							<PostIcons name="user" text="Find an expert" />
							<PostIcons name="bar-chart" text="Create a poll" />
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Post;
