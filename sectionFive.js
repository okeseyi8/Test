function safeDivide(a, b) {
  
   try {
    if(b === 0 ) {
      throw new Error("Cannot divide by zero.");
    }
    if(typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both inputs must be numbers.");
    }
    return a / b;
   } catch (err){
    console.error(`Error: ${err.message}`);
    return null;
   }
 
}
console.log(safeDivide(10, 2));    
console.log(safeDivide(10, 0));    
console.log(safeDivide(10, "2"));  