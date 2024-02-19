let wordsForQ1 = [
    "Welcome, In this evaluation you have the option to finish as many sections as you can in the 1 hour mark. It is important for you to know that you will not be able to finish them all in the 1 hour time frame. Each Question has a certain amount of points based on how much time it will take to do. The easier the problem, the lower the number of points given to you. We will evaluate you for the following. How you are tackling each problem. Are you able to take what has been taught in class and apply it correctly. Being able to talk your process out loud so we know what you are thinking. Did you solve the problem correctlyWe will record your session to help us give you a better evaluation score.",
];

let wordsForQ2 = [
    "The",
    "prisoner's",
    "dilemma",
    "is",
    "a",
    "standard",
    "example",
    "of",
    "a",
    "game",
    "analyzed",
    "in",
    "game",
    "theory",
    "that",
    "shows",
    "why",
    "two",
    "completely",
    "rational",
    "individuals",
    "might",
    "not",
    "cooperate,",
    "even",
    "if",
    "it",
    "appears",
    "that",
    "it",
    "is",
    "in",
    "their",
    "best",
    "interests",
    "to",
    "do",
    "so.",
    "Each",
    "prisoner",
    "is",
    "in",
    "solitary",
    "confinement",
    "with",
    "no",
    "means",
    "of",
    "communicating",
    "with",
    "the",
    "other.",
];

const reverse = (string) => {
    let arr = string.split(" ").map((str) => {
        if (str.length <= 5) {
            return str.split("").reverse().join("");
        } else {
            return str;
        }
    });

    console.log(arr.join(" "));
};

reverse(wordsForQ1[0]);

const shortLong = (arr) => {
    let sortArr = arr.sort((length1, length2) => {
        return length1.length - length2.length;
    });

    console.log(sortArr);
};

shortLong(wordsForQ2);

let abc = ["a", "c", "d", "b"];

console.log(abc.sort());

let object = [
    {
        name: "jayvon",
        last: "khuth",
        value: 1
    },
    {
        name: "gieslle",
        last: "pena",
        value: 2
    }
];

console.log(
    object.sort((a, b) => {
        return a.value - b.value;
    })
)
