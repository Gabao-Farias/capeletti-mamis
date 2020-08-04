<h1 align="center">🍲 Order manager 🥧 (🚧🏗️ Still working...)</h1>
<h4 align="center">React-native project to manage orders.</h4>

<p align="center">
    <a href="https://reactnative.dev/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width=250px />
    </a>
</p>

<p align="center">
    <a href="https://realm.io/">
        <img src="https://cdn.worldvectorlogo.com/logos/realmio.svg" width=250px />
    </a>
</p>

<h4 align="center">If this project was possible, is thanks to</h4>

<p align="center">
    <a href="https://rocketseat.com.br/">
        <img src="https://raw.githubusercontent.com/Rocketseat/rocketseat-vscode-react-native-snippets/master/images/rocketseat_logo.png" height=75px />
    </a>
</p>

<h1 align="center">
 <img src="https://img.shields.io/badge/Made with-❤️-%23BF0000">
</h1>


## Summary
* [About](#ℹ%EF%B8%8F-about)
* [Screenshots](#%EF%B8%8F-screenshots)
* [Features](#-features)
* [Technologies](#%EF%B8%8F-technologies-involved)
* [Platforms](#%EF%B8%8F-platforms)
* [Database Management](#-database-management)

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


