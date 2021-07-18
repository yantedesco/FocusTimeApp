import React, { useState } from "react";

import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { fontSizes, spacing } from "../../utils/sizes";
import { colors } from "../../utils/colors";
import { RoundedButton } from "../../components/RoundedButton";

export const Focus = ({ addSubject }) => {
	const [subject, setSubject] = useState(null);

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<Text style={styles.title}>What would you like to focus on?</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={{ flex: 1, marginRight: spacing.md }}
						onSubmitEditing={({ nativeEvent }) => {
							setSubject(nativeEvent.text);
						}}
					/>
					<RoundedButton
						size={50}
						title="+"
						onPress={() => {
							addSubject(subject);
						}}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0.5,
	},
	innerContainerStyle: {
		flex: 1,
		padding: spacing.md,
		justifyContent: "center",
	},
	title: {
		color: colors.white,
		fontSize: fontSizes.lg,
		fontWeight: "bold",
	},
	inputContainer: {
		paddingTop: spacing.md,
		flexDirection: "row",
		alignItems: "center",
	},
});
