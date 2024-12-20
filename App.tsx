import { StatusBar } from "expo-status-bar";
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { theme } from "./theme";
import { Image } from "expo-image";
import React from "react";
// import MLHLogoColor from './assets/images/mlh-logo-color.png';

export default function App() {
  const handleSignup = () => {
    // console.log("Sign up button pressed");
    // Alert.alert("Sign up to GHW", "You are signed up");
    Alert.alert("Register for GHW", "Are you interested to participate in MLH GHW?", [{
      text: "No",
      style: "destructive",
      onPress: () => console.log("Not signed up :("),
    }, {
      text: "Yes",
      style: "default",
      onPress: () => Linking.openURL("https://events.mlh.io/events"),
    }])
  };

  return (
    <View style={styles.container}>
      <Image 
      style={styles.image} 
      source= {require("./assets/images/mlh-logo.png")}
      transition={1000}
      contentFit="contain"
      />
      <Text style={styles.headlineText}>Global Hack Week</Text>
      <Text style={styles.bodyText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Vitae architecto adipisci amet quod repudiandae! Quis, obcaecati minus. 
        Nostrum, harum non.</Text>
      <Text style={styles.bodyText}>It&apos;s free and easy to get started!</Text>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bodyText: {
    color: theme.colors.black,
    fontSize: 16,
    fontFamily: "System",
    marginVertical: 10,
    textAlign: "justify",
    width: "80%",
  },
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: "center",
  },
  headlineText: {
    ...theme.textVariants.headLine,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  },
  signupButton: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    padding: 16,
  },
  signupButtonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: "normal",
  },
});
