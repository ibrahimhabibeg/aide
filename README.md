<div align='center'>

<img src=https://i.imgur.com/mPY0eWI.png alt="logo" />

<h1>Aide</h1>
<p>Aide is an AI-powered application that helps high school students succeed in their studies. The app can help students with a variety of tasks, including writing essays, explaining topics, and analyzing words..</p>

<h4> <span> · </span> <a href="https://github.com/ibrahimhabibeg/aide/blob/master/README.md"> Documentation </a> <span> · </span> <a href="https://github.com/ibrahimhabibeg/aide/issues"> Report Bug </a> <span> · </span> <a href="https://github.com/ibrahimhabibeg/aide/issues"> Request Feature </a> </h4>


</div>

# 📙 Table of Contents

- [About the Project](#⭐-about-the-project)
- [Local Installation](#🧰-local-installation)
- [FAQ](#❔-faq)
- [Contact](#🤝-contact)
- [Acknowledgements](#💎-acknowledgements)


## ⭐ About the Project

### 🎯 Features

- Email Generation
- Essay Writing
- Explanation
- Poem Writing
- Word Analysis

### 🧑‍💻 Technologies

- React Native
- Expo 
- React Navigation
- Axios
- PaLM API


## 🧰 Local Installation

### ⚠️ Prerequisites


- Install Node JS in your computer<a href="https://nodejs.org/en"> Here</a>

- This project uses Yarn as package manager
```bash
npm i -g yarn
```



### 🏃‍♂️ Run Locally

Clone the project

```bash
git clone https://github.com/ibrahimhabibeg/aide
```

Go to the project directory
```bash
cd aide
```

Install dependencies
```bash
yarn install
```

Create environment variables file
```bash
touch .env
```

Add your PaLM API key to .env file
```
API_KEY=my_api_key
```

Start the app
```bash
npm run start
```


## ❔ FAQ


Q. How are questions handled by the program?

A. The queries are handled by PaLM API by Google.

Q. What OS are supported?

A. The app supports both Android and IOS.

Q. What languages are supported?

A. Currently, English is the only supported language.

Q. I can't find app on Play Store or App Store.

A. Currently, the app isn't released to production since PaLM api is currently in public preview. During public preview, developers can use the PaLM API only for experimentation and prototyping. Production applications are not permitted.

Q. Is the app production ready?

A. No. Currently PaLM API is currently in public preview; therefore, it can't be used in production applications. 

Since the app isn't built for production, I decided to store the API key in the .env file and call PaLM API directly from the client side. This is a mistake from the security prespective. As long as the app isn't going to be deployed to play store or app store, this mistake is acceptable.

If you are going to build the app for production You will have to build a backend program that will store the API key and use it to contact PaLM API. The mobile app will then use the API provided by the backend system you have built.


## 🤝 Contact

Ibrahim Habib - - ibrahimhabib.eg@gmail.com  - - [LinkedIn](https://www.linkedin.com/in/ibrahim-habib-a2948b286/)

Project Link: [Github](https://github.com/ibrahimhabibeg/aide)

## 💎 Acknowledgements

- https://hotpot.ai/  for Images and Splash Screen Creation
- https://www.freepik.com/ for Logo Creation