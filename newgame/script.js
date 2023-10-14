const btnns = document.querySelectorAll("button");
let userScor = document.getElementById("User_Score");
let CompScor = document.getElementById("Com_Score");
let Result = document.getElementById("result");

let UPoint = 0;
let CPoint = 0;


// console.log(btnns);
btnns.forEach((indx) => {
    indx.addEventListener("click",() => {
        // console.log(indx.id);

        let ans = matchValue(indx.id , computerValue());
        Result.innerText = ans;

    });
})

//----------------- Computer Values---------------------// 

function computerValue(){
    let array = ["Rock", "Paper", "Scissor"];

    let Travel = Math.floor(Math.random()*array.length);
    // console.log(array[Travel]);
    return array[Travel];
}
// -----------------Check condition of our game--------------//

function matchValue(userVal, ComputerVal){
    if(userVal == ComputerVal){
        return "Its a tie"
    }else if(userVal == "Rock"&&ComputerVal == "Scissor" || userVal == "Paper"&&ComputerVal == "Rock" || userVal == "Scissor"&&ComputerVal == "Paper"){
        UPoint++;
        userScor.innerText = UPoint;
        return "You Win! " + userVal+ " beats " + ComputerVal;
    }
    else{
         CPoint++;
         CompScor.innerText = CPoint;
         return "You Loss " + ComputerVal + " beats " + userVal;
    }

}
