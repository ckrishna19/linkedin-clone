import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { Entypo, AntDesign, Ionicons } from "react-native-vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screen/Home";
import MyNetwork from "./src/screen/MyNetwork";
import Jobs from "./src/screen/Jobs";
import Post from "./src/screen/Post";
import Notifications from "./src/screen/Notifications";
import tw from "twrnc";

export default function App() {
	const Tabs = createBottomTabNavigator();
	return (
		<NavigationContainer>
			<Tabs.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
				<Tabs.Screen
					name="Home"
					component={Home}
					options={{
						tabBarIcon: ({ focused, size }) => (
							<View style={tw`items-center `}>
								<Text
									style={{
										color: focused ? "black" : "gray",
										fontWeight: "bold",
										fontSize: 12,
									}}
								>
									Home
								</Text>
								<Entypo
									name="home"
									size={22}
									style={{
										color: focused ? "black" : "gray",
										fontWeight: "bold",
									}}
								/>
							</View>
						),
					}}
				/>
				<Tabs.Screen
					component={MyNetwork}
					name="MyNetwork"
					options={{
						tabBarIcon: ({ focused, size }) => (
							<View style={tw`items-center `}>
								<Text
									style={{
										color: focused ? "black" : "gray",
										fontWeight: "bold",
										fontSize: 12,
									}}
								>
									My Network
								</Text>
								<Ionicons
									name="people"
									size={22}
									style={{
										color: focused ? "black" : "gray",
										fontWeight: "bold",
									}}
								/>
							</View>
						),
					}}
				/>
				<Tabs.Screen
					component={Post}
					name="Post"
					options={{
						tabBarIcon: ({ focused, size }) => (
							<View style={tw`items-center `}>
								<Text
									style={{
										color: focused ? "black" : "gray",
										fontWeight: "bold",
										fontSize: 12,
									}}
								>
									Post
								</Text>
								<Entypo
									name="squared-plus"
									size={22}
									style={{
										color: focused ? "black" : "gray",
										fontWeight: "bold",
									}}
								/>
							</View>
						),
					}}
				/>
				<Tabs.Screen
					name="Notifications"
					component={Notifications}
					options={{
						tabBarIcon: ({ focused, size }) => (
							<View style={tw`items-center `}>
								<Text
									style={{
										color: focused ? "black" : "gray",
										fontWeight: "bold",
										fontSize: 12,
									}}
								>
									Notifications
								</Text>
								<Ionicons
									name="notifications"
									size={22}
									style={{
										color: focused ? "black" : "gray",
										fontWeight: "bold",
									}}
								/>
							</View>
						),
					}}
				/>
				<Tabs.Screen
					component={Jobs}
					name="Jobs"
					options={{
						tabBarIcon: ({ focused, size }) => (
							<View style={tw`items-center `}>
								<Text
									style={{
										color: focused ? "black" : "gray",
										fontWeight: "bold",
										fontSize: 12,
									}}
								>
									Jobs
								</Text>
								<Entypo
									name="briefcase"
									size={22}
									style={{
										color: focused ? "black" : "gray",
										fontWeight: "bold",
									}}
								/>
							</View>
						),
					}}
				/>
			</Tabs.Navigator>
		</NavigationContainer>
	);
}
