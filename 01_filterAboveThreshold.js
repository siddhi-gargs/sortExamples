const threshold = 32;
const list = [23, 65, 10, 67, 39, 29, 20, 12, 78, 56, 20];

const filterAboveThreshold = function(list, threshold) {
  const filtered = list.filter((element) => {return element > threshold});
  return filtered.sort((a, b) => {return a - b});
}

const arrangeListAboveTheshold = filterAboveThreshold(list, threshold)

console.log("arrangeListAboveTheshold", arrangeListAboveTheshold);

const filterAndArrange = function(threshold) {
  return function (list) {
    const filtered = list.filter((element) => {return element > threshold});
    return filtered.sort((a, b) => {return a - b});
  }
}

const arrange2 = filterAndArrange(34);
const listInputAsClosure = arrange2(list);