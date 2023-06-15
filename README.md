# hieuvh3011/bluebik-assessment

## Introduction
Hi guys, as you already know, this application is made for the technical assessment of Bluebik. So I will try to make this document as short as possible. The main purpose of this document is to show you how to build and test the application in Android. I do not have a Macbook at this moment, so I cannot make sure it will run correctly on MacOS

## Use-case 1: I don't want to build, just install applications
If you don't want to build the app, that's fine. Let's check the app that I already deployed here. I cannot push the app into Google Store because I do not have enough time. The review app process will take a lot of time. So I will deploy it into Diawi

- Android app: https://i.diawi.com/14nfvm

## Use-case 2: I don't want to install 2 applications above, it could be viruses
Well, that makes sense. In that case, please check 2 videos that I record about the app after installation and use:
- Link Google Drive: https://drive.google.com/drive/folders/1TY4ZEc_pSaVy1c0l_MGZAywQeFSnFO-F?usp=sharing

## Use-case 3: I want to build the app myself and check the source code
In that case, please follow these steps


Step 1: clone project from git

```bash
$ git clone https://github.com/hieuvh3011/bluebik.git
```

Step 2: install all dependencies:

```bash
$ yarn install
```

or

```bash
$ npm install
```

Step 3: run on an Android or iOS device

```bash
$ npm run android
```

or

```bash
$ npm run ios
```

Step 4: Build an APK or AAB file

```bash
$ npm run android:package:release
```

to build an APK file, or

```bash
$ npm run android:bundle:release
```

to build an AAB file

Step 5: build .ipa file


For this step, please read [this article](https://bianca-dragomir.medium.com/archiving-ios-react-native-app-in-an-nrwl-monorepo-debugging-guide-8f207c69d777)

## Folder structure
This part will describe the folder structure

- `src`: This folder is the main container of all the code inside the application
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Components folder contains all your application components.
    - `commons`: Folder to store any common component that you use through your app (such as a generic button, text fields, etc).
    - `components`: Each component should be stored inside its own folder.
      - `some_components.ts`: is a file code for the main UI on the screen.
      - `component`: is a folder that contains all small components in the `some_components` screen. I split it so it makes `some_components.js` shorter, easy to read, and we can reuse the components later.
  - `i18n`: Folder that contains localization texts
  - `redux`: contain the logic of redux. I used the redux toolkit, so the redux files will not have too much
  - `repository`: Folder to handle all the business logic of the application
  - `route`: a folder that contains all of the navigation in your application.
  - `util`: helper folder, will contain some helpers, such as color, theme, validation, etc.
- `App.tsx`: The main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.
