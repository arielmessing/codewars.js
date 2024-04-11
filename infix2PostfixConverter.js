export function toPostfix (infix) {
  const operators = {
    '^' : { precedence: 3 },
    '*' : { precedence: 2, leftAssociative: true },
    '/' : { precedence: 2, leftAssociative: true },
    '+' : { precedence: 1, leftAssociative: true },
    '-' : { precedence: 1, leftAssociative: true }
  };

  const outputQueue = [];
  const operatorsStack = [];

  const lastOperator = () => operatorsStack.at(-1);

  for (let x of infix) {
    if ('0123456789'.indexOf(x) !== -1) {
      outputQueue.push(x);

    } else if (x === '(') {
      operatorsStack.push(x);

    } else if (x === ')') {
      while (lastOperator() && lastOperator() !== '(') {
        outputQueue.push(operatorsStack.pop());
      }

      operatorsStack.pop();

    } else {
      while (
        lastOperator() && 
        lastOperator() !== '(' && 
        (operators[lastOperator()].precedence > operators[x].precedence || 
          (operators[lastOperator()].precedence === operators[x].precedence && operators[x].leftAssociative))) {

        outputQueue.push(operatorsStack.pop());
      }
      
      operatorsStack.push(x);
    }
  }

  while (lastOperator()) {
    outputQueue.push(operatorsStack.pop());
  }

  return outputQueue.join('');
}