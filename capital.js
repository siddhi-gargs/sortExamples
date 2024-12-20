const countries = ["India", "United States", "France", "Japan", "Brazil", "Australia", "Germany", "Canada", "Italy", "South Korea"];

const capitals = ["New Delhi", "Washington, D.C.", "Paris", "Tokyo", "Brasília", "Canberra", "Berlin", "Ottawa", "Rome", "Seoul"];

const getCapital = function(country) {

  return function (arrayOfCountry, arrayOfCapitals) {
    const indexOfCapital = arrayOfCountry.indexOf(country);
    const resCapital = arrayOfCapitals[indexOfCapital];
    return [`${country } ${resCapital}`];
  }
}

const inputCountry = getCapital("India");
const respectiveCapital = inputCountry(countries, capitals);

