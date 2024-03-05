const inputElem = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const palindromeResult = document.getElementById("check-result");


function isAPalindrome(input){
// Retirer la case
    const inputValidStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
// Inverser l'input
    const inputReverse = [...inputValidStr].reverse().join("");
    if (input === ""){
        alert("Please input a value");
    }else{
    if(inputValidStr === inputReverse){
        palindromeResult.innerHTML = `${input} est un palindrome.`;
    }else{
        palindromeResult.innerHTML = `${input} n'est pas un palindrome.`;
    };
}
};

checkButton.addEventListener("click", () => {
    isAPalindrome(inputElem.value);
});
