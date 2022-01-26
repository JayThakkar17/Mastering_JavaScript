// here are the example of function calling another function

const cutFruitPiece = (fruit) => {
  return fruit * 4;
};

const fruitProcessor = (apple, orange) => {
  const applePieces = cutFruitPiece(apple);
  const orangePieces = cutFruitPiece(orange);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
  return juice;
};

const result = fruitProcessor(4, 10);
console.log('RESULT', result);
