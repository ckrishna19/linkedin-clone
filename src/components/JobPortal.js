import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo } from "react-native-vector-icons";
const JobPortal = () => {
	return (
		<View style={tw`bg-white mb-3`}>
			<View style={tw`flex-row justify-between items-start`}>
				<Image
					style={tw`w-12 h-12 mr-2 `}
					source={{
						uri: "https://media.istockphoto.com/photos/top-view-of-a-white-desktop-concept-job-search-picture-id1279104620?k=20&m=1279104620&s=612x612&w=0&h=Lit4OzCRPW6Z5Pq1L4b9ZjUJvx6McLJySTLnUjJsECE=",
					}}
				/>

				<View style={tw`flex-1 border-b pb-2 border-gray-300`}>
					<View style={tw`flex-row`}>
						<View style={tw`flex-1 -mt-1`}>
							<Text style={tw`font-bold`}>Freelance Frontend Developer</Text>
							<Text style={tw`text-gray-500`}>Nepal remote</Text>

							<Text style={tw`text-gray-500`}>Toptol</Text>
							<View style={tw`flex-row`}>
								<Text style={tw`text-gray-500`}>1 day ago</Text>
								<Text style={tw`text-green-500 font-bold text-xs mx-2`}>12 applications</Text>
								<Text style={tw`text-gray-500`}>Easy Apply</Text>
							</View>
						</View>
						<Entypo name="share-alternative" size={22} style={tw`text-gray-500`} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default JobPortal;

const styles = StyleSheet.create({});
