const quadrupleAdd = (num1) => {
  return (num2) => {
    return (num3, num4) => {
      return num1 + num2 + num3 + num4;
    };
  };
}

quadrupleAdd(10)(20)(30, 40);
