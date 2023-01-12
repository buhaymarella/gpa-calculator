//gpa formula =  -4 / number of items * score + 5
// gpa => 1 - 3 text color green
// gpa => 3 - 5 text color red

function calcGpa(){
    const score = parseInt(document.getElementById("score").value);
    const noItems = parseInt(document.getElementById("noItems").value);

    scoreGpa.value = -4 / noItems * score + 5;

    if (scoreGpa.value <= 3){
        document.getElementById("rem").innerHTML = "Passed";
        document.getElementById("rem").style.color = "green";
        document.getElementById("rem").style.textShadow = "none";
    }
    else{
        document.getElementById("rem").innerHTML = "Failed";
        document.getElementById("rem").style.color = "red";
        document.getElementById("rem").style.textShadow = "none";
    }

}

document.getElementById("scoreGpa").oninput = scoreGpa.value;


function reset(){
    document.getElementById("noItems").oninput = " ";
    document.getElementById("score").oninput = " ";
    document.getElementById("scoreGpa").oninput = " ";
}






