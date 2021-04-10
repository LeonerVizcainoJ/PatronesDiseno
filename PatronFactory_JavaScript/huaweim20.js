const Phone = require("./phone");

class Huaweim20 {
    constructor(serialNum) {
        return new Phone(
            serialNum,
            "Huawei Mate 20 Pro",
            "Kirin 720",
            "6 Gb",
            75.7,
            150.9,
            8.3,
            "828 x 1792"
        );
    }
}

module.exports = Huaweim20;