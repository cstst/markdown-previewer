export default input => {

  const splitInput = input.split(/(#{1,6} .+)|((?:\* .+\n)+)|((?:[0-9]\. .+\n)+)|(\s{2}\n)|\n{2}/g)
    .filter(block => block !== undefined)
         
  return splitInput;
}