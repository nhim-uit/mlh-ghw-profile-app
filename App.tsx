import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Linking, Text, TouchableOpacity, View, FlatList } from "react-native";
import { theme } from "./theme";
import { Image } from "expo-image";
import Card from "./components/card";
import React from "react";
// import MLHLogoColor from './assets/images/mlh-logo-color.png';

const CARD_DATA = [
  {
    id: "1",
    image: "https://framerusercontent.com/images/YjFuGJ9wP4XjRePzFSjoLhAuC8I.png",
    title: "Beginners Week",
    date: "January 10th-16th, 2025",
    description: "Join us for a week of beginner-friendly content to kick off 2025",
    link: "https://ghw.mlh.io/events/beginners-week",
  },
  {
    id: "2",
    image: "https://framerusercontent.com/images/bRjsCV6C2gbKipvWVJ3ItluWY.png",
    title: "AI/ML",
    date: "February 7th-13th, 2025",
    description: "Explore AI and ML at GHW 2025",
    link: "https://ghw.mlh.io/events/ai",
  },
  {
    id: "3",
    image: "https://framerusercontent.com/images/2lMbPTqjBjnHJ68s28gWiKDAnh0.png",
    title: "Expert Week",
    date: "March 7th-13th, 2025",
    description: "Join us for a week on the Cloud!",
    link: "https://ghw.mlh.io/events/cloud",
  },
] 

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

  const renderItem = ({ item } : {item: (typeof CARD_DATA[0])}) => {
    return (
      <View style={styles.cardContainer}>
        <Card image={item.image} title={item.title} date={item.date} description={item.description} link={item.link}></Card>
      </View>
    );
  }
  return (
    <View>
    <FlatList
      ListHeaderComponent={
        <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("./assets/images/mlh-logo.png")}
          transition={1000}
          contentFit="contain"
        />
        <Text style={styles.headlineText}>Global Hack Week</Text>
      
        <Text style={styles.bodyText}>Each month we host a Global Hack Week where you can learn new skills, build your portfolio, attend fun sessions and connect with other hackers in the MLH community.</Text>
        <Text style={styles.bodyText}>It&apos;s free and easy to get started!</Text>
        
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        </View>
      }
     
      data = {CARD_DATA}

      renderItem = { renderItem }
      ItemSeparatorComponent = {() => <View style={styles.separator}></View>}
      contentContainerStyle = {styles.scrollContainer}
    />
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
  cardContainer: {
    alignItems: "center",
    marginTop: 16,
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
  separator: {
    height: 16,
  },
  scrollContainer: {
    paddingVertical: 16,
  },
});
