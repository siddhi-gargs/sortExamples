const useOfclosures = function() {
  let incre = 0;
  const array = []
  
  while (incre <= 4) {
    array.push(function() { 
      console.log("incre", incre);
      return incre; })
    incre++;
  }
  return;
}

const instanceOf = useOfclosures();
const result = instanceOf.reduce(function(x, y) {
  console.log("x + y()", x + y());
  return x + y();}, 0)