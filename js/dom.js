
let sixNumber = document.getElementById("six");
let convertedSixNumber = parseInt(sixNumber.innerText);

let twentyThreeNumber = document.getElementById("twenty-three");
let convertedTwentyThreeNumber = parseInt(twentyThreeNumber.innerText);

document.getElementById("btn-one").addEventListener("click", function (event) {
    document.getElementById("btn-one").style.backgroundColor = "transparent";
    document.getElementById("btn-one").disabled = "true";
    alert("Board updated Successfully");

    convertedSixNumber -= 1;
    sixNumber.innerText = convertedSixNumber;

    convertedTwentyThreeNumber += 1;
    twentyThreeNumber.innerText = convertedTwentyThreeNumber;

    function passMassage() {
        let sourceMassage = document.getElementById("massage-one").innerText;
        let dateAndTime = new Date().toLocaleString();

        let targetCard = document.getElementById("show-massage-one");
        targetCard.innerHTML = `<h2> You have completed the${sourceMassage}</h2><p>${dateAndTime}</p>`;
    };
    passMassage();
})

document.getElementById("btn-two").addEventListener("click", function () {
    document.getElementById("btn-two").style.backgroundColor = "transparent";
    document.getElementById("btn-two").disabled = "true";
    alert("Board updated Successfully");

    convertedSixNumber -= 1;
    sixNumber.innerText = convertedSixNumber;

    convertedTwentyThreeNumber += 1;
    twentyThreeNumber.innerText = convertedTwentyThreeNumber;

    function passMassage() {
        let sourceMassage = document.getElementById("massage-two").innerText;
        let dateAndTime = new Date().toLocaleString();

        let targetCard = document.getElementById("show-massage-two");
        targetCard.innerHTML = `<h2> You have completed the ${sourceMassage}</h2><p>${dateAndTime}</p>`;
    };
    passMassage();
})

document.getElementById("btn-three").addEventListener("click", function () {
    document.getElementById("btn-three").style.backgroundColor = "transparent";
    document.getElementById("btn-three").disabled = "true";
    alert("Board updated Successfully");

    convertedSixNumber -= 1;
    sixNumber.innerText = convertedSixNumber;

    convertedTwentyThreeNumber += 1;
    twentyThreeNumber.innerText = convertedTwentyThreeNumber;

    function passMassage() {
        let sourceMassage = document.getElementById("massage-three").innerText;
        let dateAndTime = new Date().toLocaleString();

        let targetCard = document.getElementById("show-massage-three");
        targetCard.innerHTML = `<h2> You have completed the ${sourceMassage}</h2><p>${dateAndTime}</p>`;
    };
    passMassage();
})
document.getElementById("btn-four").addEventListener("click", function () {
    document.getElementById("btn-four").style.backgroundColor = "transparent";
    document.getElementById("btn-four").disabled = "true";
    alert("Board updated Successfully");

    convertedSixNumber -= 1;
    sixNumber.innerText = convertedSixNumber;

    convertedTwentyThreeNumber += 1;
    twentyThreeNumber.innerText = convertedTwentyThreeNumber;

    function passMassage() {
        let sourceMassage = document.getElementById("massage-four").innerText;
        let dateAndTime = new Date().toLocaleString();

        let targetCard = document.getElementById("show-massage-four");
        targetCard.innerHTML = `<h2> You have completed the ${sourceMassage}</h2><p>${dateAndTime}</p>`;
    };
    passMassage();
})
document.getElementById("btn-five").addEventListener("click", function () {
    document.getElementById("btn-five").style.backgroundColor = "transparent";
    document.getElementById("btn-five").disabled = "true";
    alert("Board updated Successfully");

    convertedSixNumber -= 1;
    sixNumber.innerText = convertedSixNumber;

    convertedTwentyThreeNumber += 1;
    twentyThreeNumber.innerText = convertedTwentyThreeNumber;

    function passMassage() {
        let sourceMassage = document.getElementById("massage-five").innerText;
        let dateAndTime = new Date().toLocaleString();

        let targetCard = document.getElementById("show-massage-five");
        targetCard.innerHTML = `<h2> You have completed the ${sourceMassage}</h2><p>${dateAndTime}</p>`;
    };
    passMassage();
})
document.getElementById("btn-six").addEventListener("click", function () {
    document.getElementById("btn-six").style.backgroundColor = "transparent";
    document.getElementById("btn-six").disabled = "true";
    alert("Board updated Successfully");

    convertedSixNumber -= 1;
    sixNumber.innerText = convertedSixNumber;

    convertedTwentyThreeNumber += 1;
    twentyThreeNumber.innerText = convertedTwentyThreeNumber;

    function passMassage() {
        let sourceMassage = document.getElementById("massage-six").innerText;
        let dateAndTime = new Date().toLocaleString();

        let targetCard = document.getElementById("show-massage-six");
        targetCard.innerHTML = `<h2> You have completed the ${sourceMassage}</h2><p>${dateAndTime}</p>`;
    };
    passMassage();
})

document.getElementById("clear-history").addEventListener("click", function () {
    document.getElementById("all-massage").style.display = "none";
});

const color = ["#6C9BCF", "#F4C542", "#A8E6CF", "#FF6B6B", "#B39DDB", "#008080", "#FF8C42","#E29578", "#333333"];

let index=0;


document.getElementById("them").addEventListener("click", function () {
    document.body.style.backgroundColor= color[index];
    index = (index+1) % color.length;
    
});

const today = new Date();
const option = {weekday:"long", year:"numeric", month:"long", day:"numeric"};
document.getElementById("date").textContent = today.toLocaleDateString("en-US", option);

