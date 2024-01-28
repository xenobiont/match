const match = 'javascript'.match(/script/);
console.log(match);
// your code here

const { 0: str, index, input } = match;

console.log(str);
console.log(index);
console.log(input);
