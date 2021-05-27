let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


// Your Code Here!

let rollButton = document.getElementById('roll');
let resultDiv = document.getElementById('result');
let newGraph = document.getElementById('graph');

 function rollDie() {
  return Math.floor(Math.random() * 6) + 1;  
}   
 
function rollTwoDice() {
    let rollOne = rollDie();
    let rollTwo = rollDie();
    return rollOne + rollTwo;
}

//need to tell it to create a div for each spot that isnt null and have it add it to the graph
function renderGraph(){
    for (let index = 2; index < results.length; index++) {

        let newDiv = document.createElement('div');
       newDiv.append(results[index]);
       newGraph.append(newDiv);
        
      }
}

rollButton.addEventListener('click', function () {
    let rollTwoDiceTotal = rollTwoDice();
    results[rollTwoDiceTotal] =+1;
    console.log(results);
    resultDiv.innerText = `You rolled a ${rollTwoDiceTotal}`;

    let graphDiv = renderGraph();
   
})

//create a new function renderGraph(). Have that function loop through the results array. For every value create a div and add it to the graph, adding the number into the div.

