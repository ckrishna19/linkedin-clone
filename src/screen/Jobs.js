import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, StatusBar, Image } from "react-native";
import React from "react";
import Headers from "./Headers";
import tw from "twrnc";
import { Entypo } from "react-native-vector-icons";
import JobPortal from "../components/JobPortal";

const Jobs = ({ route }) => {
	const name = route.name;
	console.log(name);

	return (
		<SafeAreaView style={[{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }, tw`bg-gray-300 flex-1`]}>
			<Headers name={name} />
			<View style={tw`p-2 bg-white justify-between flex-row`}>
				<Text style={tw`font-bold`}>My Jobs</Text>
				<Text style={tw`font-semibold  text-blue-500`}>See all (0)</Text>
			</View>
			<ScrollView>
				<View style={tw`py-3 px-2 bg-white my-2`}>
					<View style={tw`flex-row justify-between`}>
						<View style={tw`flex-row flex-1 mx-2`}>
							<Image
								source={{
									uri: "https://static.remove.bg/remove-bg-web/913b22608288cd03cc357799d0d4594e2d1c6b41/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
								}}
								style={tw`w-12 h-12 rounded-full mr-2`}
							/>
							<View style={tw`flex-1`}>
								<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, eos?</Text>
								<Text style={tw`px-2 py-2 rounded-full bg-yellow-200 font-bold mt-3 w-44 text-center`}>
									Try Free for 1 Month
								</Text>
							</View>
						</View>
						<Entypo name="dots-three-vertical" size={18} style={tw`text-gray-500`} />
					</View>
				</View>
				<View style={tw`pt-3 px-2 bg-white`}>
					<Text style={tw` font-bold mb-4`}>Recommmended for you</Text>

					<JobPortal />

					<JobPortal />
					<JobPortal />
				</View>
				<View style={tw`bg-white mt-2 px-2`}>
					<View style={tw`my-3`}>
						<Text style={tw` font-bold`}>Job Alert: All Jobs</Text>
						<View style={tw` h-5 flex-row flex-start `}>
							<Text style={tw` text-sm text-gray-500 font-light  overflow-hidden flex-1 `}>
								Alert on worldwide pepsico, pepsico beverage company beverage company gjghj
								nepaldjf,fhlkfsflgfkhwfkushdfkjfnsjd
							</Text>
							<Text style={tw`text-sm text-gray-500 font-light`}>...</Text>
						</View>
					</View>
					<JobPortal />
					<JobPortal />
					<JobPortal />
					<JobPortal />
					<View style={tw`flex-row justify-center border border-gray-700 rounded-full mb-2`}>
						<Text style={tw`py-2 font-bold text-gray-500 `}>See more jobs</Text>
					</View>
				</View>
				<View style={tw`pt-3 px-2 bg-white mt-2`}>
					<Text style={tw` font-bold mb-4`}>Recommmended for you</Text>

					<JobPortal />

					<JobPortal />

					<JobPortal />
					<JobPortal />
					<JobPortal />
					<JobPortal />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Jobs;

const styles = StyleSheet.create({});
