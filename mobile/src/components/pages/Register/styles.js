import React from "react";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		flex: 1,
	},
	formcontainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	textcontainer: {
		flex: 0.2,
		marginTop: "8%",
		marginLeft: "5%",
	},
	text: {
		fontSize: 17,
		fontWeight: "600",
	},
	button: {
		backgroundColor: "#000",
		height: "10%",
		width: "30%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 20,
		color: "#fff",
	},
});
