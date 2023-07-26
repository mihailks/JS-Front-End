// function solve(array) {
//   let foods = {};
//   for (let i = 0; i < array.length; i+=2) {
//     const [product, calories] = [array[i], array[i + 1]];
//     foods[product] = Number(calories);
//   }

// console.log(foods);

// //   Object.entries(foods).forEach(([key, value]) => {
// //     console.log(`${key} ${value}`);
// //   });
// }

// solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
// solve(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);

// function solve1(){

//   const person = {
//     firstName: 'Jonh',
//     lastName: 'Doe',
//     age: 50
//   };

//   console.log(person)

// }

// solve1();

// function solve2(name,polulation,treasury){

// const city = {};
// city.name = name;
// city.polulation = polulation;
// city.treasury = treasury;

// console.log(city)

// }

// solve2('Tortuga',7000, 15000);

// function constructionCrew(worker) {
//   if (worker.dizziness === true) {
//     worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
//     worker.dizziness = false;
//   }
//   return worker;
// }

// constructionCrew({
//   weight: 80,
//   experience: 1,
//   levelOfHydrated: 0,
//   dizziness: true,
// });
// constructionCrew({
//   weight: 120,
//   experience: 20,
//   levelOfHydrated: 200,
//   dizziness: true,
// });
// constructionCrew({
//   weight: 95,
//   experience: 3,
//   levelOfHydrated: 0,
//   dizziness: false,
// });

function carFactory(car) {
  if (car.power <= 90) {
    delete car.power;
    car["engine"] = "power: 90, volume: 1900";
  } else if (car.power <= 120) {
    delete car.power;
    car["engine"] = "power: 120, volume: 2400";
  } else {
    delete car.power;
    car["engine"] = "power: 200, volume: 3500";
  }

  const carriage = `{ type: ${car.carriage}, color: ${car.color}`;

  if (car.wheelsize%2!==0){
    car.wheelsize--;
  }




  const newCar = {
    model: car.model,
    engine: car.engine,
    carriage: carriage,
    wheelsize: [car.wheelsize,car.wheelsize,car.wheelsize,car.wheelsize]
  }

  console.log(newCar);
}

carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
carFactory({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});
