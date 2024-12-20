04-Dec-2024

Ionic Framework - mobile UI toolkit

React Native 
https://reactnative.dev
- write code
- scan QR code and things will appear on your phone

Expo - open-sourced platform, tools to develop universal native app
https://expo.dev

To deploy app to Apple Store:
- need to have a dev account: $99/year

--------------------------------------
# create app
> npx create-expo-app mlh-ghw-profile-app --template

# go to app directory
> cd mlh-ghw-profile-app

# to start expo:
> npm expo start 

# install ngrok
> npm install -g ngrok

or give random url, can share with anyone
> npm start -- --tunnel

# install lint
> npx expo lint

# Use linters for catching bugs

# install other libraries
> npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-native
> npm install
---------------------------------------------
file .eslintrc.js
```
// https://docs.expo.dev/guides/using-eslint/
  
 
  module.exports = {
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-native/all",
      "expo",
      "plugin:react/jsx-runtime",
      "prettier",
    ],
    plugins: ["prettier", "react-native"],
    rules: {
      "prettier/prettier": "error",
      "react-native/no-unused-styles": "error",
      "react-native/no-inline-styles": "error",
    }
  };
```
---------------------------------------------
create file .prettierrc

```
  {
      "semi": true,
      "singleQuote": false,
      "trailingComma": "all",
      "printWidth": 100,
      "tabWidth": 2,
      "useTabs": false,
      "bracketSpacing": true,
      "arrowParens": "always"
  }
```
---------------------------------------------
To use button, use:
- TouchableOpacity

- ---------------------------------------------
```
<View style={styles.container}>
      <Image 
      style={styles.image} 
      source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
      transition={1000}/>
...
</View>
```
---------------------------------------------
        
card.tsx

```
import { ImageSourcePropType, Linking, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';

type CardProps = {
    image: ImageSourcePropType;
    title: string;
    date: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({image, title, date, description, link}) => {
    const handlePress = () => {
        Linking.openURL(link);
    }
    return (
        <View>
            <Image source={image} />
            <Text>{title}</Text>
            <Text>{date}</Text>
            <Text>{description}</Text>
            <TouchableOpacity onPress={handlePress}>
                <Text>Learn More &gt;</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card;
```
------------------------------------------
```
{/* Render Cards */}
      <Card 
        image="https://framerusercontent.com/images/YjFuGJ9wP4XjRePzFSjoLhAuC8I.png"
        title="Beginners Week"
        date="January 10th-16th, 2025"
        description="Join us for a week of beginner-friendly content to kick off 2025"
        link="https://ghw.mlh.io/events/beginners-week"
      />
```
------------------------------------------

use FlatList: https://reactnative.dev/docs/flatlist
