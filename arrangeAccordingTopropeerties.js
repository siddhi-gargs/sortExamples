const properties = [ {names : "siddhi", age : 34, rollno : 110},
  {names: "likhita", age: 24, rollno: 130},
  {names: "sameera", age: 16, rollno: 121},
  {names: "rohini", age: 10, rollno: 234},
];

const arrangeInGivenOrder = function(attribute, order) {
  return function (properties) {
    return properties.sort(function (a, b) {
      const decidePosition = b[attribute] < a[attribute] ? 1 : a[attribute] < b[attribute] ? -1 : 0;
      return order === "desc" ? -decidePosition : decidePosition;
    })
  }
}

const parameter = arrangeInGivenOrder("names", "desc");