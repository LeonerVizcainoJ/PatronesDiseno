const Burger = require("./builder")
const triplemeat = new Burger();

triplemeat.setMeet("Triple Meat")
    .setCheese("Yellow Cheese")
    .setBacon("Doble Bacon")
    .setTomate("Fresh Tomate")
    .bake()