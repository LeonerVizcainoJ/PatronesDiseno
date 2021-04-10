class Burger {
    setMeet(Meat) {
        this.meat = meat;
        return this;
    }
    setCheese(cheese) {
        this.cheese = cheese;
        return this;
    }
    setBacon(bacon) {
        this.bacon = bacon;
        return this;
    }
    setTomate(tomate) {
        this.tomate = tomate;
        return this
    }
    bake() {
        console.log(this);
    }
}

module.exports = Burger;