const incrementAndDecreByChoice = function() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log(`count after add by one ${count}`)
    },

    decrement: function () {
      count--;
      console.log(`count after sub 1 ${count}`);
      return 23;
    },
     
    countTillNow: function() {
      count;
      console.log(`count till now ${count}`);
      return 45;
    } 
  };
}