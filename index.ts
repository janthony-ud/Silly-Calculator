import{question} from 'readline-sync';

type Operator = '+' | '-'| '*' |'/'; 

function main(): void {
    const firstStr: string = question('Enter first number: \n');
    const operator: string = question('Enter operator: \n');
    const secondStr: string = question('Enter second number: \n');

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if(validInput) {
        const firstNum = parseInt(firstStr);
        const secondNum = parseInt(secondStr);
        const result = calculate(firstNum,operator as Operator,secondNum);
        console.log(result);
    }
    else {
        console.log('\nnot a valid input silly goose');
        main();
    }
}

function calculate(a: number, op: Operator, b: number): number {
    switch(op) {
        case '+':
            return a+b;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;

    }
}

function isOperator(operator: string): boolean {
    switch(operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str: string): boolean {
    const a = parseInt(str);
    const isNum: boolean = Boolean(!isNaN(a));
    return isNum;
}

main();