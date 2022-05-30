<br/>

A well-structured React Native Boilerplate with Typescript, Redux, Jest support and everything you'll ever need to deploy rock solid apps.

<br/>

## About

React Native lets you build mobile apps using JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.

It offers faster mobile development, and more efficient code sharing across iOS, Android, and the Web, without sacrificing the end user’s experience or application quality.

This boilerplate is useful to kick-start your project, as it provides latest powerfull tools which specified at the below.

<br/>

## Features

This boilerplate includes the latest powerfull tools.

- **Typescript** - Superset of JavaScript which primarily provides optional static typing, classes and interfaces. path support(allias)
- **React Navigation** - Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.
- **React Query** - Performant and powerful data synchronization for React. Fetch, cache and update data in your React and React Native applications all without touching any "global state".
- **Redux** - State management
- **Redux Toolkit** - The official, opinionated, batteries-included toolset for efficient Redux development
- **Redux Persist** - Persist and rehydrate a redux store.
- **Axios** - Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase).
- **Babel** - The compiler for next generation JavaScript. Module(alias) support
- **TSLint** - Contains TypeScript-specific options for our project.
- **CodePush** - CodePush is a cloud service that enables Cordova and React Native developers to deploy mobile app updates directly to their users' devices.
- **React Native SVG** - React Native SVG provides SVG support to React Native on iOS and Android.
- **React Native Fast Image** - FastImage, performant React Native image component.
- **React-i18next** - Integrates I18n with React Native. Uses the user preferred locale as default.
- **Jest support** - Complete and ready to set-up JavaScript testing solution. Works out of the box for any React project.
- **Husky** - Modern native git hooks made easy. You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.
- **Eslint & Prettier** - Find and fix problems in your JavaScript code. Make your code clean.

<br/>

_Here are a few highlights to look out for in this boilerplate_

<dl>
  
  <dd>The boilerplate includes tsconfig.json which contains a list of your input files as well as all your compilation settings.<dd>

> One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

  <dd>CodePush <dd>

> The CodePush plugin helps get product improvements in front of your end users instantly, by keeping your JavaScript and images synchronized with updates you release to the CodePush server. This way, your app gets the benefits of an offline mobile experience, as well as the "web-like" agility of side-loading updates as soon as they are available

</dl>

<br/>

## Getting Started

1. Clone the repository and install the dependencies:

```sh
git clone https://github.com/kholiqcode/react-native-boilerplate
```

2. To create a new app, go to the choosen app directory on the CLI then run one of the following methods:

**npm**

```sh
yarn install
```

3. Once the installation is done, you can run the following command:

**ios**

```
yarn ios
```

**android**

```
yarn android
```

 <br/>

### Predefined commands on package.json

Cache clear and restart react native bundler

```
yarn clear
```

Bundler analyzer

```
yarn start
```

Run the tests

```
yarn test
```

Run eslint

```
yarn lint
```

Fix eslint

```
yarn lint:fix
```

 <br/>

**_At this point, your project layout should look like this:_**

 <br/>

```
.
├── App.tsx
├── Gemfile
├── LICENSE
├── README.md
├── __tests__
│   └── App-test.tsx
├── app.json
├── babel.config.js
├── index.d.ts
├── index.js
├── metro.config.js
├── package-lock.json
├── package.json
├── react-native.config.ts
├── src
│   ├── assets
│   │   ├── fonts
│   │   │   ├── OpenSans
│   │   │   └── Poppins
│   │   ├── images
│   │   │   ├── common
│   │   │   │   ├── index.ts
│   │   │   │   ├── logo.png
│   │   │   │   └── logo.svg
│   │   │   ├── dummy
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.d.ts
│   │   │   ├── Icon
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.d.ts
│   │   │   ├── Image
│   │   │   │   ├── index.tsx
│   │   │   │   └── type.d.ts
│   │   │   ├── Text
│   │   │   │   ├── index.tsx
│   │   │   │   └── types.d.ts
│   │   │   ├── TextInput
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.d.ts
│   │   │   └── index.ts
│   │   ├── containers
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   ├── molecules
│   │   │   └── index.ts
│   │   └── organisms
│   │       └── index.ts
│   ├── config
│   │   ├── axios.ts
│   │   ├── constant.ts
│   │   ├── index.ts
│   │   ├── setting.ts
│   │   └── url.ts
│   ├── hooks
│   │   ├── index.ts
│   │   ├── useLayout.ts
│   │   ├── useOnlineManager.ts
│   │   ├── useReactQuery.ts
│   │   ├── useRefetchOnFocus.ts
│   │   └── useRequest.ts
│   ├── index.tsx
│   ├── lang
│   │   ├── en.json
│   │   └── id.json
│   ├── navigation
│   │   ├── components
│   │   │   ├── Drawer
│   │   │   │   └── index.ts
│   │   │   ├── Tab
│   │   │   │   ├── TabIcon.tsx
│   │   │   │   ├── TabNavigator.tsx
│   │   │   │   ├── index.ts
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.d.ts
│   │   │   └── index.ts
│   │   ├── config
│   │   │   ├── app.tsx
│   │   │   ├── index.ts
│   │   │   ├── modal.ts
│   │   │   ├── share.ts
│   │   │   └── types.d.ts
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── redux
│   │   ├── index.ts
│   │   ├── rootReducer.ts
│   │   └── slices
│   │       ├── application
│   │       │   ├── index.ts
│   │       │   └── types.d.ts
│   │       ├── index.ts
│   │       └── user
│   │           ├── index.ts
│   │           └── types.d.ts
│   ├── screens
│   │   ├── Home
│   │   │   ├── hook.ts
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.d.ts
│   │   ├── Modal
│   │   │   ├── ModalSelectFont
│   │   │   │   ├── hook.ts
│   │   │   │   ├── index.tsx
│   │   │   │   ├── styles.ts
│   │   │   │   └── types.d.ts
│   │   │   └── index.ts
│   │   ├── Setting
│   │   │   ├── hook.ts
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.d.ts
│   │   ├── SignIn
│   │   │   ├── hook.ts
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.d.ts
│   │   ├── Splash
│   │   │   ├── hook.ts
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.d.ts
│   │   └── index.tsx
│   ├── services
│   │   ├── index.ts
│   │   └── user
│   │       ├── index.ts
│   │       └── type.d.ts
│   └── theme
│       ├── animation
│       │   └── index.ts
│       ├── base
│       │   └── index.ts
│       ├── color
│       │   ├── index.ts
│       │   └── types.d.ts
│       ├── font
│       │   ├── index.ts
│       │   └── types.d.ts
│       ├── index.ts
│       ├── mixin
│       │   └── index.ts
│       ├── pallete
│       │   ├── index.ts
│       │   └── types.d.ts
│       └── typography
│           ├── index.ts
│           └── types.d.ts
├── tsconfig.json
└── yarn.lock

```
