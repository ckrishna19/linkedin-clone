import { StyleSheet, View, ScrollView, Animated, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";
import Header from "./Headers";
import tw from "twrnc";
import Feed from "../components/Feed";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import BottomTab from "../components/BottomTab";
const Profile = ({ route }) => {
	const scrollY = new Animated.Value(0);
	const diffClamp = Animated.diffClamp(scrollY, 0, 60);
	const translateY = diffClamp.interpolate({
		inputRange: [0, 60],
		outputRange: [0, -60],
	});
	const name = route.name;
	console.log(name);
	return (
		<SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1 }}>
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
					<View style={{ position: "absolute", left: 0, top: 0, right: 0, marginBottom: 10 }}>
						<Header name={name} />
					</View>
				</Animated.View>

				<ScrollView onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)} bounces={false}>
					<View style={{ marginTop: 55 }}>
						<Feed />
						<Feed />
						<Feed />
						<Feed />
					</View>
					{/* <BottomTab name={name} /> */}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default Profile;

const styles = StyleSheet.create({});
