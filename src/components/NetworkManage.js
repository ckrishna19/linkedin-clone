import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo } from "react-native-vector-icons";

const NetworkManage = ({ text, name }) => {
	return (
		<View style={tw`bg-white px-4 py-3 mb-2`}>
			<View style={tw`flex-row justify-between`}>
				<Text style={tw`text-blue-500 font-bold text-[15px]`}>{text} </Text>
				<Entypo name={name} size={14} />
			</View>
		</View>
	);
};

export default NetworkManage;

const styles = StyleSheet.create({});
