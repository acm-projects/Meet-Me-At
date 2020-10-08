import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	SafeAreaView,
	Image,
	Button,
	Dimensions,
	TextInput,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	autoComplete,
} from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<Image style={styles.icon} source={require("./assets/icon.png")} />
				<TouchableWithoutFeedback>
					<View style={styles.signInButton}>
						<Text style={styles.signInText}> Sign In with Google</Text>
					</View>
				</TouchableWithoutFeedback>
				<Image style={styles.line} source={require("./assets/Line.png")} />
			</View>
			<View style={styles.container}>
				<Text style={styles.signupEmail}>Or</Text>
				<Text style={styles.signupEmail}>Signup with Email</Text>
			</View>
			<View style={styles.textInput}>
				<TextInput
					style={styles.name}
					placeholder="Name"
					placeholderTextColor="#E5E5E5"
					autoComplete="off"
				/>
				<TextInput
					style={styles.email}
					placeholder="Email"
					placeholderTextColor="#E5E5E5"
					autoCompleteType="password"
				/>
				<TextInput
					style={styles.password}
					placeholder="Password"
					placeholderTextColor="#E5E5E5"
					autoComplete="off"
				/>
			</View>
			<View style={styles.createAccountButton}>
				<TouchableWithoutFeedback>
					<Text style={styles.createAccountText}>Create Account</Text>
				</TouchableWithoutFeedback>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#5B5353",
	},
	signInButton: {
		backgroundColor: "#FF6961",
		height: 50,
		width: 250,
		borderRadius: 100,
		position: "absolute",
		top: 255,
		alignItems: "center",
	},
	signInText: {
		color: "#fff",
		height: 40,
		width: 250,
		position: "absolute",
		top: 11,
		left: 17,
		alignItems: "center",
		fontWeight: "bold",
		fontSize: 23,
	},
	createAccountButton: {
		backgroundColor: "#B0AEAE",
		height: 50,
		width: 250,
		borderRadius: 100,
		position: "absolute",
		top: 600,
		alignItems: "center",
	},
	createAccountText: {
		color: "#fff",
		height: 40,
		width: 250,
		position: "absolute",
		top: 10,
		left: 39,
		alignItems: "center",
		fontWeight: "bold",
		fontSize: 23,
	},
	icon: {
		position: "absolute",
		top: 150,
		justifyContent: "center",
		alignItems: "center",
		height: 70,
		width: 70,
		resizeMode: "contain",
	},
	line: {
		position: "absolute",
		top: 330,
		width: 300,
		justifyContent: "center",
		alignItems: "center",
	},
	signupEmail: {
		bottom: 10,
		color: "#FFF",
		alignItems: "center",
		fontSize: 18,
	},
	name: {
		borderWidth: 1,
		borderColor: "#FFF",
		height: 40,
		width: 250,
		bottom: 475,
		color: "#FFF",
		padding: 10,
		margin: 10,
	},
	email: {
		borderWidth: 1,
		borderColor: "#FFF",
		height: 40,
		width: 250,
		bottom: 475,
		color: "#FFF",
		padding: 10,
		margin: 10,
	},
	password: {
		borderWidth: 1,
		borderColor: "#FFF",
		height: 40,
		width: 250,
		bottom: 475,
		color: "#FFF",
		padding: 10,
		margin: 10,
	},
	textInput: {
		justifyContent: "center",
		alignItems: "center",
		top: 160,
	},
});
