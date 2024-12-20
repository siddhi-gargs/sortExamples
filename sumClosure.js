const num = [31, 45, 56, 23, 45];
const correspond = [56, 23, 56, 34];

const add = function (secondArr) {
  console.log("secondArr", secondArr);
  return function (element,_) {
    return element + secondArr[_];
  }
}

const added = num.map(add(correspond));