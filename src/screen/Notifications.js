import { StyleSheet, Text, View, ScrollView, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";
import NotificationItem from "../components/NotificationItem";
import Headers from "./Headers";

const Notifications = ({ route }) => {
	const name = route.name;
	return (
		<SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
			<Headers name={name} />
			<ScrollView>
				<NotificationItem />

				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
				<NotificationItem />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Notifications;
