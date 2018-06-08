var goal;
var wins = 0;
var lost = 0;
var userScore;

$(document).ready(function(){

    inital();

    $(".btn").on("click", function(){

        userScore += parseInt(this.value);
        
        $("#score").text(userScore);

        if(userScore > goal){
            lost++;
            $("#lose").text(lost);
            inital();

        }else if(userScore === goal){
            wins++;
            $("#win").text(wins);
            inital();
        }
    });

});

function inital(){
    userScore = 0;
    goal = Math.floor((Math.random() * 101) + 19);

    $("#score").text(userScore);
    $("#ranNum").text(goal);
    $("#but1").attr("value", Math.floor((Math.random() * 12) + 1));
    $("#but2").attr("value", Math.floor((Math.random() * 12) + 1));
    $("#but3").attr("value", Math.floor((Math.random() * 12) + 1));
    $("#but4").attr("value", Math.floor((Math.random() * 12) + 1));
}

