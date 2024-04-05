function Person(firstName, lastName, pl) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.pl = pl;
  }
  
  const masu = new Person("masu", "muhindo", "JavaScript");
  console.log(masu);
  console.log(masu.__proto__);
  console.log(masu.__proto__.__proto__);
  console.log(masu.__proto__.__proto__.__proto__);