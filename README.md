<h1 align="center">🍲 Order manager 🥧</h1>
<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width=250px />
</p>
<p align="center">
    <img src="https://cdn.worldvectorlogo.com/logos/realmio.svg" height=75px />
</p>

<h1 align="center">
 <img src="https://img.shields.io/badge/Made with-❤️-red">
</h1>

<h2 align="center">This project has been started with the objective of studying the stack.</h2>

## Summary
* [About](#ℹ%EF%B8%8F-about)
* [Screenshots](#%EF%B8%8F-screenshots)
* [Features](#-features)
* [Technologies](#%EF%B8%8F-technologies-involved)
* [Platforms](#%EF%B8%8F-platforms)
* [Database Management](#-database-management)
* [Requirements to Run](#%EF%B8%8F-requirements-to-run)

### ℹ️ About
This is a pretty particular project, so it's based on the environment wich my mom is working with (delivering homemade italian food).

### 🖼️ Screenshots
<h1 align="center">
 <img height="500" src="assets/gifs/creatingOrder.gif">
 <img height="500" src="assets/gifs/pendingOrders.gif">
</h1>

### 🥏 Features
* It can be added new customers.
* It can be added new orders.
* When it's wanted to close the order, the user must declare the order's price.
    * Some of the price of the products are defined by it's weight, then, sometimes the price can result with decimals values.
* Dashboard 🚧🏗️ (Working on it...)
* Ranking of Customers 🚧🏗️ (Working on it...)


### ⚙️ Technologies involved
* [React Native](https://reactnative.dev/)
* [Realm DB](https://realm.io/)

### 💾 Database management
* [Realm DB](https://realm.io/)
    * I've just needed to implement the generation of ID for any register (IDProvider.js), because that's unfeasible  for Realm. See more about in https://github.com/realm/realm-dotnet/issues/1735.

### 📱 Platforms
* Android
* IOS


