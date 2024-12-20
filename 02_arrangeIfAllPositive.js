const list = [23, 65, 10, 67, 39, 29, 20, 12, 78, 56, 20];

const arrangeDescendingIfAllPositive = function(list) {
  const isAllPositive = list.every((value) => { return value > 0 });
  return function () {
    return isAllPositive ? list.sort((a, b) => {return b - a}) : "Negative numbers";
  }
}

const hasToArrange = arrangeDescendingIfAllPositive(list);
