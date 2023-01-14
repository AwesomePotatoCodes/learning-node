function combine(item1, item2) {
  try {
    return item1+item2;
  } catch(err) {
    console.log(`${err}`);
  }
} 

console.log(combine(1, 2));