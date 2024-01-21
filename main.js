// main.js
console.log("appwrite.js loaded");

import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("65acb95d72ef0e82a76c");

const account = new Account(client);

function signin() {
    account.createOAuth2Session("google");
    var btn = document.getElementById("myButton");
    btn.addEventListener("click", signin);
}
