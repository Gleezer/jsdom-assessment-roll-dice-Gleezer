let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


// Your Code Here!



 function rollDie() {
  return Math.floor(Math.random() * 6) + 1;  
}   
 
function rollTwoDice() {
    
    return rollDie() + rollDie();
}

let rollButton = document.getElementById('roll');
// let resetButton = document.getElementById('reset');
let resultDiv = document.getElementById('result');
let graph = document.getElementById('graph');
let roll1000 = document.getElementById('roll1000');

roll1000.addEventListener("click", roll1000Dice);
rollButton.addEventListener("click", rollDice);


function rollDice() {
    let roll = rollTwoDice();
    result.innerHTML = `You rolled a ${roll}`;
    results[roll] += 1;
    console.log(results);
    renderGraph();
}

function roll1000Dice(){
    let roll = 0;
    for (let index = 1; index <= 1000; index++) {
        roll = rollTwoDice();
        results[roll] += 1;
                
    }
    renderGraph();
    result.innerHTML = `You rolled 1000 times!`;
}



function renderGraph(){
    let div = "";
    for (let index = 2; index < results.length; index +=1){
        div +=  `<p>You rolled ${index} : ${results[index]} times.</p>`
        
    }
    graph.innerHTML = div;
}