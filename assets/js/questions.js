/* Credit to David Flanagan, writer of JAVASCRIPT: THE DEFINITIVE GUIDE for the phrasing of some of the correct answers. */

const questions = [
    {
        ask: "Which of these are examples of JavaScript's primitive types?",
        choices: ["strings, numbers, booleans",
            "letters, answers, types",
            "booleans, objects, functions",
            "Peter, Paul, Mary"],
        correct: "strings, numbers, booleans"
    },
    {
        ask: "Which is the correct declaration to use for a variable whose value cannot be changed?",
        choices: ["var",
            "const",
            "let",
            "mac"],
        correct: "const"
    },
    {
        ask: "Which of the following is true about the && operator?",
        choices: ["The && operator evaluates both operands at once",
            "The && operator only evaluates the second operand if the first operand is true",
            "The && operator is rarely used",
            "The && operator performs the Boolean OR operator"],
        correct: "The && operator only evaluates the second operand if the first operand is true"
    },
    {
        ask: "What is the simplest form of an object literal?",
        choices: ["A comma-separated list of colon-separated name:value pairs enclosed within curly braces",
            "A variable declaration",
            "A comma-separated list of items enclosed within brackets",
            "A function"],
        correct: "A comma-separated list of colon-separated name:value pairs enclosed within curly braces"
    },
    {
        ask: "In the array ['apples', 'oranges', 'bananas,' 'kiwis'], what item is at index 4?",
        choices: ["apples",
            "oranges",
            "bananas",
            "kiwis",
            "None of these, because there is no item at index 4"],
        correct: "None of these, because there is no item at index 4"
    },
    {
        ask: "In which HTML element does JavaScript belong?",
        choices: ["<JS>",
            "<script>",
            "<code>",
            "<javascript>"],
        correct: "<script>"
    },
    {
        ask: "TRUE OR FALSE: JavaScript is case-sensitive.",
        choices: ["True",
            "False"],
        correct: "True"
    },
    {
        ask: "With which of the following can JavaScript variable names NOT start?",
        choices: ["Letters",
            "Underscores",
            "Dollar signs",
            "Numbers"],
        correct: "Numbers"
    },
    {
        ask: "What is the output of the code snippet 'let js = 'JavaScript' console.log(js.charAt(7))'?",
        choices: ["r",
            "c",
            "i",
            "7"],
        correct: "c"
    },
    {
        ask: "What can JavaScript NOT do?",
        choices: ["Add or effect the content of HTML",
            "Add or effect styling on the page",
            "Write a game that can be played in a web browser",
            "JavaScript can be used for all of the above"],
        correct: "JavaScript can be used for all of the above"
    },
];


