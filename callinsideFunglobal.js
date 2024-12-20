const data = function() {
  const personalInfo = "address"; 
  return { 
    accessAdress() {
      return personalInfo;
    }
  }

}

const ref = data();
console.log(ref.accessAdress());