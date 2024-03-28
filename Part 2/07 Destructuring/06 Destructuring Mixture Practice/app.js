const data = {
    user: {
      id: 123,
      name: "Masu Joe",
      age: 25,
      email: "masu.doe@example.com",
      address: {
        city: "Kampala",
        country: "UG",
      },
      hobbies: ["Reading", "Painting", "Cooking"],
      scores: {
        math: 95,
        science: 88,
        history: 75,
      },
    },
    products: [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 800 },
      { id: 3, name: "Tablet", price: 500 },
    ],
    settings: {
      darkMode: true,
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      language: "English",
    },
  };
  
  // Extracting data using object destructuring
  const {
    user: {
      name,
      age,
      id,
      address: { city, country },
      hobbies,
      scores: { math, science, history },
      email,
    },
    products: [product1, product2, product3],
    settings: {
      darkMode,
      notifications: {
        email: emailNotifications,
        sms: smsNotifications,
        push: pushNotifications,
      },
      language,
    },
  } = data;
//work
  // Logging the extracted data using template literals
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Id: ${id}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Product 1: ${product1.name} => $${product1.price}`);
console.log(`Product 2: ${product2.name} => $${product2.price}`);
console.log(`Product 3: ${product3.name} => $${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`Email Notifications: ${emailNotifications}`);
console.log(`SMS Notifications: ${smsNotifications}`);
console.log(`Push Notifications: ${pushNotifications}`);
console.log(`Language: ${language}`);