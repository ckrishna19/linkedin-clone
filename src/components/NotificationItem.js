import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo } from "react-native-vector-icons";
const NotificationItem = () => {
	return (
		<View style={tw` bg-blue-100 py-3 border-gray-300 border-t`}>
			<View style={tw` flex-row mx-2 h-13 overflow-hidden items-center`}>
				<Image
					source={{
						uri: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300",
					}}
					style={tw`w-16 h-16`}
				/>
				<Text style={tw`text-sm flex-1 mx-1 py-2`}>
					{" "}
					Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio ut libero esse adipisci. Suscipit odit
					magni aliquid quod esse doloribus ut illum mollitia eaque voluptatem! Consequatur obcaecati explicabo deserunt
					tempore odit recusandae voluptatibus blanditiis corporis alias quidem id minus animi molestias, velit, a saepe
					excepturi voluptates odio ex neque? ipsum dolor, sit amet consectetur
					adipisicnvnhgnvhgnfhgnfvhgfvhfgvhdchngfcgbngfcfghnc gfbgc gfc gfc g
				</Text>
				<View>
					<Text style={tw`mb-1`}>2h</Text>
					<Entypo name="dots-three-vertical" size={16} />
				</View>
			</View>
		</View>
	);
};

export default NotificationItem;

const styles = StyleSheet.create({});
