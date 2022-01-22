import { Client } from "./src/models/Client.js";
import { foodItems } from "./src/models/Food.js";
import { Restaurant } from "./src/models/Restaurant.js";

const client = new Client("Henry", "Willis", "Cassonade", 3, 200);
const restaurant = new Restaurant("la Crêperie centrale", foodItems);

window.client = client;
window.restaurant = restaurant;
