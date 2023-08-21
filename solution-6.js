// Валидность кавычек

const closeBrackets = new Set(')]}');
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
    let lastSymbol = current.value;
    while (!current.done) {
        const value = current.value;
        if (closeBrackets.has(value)) {
            let stackHead = stack.pop();
            while (!openBrackets.has(stackHead)) {
                stackHead = stack.pop();
            }
            if (closePairs.get(value) !== stackHead) {
                return false;
            }
        } else {
            if (!openBrackets.has(value) && closePairs.has(lastSymbol)) {
                return false;
            }
            stack.push(value);
        }
        lastSymbol = value;
        current = tokensIter.next();
    }
    return stack.length === 0;
}

console.log(checkBrackets("(foo[0][0[0]])"))