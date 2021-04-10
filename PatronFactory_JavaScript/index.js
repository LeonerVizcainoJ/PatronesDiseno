const HauweiM30 = require("./huaweim30");
const Huaweim20 = require("./huaweim20");

const myHuaweim30 = new HauweiM30("000123100");
const myHuaweim20 = new Huaweim20("2428346723");

myHuaweim30.displayConfig();
myHuaweim20.displayConfig();