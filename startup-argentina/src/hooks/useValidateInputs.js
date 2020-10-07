export const useValidateInputs = (inputs, requiredInputs) => {
  const invalidInputs = requiredInputs.filter((input) => {
    return isValidInput(inputs, input) ? input : null;
  });

  return invalidInputs;
};

function isValidInput(inputs, currentInput) {
  return !inputs[currentInput] || inputs[currentInput].length <= 0;
}
