// Валидность кавычек

const openBrackets = new Set('([{');
const closePairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
]);
function checkBrackets(str) {
    const tokensIter = [...str][Symbol.iterator]();
    const stack = [];
    let current = tokensIter.next();
    while (!current.done) {
        const value = current.value;
        if (closePairs.has(value)) {
            let stackHead = stack.pop();
            if (closePairs.get(value) !== stackHead) {
                return false;
            }
        } else if (openBrackets.has(value)) {
            stack.push(value);
        }
        current = tokensIter.next();
    }
    return stack.length === 0;
}

console.log(checkBrackets("(foo[0][00])"))