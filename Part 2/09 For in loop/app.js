// Iterate over object & log the property and the value of that 
//object using for in loop.
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

//work
// for in loo to calculate tyhe average
const testScores = {
  Math: 90,
  Science: 85,
  History: 78,
  English: 92,
  Geography: 88,
};

function calculateAverageScore(testScore) {
    let totalScore = 0;
    let numSubjects = 0;
  
    for (let subject in testScore) {
      totalScore += testScore[subject];
      numSubjects++;
    }
  
    return totalScore / numSubjects;
  }
  const averageScore = calculateAverageScore(testScores);
  console.log(averageScore);