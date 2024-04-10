// Create a factory function for vehicles
function createVehicle(type, brand, model, year) {
    return { 
        type: type, 
        brand: brand,
        model: model, 
        year: year,
        decription: function(){
            console.log(
                `The Type of my car is ${this.type} , the brand is ${this.brand} ,
                the model is ${this.model} , and the year is ${this.year}`
            );
        },
    };
}
  
  // Create two different vehicles using the factory function
  const vehicle2 = createVehicle("Motorcycle", "Honda", "CBR500R", 2019);
  
  // Test the vehicles
  console.log(vehicle2.decription()); 
