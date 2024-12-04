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
