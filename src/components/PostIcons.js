import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome } from "react-native-vector-icons";
const PostIcons = ({ name, text }) => {
	return (
		<View style={tw`flex-row items-center pl-5 py-1 my-1`}>
			<FontAwesome name={name} size={14} style={tw`text-gray-500`} />
			<Text style={tw`font-semibold text-[16px] ml-6 text-gray-500`}>{text} </Text>
		</View>
	);
};

export default PostIcons;

const styles = StyleSheet.create({});
