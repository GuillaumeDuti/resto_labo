import { Client } from "./src/models/Client.js";
import { foodItems } from "./src/models/Food.js";
import { Restaurant } from "./src/models/Restaurant.js";

let user = new Client("Henry", "Willis", "sucre", 2, 120);
let resto = new Restaurant("La crêperie central", foodItems);

console.log(user);
console.log(resto);

window.user = user;
window.resto = resto;