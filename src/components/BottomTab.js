import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, AntDesign, FontAwesome, Entypo } from "react-native-vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
const BottomTab = ({ name }) => {
	const navigation = useNavigation();
	return (
		<View>
			<View style={tw`flex-row justify-around  bg-white py-2 my-4 shadow-sm`}>
				<TouchableOpacity onPress={() => navigation.navigate("profile")} style={tw`items-center`}>
					<Ionicons style={tw.style(name === "profile" ? "text-black" : "text-gray-500")} name="home" size={18} />
					<Text style={tw.style("font-bold", name === "profile" ? "text-black" : "text-gray-500")}>Home</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate("MyNetwork")} style={tw`items-center`}>
					<Ionicons style={tw.style(name === "MyNetwork" ? "text-black" : "text-gray-500")} name="people" size={18} />
					<Text style={tw.style("font-bold", name === "MyNetwork" ? "text-black" : "text-gray-500")}>My Network</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("Post")} style={tw`items-center`}>
					<AntDesign style={tw`text-gray-500`} name="plussquare" size={18} />
					<Text style={tw`text-gray-500 font-bold`}>Post</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate("Notifications")} style={tw`items-center`}>
					<FontAwesome style={tw.style(name === "Notifications" ? "text-black" : "text-gray-500")} name="bell" size={18} />
					<Text style={tw.style("font-bold", name === "Notifications" ? "text-black" : "text-gray-500")}>Notification</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("Jobs")} style={tw`items-center`}>
					<Entypo style={tw.style(name === "Jobs" ? "text-black" : "text-gray-500")} name="briefcase" size={18} />
					<Text style={tw.style("font-bold", name === "Jobs" ? "text-black" : "text-gray-500")}>Jobs</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default BottomTab;

const styles = StyleSheet.create({});
