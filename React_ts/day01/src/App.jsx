import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Regular function
  function sayHelloRegular() {
    return "Hello";
  }

  // Arrow function
  const sayHelloArrow = () => {
    return "Say Hello";
  };

  // Arrow function with parameters
  const sum = (a, b) => a + b;

  // Arrow function with one parameter
  const aGe = (age) => `Age: ${age}`;

  const name = "Kavya";

  // name = "John"; // Error

  // Ternary operator + current hour
  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  // Car class
  class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }

    showDetails() {
      return `This is a ${this.brand} ${this.model}`;
    }
  }

  const car1 = new Car("Ford", "Mustang");

  // Inheritance
  class ElectricCar extends Car {
    constructor(brand, model, battery) {
      super(brand, model);
      this.battery = battery;
    }

    showBattery() {
      return `Battery: ${this.battery}%`;
    }
  }

  const electricCar = new ElectricCar("Tesla", "Model 3", 90);

  //   Create an array of five product objects. Use:

  const user = [
    {
      name: "kavya",
      totalAmount: 200,
      productName: "Charger",
    },
    {
      name: "Hetvi",
      totalAmount: 1000,
      productName: "Pendrive",
    },
    {
      name: "Kunj",
      totalAmount: 500,
      productName: "Books",
    },
  ];

  const proList = user.map((item) => {
    return {
      name: item.name,
      proWithTax: item.totalAmount * 1.18,
    };
  });

  console.log(proList);
  const price = 500;
  const findPro = user.find((item) => item.totalAmount === price);
  console.log(findPro);
  const totalSellPrice = user.reduce((acc, curr) => {
    acc += curr.totalAmount;
    return acc;
  }, 0);
  // map() to generate product names and prices with tax.
  // filter() to find products above a given price.
  // reduce() to calculate the total price of all products.

  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
  };
  let { firstName, lastName, age } = person;

  return (
    <>
      <section>
        <h1>Kavya Patel</h1>
        <h2>B.Tech CSD Student</h2>

        <p>
          I am a Computer Science and Design student who is learning React,
          Java, Python, and web development.
        </p>
      </section>

      <div>
        <p>{car1.showDetails()}</p>
        <p>{electricCar.showDetails()}</p>
        <p>{electricCar.showBattery()}</p>
        <p>Hello, {greeting}</p>
        <p>Total Price is {totalSellPrice}</p>
        <p>
          Persons name is {firstName} {lastName} and age is {age}
        </p>
      </div>
    </>
  );
}

export default App;
