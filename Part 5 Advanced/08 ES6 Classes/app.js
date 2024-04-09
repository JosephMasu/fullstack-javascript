class Hero {
  constructor(clubName, clubGoals) {
    this.clubName = clubName;
    this.clubGoals = clubGoals;
  }
  // Adding a method to the constructor
  matchResult() {
    return `${this.clubName} made a draw of ${this.clubGoals}`;
  }
}
const real = new Hero("Real Madrid", 3);
// Creating a new class from the parent
class City extends Hero {
  constructor(clubName, clubGoals, clubScorer) {
    // Chain constructor with super
    super(clubName, clubGoals);

    // Add a new property
    this.clubScorer = clubScorer;
  }
}
const city = new City("Man City", 3, "Phil Foden");
console.log(real.matchResult());
console.log(real.matchResult());



