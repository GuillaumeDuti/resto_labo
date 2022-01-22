import { Client } from "./src/models/Client.js";
import { foodItems } from "./src/models/Food.js";
import { Restaurant } from "./src/models/Restaurant.js";

const client = new Client("Henry", "Willis", "Cassonade", 3);
const client2 = new Client("Henry", "Willis", "Cassonade", 3);
const restaurant = new Restaurant("la Crêperie centrale", foodItems);

window.Client = Client;
window.client = client;
window.client2 = client2;
window.restaurant = restaurant;
