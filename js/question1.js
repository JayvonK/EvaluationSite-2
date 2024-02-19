let displayCol = document.getElementById("displayCol");

const createWelcome = () => {
    let ul = document.createElement("ul");

    let li1 = document.createElement("li");
    li1.textContent = "How you are tackling each problem.";
    let li2 = document.createElement("li");
    li2.textContent = "Are you able to take what has been taught in class and apply it correctly.";
    let li3 = document.createElement("li");
    li3.textContent = "Being able to talk your process out loud so we know what you are thinking.";
    let li4 = document.createElement("li");
    li4.textContent = "Did you solve the problem correctly";

    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
    ul.append(li4);

    let pEval = document.createElement("p");
    pEval.textContent = "We will evaluate you for the following.";

    let pQuestion = document.createElement("p");
    pQuestion.textContent = "Each Question has a certain amount of points based on how much time it  will take to do. The easier the problem, the lower the number of points given to you.";

    let pSection = document.createElement("p");
    pSection.textContent = "In this evaluation you have the option to finish as many sections as you can in the 45 minute mark. It is important for you to know that you will not be able to finish them all in the 45 minute time frame.";

    let h2 = document.createElement("h2");
    h2.textContent = "Welcome";

    let pRecored = document.createElement("p");
    pRecored.textContent = "We will record your session to help us give you a better evaluation score.";

    displayCol.append(h2);
    displayCol.append(pSection);
    displayCol.append(pQuestion);
    displayCol.append(pEval);
    displayCol.append(ul);
    displayCol.append(pRecored);
}

createWelcome();