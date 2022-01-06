import { clock } from "./clock.js";
import { quote, author } from "./quotes.js";
import { toDoForm, toDoList } from "./todo.js";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintOthers(username);
}

function paintOthers(username) {
  greeting.innerText = `Hello, ${username}`;
  let others = [greeting, clock, quote, author, toDoForm, toDoList];
  for (let i = 0; i < others.length; i++) {
    others[i].classList.remove(HIDDEN_CLASSNAME);
  }
  //   greeting.classList.remove(HIDDEN_CLASSNAME);
  //   clock.classList.remove(HIDDEN_CLASSNAME);
  //   quote.classList.remove(HIDDEN_CLASSNAME);
  //   author.classList.remove(HIDDEN_CLASSNAME);
  //   toDoForm.classList.remove(HIDDEN_CLASSNAME);
  //   toDoList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintOthers(savedUsername);
}
