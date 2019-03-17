/* This function uses currying */

const tripleAdd = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    }
  }

}

tripleAdd(10)(20)(30);
// returns total of all 3 numbers added together
// tripleAdd(10, 20, 30);
