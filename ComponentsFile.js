//Componets

//Header
function Header(){
    return(
    <div id="Header">
        <h1 id="Interview">Interview Process</h1>
    </div>
    )
}

export default Header;

//Body
function Body(){
    return(
        <div id="Body">
            <h3>Name*</h3>
            <input id="BodyInput" placeholder="Bussiness Development Executive"></input>
            <h2 id="Text">Interview Process Rounds</h2>
            <table>
                <th id="ROW1">Level*</th>
                <th id="ROW2">Name*</th>
                <th id="ROW3">Select Interviewer*</th>
                <tr>
                    <td id="ROW1">1</td>
                    <td id="ROW2">Telephonic Round</td>
                    <td id="ROW3">GIRISH PRASAD KS</td>
                </tr>
                <tr>
                    <td id="ROW1">2</td>
                    <td id="ROW2">Telephonic Round</td>
                    <td id="ROW3">RAKESH APPAJI</td>
                </tr>
            </table>
            <button id="newAdd"><b>NEW ADD +</b></button>
            <div>
                <button id="update"><b>UPDATE</b></button>
                <button id="cancel"><b>CANCEL</b></button>
            </div>
        </div>
    )
}

export default Body;

//SideBar

function Sidebar(){
    return(
        <div id="SideBar">
            
           <button id="Box"> Dashboard</button>
            <button id="Box">Employee</button>
            <button id="Box">Attendance</button>
            <button id="Box">Site/Field Track</button>
            <button id="Box">Payroll</button>
            <button id="Box">Statutory Compliances</button>
            <button id="Box">Leaves</button>
            <button id="Box">Assert Management</button>
            <button id="Box">Goals & performance</button>
            <button id="Box">Recruitment</button>
        </div>
    )
}

export default Sidebar;

//App.js

import React from "react";
import './App.css';
import SideBar from "./Components/SideBar.js"
import Header from './Components/Header.js';
import Body from "./Components/Body";



function App() {
    return (
        <div id="mainContainer">
            <SideBar/>
            <div id="sideContainer">
            <Header/>
            <Body/>
            </div>
            
        </div>

    )
}
export default App;

//App.css

#mainContainer{
    margin: auto;
    height: 95vh;
    width: 80vw;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
}
#SideBar{
    height:95vh;
    width: 20vw;
    background-color: rgba(0, 0, 0, 0.811);
    display: flex;
    flex-direction: column;
}
#sideContainer{
    height: 95vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
}
#Header{
    height: 10vh;
    width: 60vw;
    background-color: rgb(47, 47, 198);
}
#Body{
    height: 85vh;
    width: 60vw;
    margin-left: 2%;
}
#BodyInput{
    width: 25vw;
    height: 3vh;
}
#Text{
    color: blue;
}
#ROW1{
    width: 10vw;
    height: 8vh;
    border: 1px solid grey;
    text-align: center;
}
#ROW2{
    width: 20vw;
    height: 8vh;
    border: 1px solid grey;
}
#ROW3{
    width: 27vw;
    height: 8vh;
    border: 1px solid grey;
}
#newAdd{
    margin-left: 85%;
    margin-top: 4.5%;
    background-color: blue;
    color: white;
    border: 0ch;
    border-radius: 2px;
    height: 4vh;
}
#update{
    border: 0ch;
    border-radius: 10px;
    margin-left: 34%;
    margin-top: 4%;
    height: 5vh;
    width: 8vw;
    background-color: blue;
    color: white;
}
#cancel{
    border: 0ch;
    border-radius: 10px;
    height: 5vh;
    width: 8vw;
}
#Interview{
    color: whitesmoke;
    font-size: 34px;
    margin-top: 0.8%;
    margin-left: 3%;
}
#Box{
    height: 10vh;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.811);
    color: whitesmoke;
}


//index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link href = "https://fonts.googleapis.com/icon?family=Material+Icons" rel = "stylesheet">
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
