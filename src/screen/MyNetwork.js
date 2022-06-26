import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform, Animated } from "react-native";
import React from "react";
import Headers from "./Headers";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Feed from "../components/Feed";
import NetworkManage from "../components/NetworkManage";
import PersonProfile from "../components/PersonProfile";
import tw from "twrnc";
const MyNetwork = ({ route }) => {
	const scrollY = new Animated.Value(0);
	const diffClamp = Animated.diffClamp(scrollY, 0, 60);
	const translateY = diffClamp.interpolate({
		inputRange: [0, 60],
		outputRange: [0, -60],
	});
	const name = route.name;
	return (
		<SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
			<View style={tw`bg-gray-300`}>
				<ExpoStatusBar backgroundColor="white" />
				<Animated.View
					style={{
						transform: [
							{
								translateY: translateY,
							},
						],
						position: "relative",
						zIndex: 10,
					}}
				>
					<View style={{ position: "absolute", left: 0, top: 0, right: 0 }}>
						<Headers name={name} />
					</View>
				</Animated.View>

				<ScrollView onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)} bounces={false}>
					<View style={tw`mt-12`}>
						<NetworkManage name="chevron-thin-right" text="Manage my network" />
						<NetworkManage name="chevron-thin-right" text="Invitations" />
					</View>
					<View style={tw` bg-white`}>
						<PersonProfile />
						<PersonProfile />
						<Text style={tw`text-center py-2 border w-1/2 mx-auto rounded-full mb-2`}>See more</Text>
					</View>

					<View style={tw`bg-white mt-2`}>
						<Text>manage network</Text>
						<View style={tw``}>
							<Text style={tw`bg-red-200`}>1</Text>
							<Text>2</Text>
							<Text>1</Text>
							<Text>2</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default MyNetwork;

const styles = StyleSheet.create({});
