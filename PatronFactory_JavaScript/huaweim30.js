const Phone = require("./phone");

class HauweiM30 {
    constructor(serialNum) {
        return new Phone(
            serialNum,
            "Huawei Mate 30 Pro",
            "Kirin 888",
            "6 Gb",
            70.9,
            143.6,
            7.7,
            "1125 x 2436"
        );
    }
}

module.exports = HauweiM30;