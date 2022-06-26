import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Header from "./Headers";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Hr from "./Hr";
import Profile from "./Profile";

const Home = () => {
	const Drawer = createDrawerNavigator();
	return (
		<Drawer.Navigator
			initialRouteName="profile"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Drawer.Screen name="hr" component={Hr} />
			<Drawer.Screen name="profile" component={Profile} />
		</Drawer.Navigator>
	);
};

export default Home;

const styles = StyleSheet.create({});
