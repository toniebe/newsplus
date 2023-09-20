# News Plus

News Plus is a latest news app created with the public API gnews.io. It features several features such as a search feature, simple authentication, and many more.

__Notes__ :
1. the latest version of React Native has a default of using TypeScript, so a little adaptation is necessary.
2. Some files were purposely not included in the .gitignore to facilitate the installation process.


# Used libraries:

1. [React Navigation](https://reactnavigation.org/).
2. [React Native Toast Message](https://github.com/calintamas/react-native-toast-message).
3. [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
4. [React Native Firebase](https://rnfirebase.io/)
5. [Firebase Remote Config](https://rnfirebase.io/remote-config/usage)
6. [Firebase auth](https://rnfirebase.io/auth/usage)
7. [babel plugin module resolver](https://github.com/tleunen/babel-plugin-module-resolver#readme)
8. [React Native WebView](https://github.com/react-native-webview/react-native-webview#readme)

# Author
[Ahmad Fathoni Zumaro](https://github.com/toniebe)

# Design
Design inspired by [Getuk](https://dribbble.com/shots/18667898-Getuk-News-Article-Mobile-App)

# Reference
1. [Responsive mobile screen](https://stackoverflow.com/questions/59738858/react-native-view-scaling)
2. [Illustration](https://undraw.co/)
3. [Image](https://unsplash.com/) 
4. [Firebase Auth and Remote Config](https://rnfirebase.io/)

# Usage
1. clone the repository
2. install all dependencies with command ``` yarn install ``` or ``` npm install ``` and command ``` cd ios && pod install ``` for ios
3. link asset to native project with command ``` npx react-native-asset ```
4. run application with command ``` yarn android ``` or ``` yarn ios ```
5. Initially, you will come across the onboarding page. This onboarding page provides a brief overview of the News Plus application.
6. You can sign up first by clicking the 'Daftar dengan email' button, or you can log in directly using the `user@mailinator.com` account with the password 12345678"
7. On the home page, there is a highlight of news and other content. There is also a drawer menu by clicking the avatar icon in the top right corner.
8. You can log out of your account by clicking the logout button in the drawer menu.


__Notes__: 
1. The gnews.io API has a limit of 100 requests per day, with a time interval of 1 second when accessing the API.
2. Some features are still unfinished.
3. The responsive feature size is still imperfect for Android devices with a screen size greater than 4.5 inches.
4. [There is no Figma mockup, everything follows the design outlined above](#design)
5. No unit tests were performed because I am not yet familiar with TypeScript.

# API

[GNews](https://gnews.io/docs/v4#introduction)

# ENV

1. Create env
2. BASE_URL=https://gnews.io/api/v4
3. API_KEY= create api key in gnews.io
