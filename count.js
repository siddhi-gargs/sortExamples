const people = [ "A", "B", "C", "D", "E", "F" ];
const things = [ "Brain", "bottle", "toy", "gift" ];

const increment = function () {
  let one = -1;
  return function () {
    if (one === 3) {
      one = -1;
    }
    one++;
    return one;
  }
}

const increRef = increment();

// const a = function(elements) {

//   return function(people) {
//     // console.log("elements", elements);
//     // console.log("things", people);
//     return people + " " + elements[increRef()];
//   }
// }

const distribute = people.map(function (people) { return people + " " + things[ increRef() ] }
 );

console.log("distribute", distribute);