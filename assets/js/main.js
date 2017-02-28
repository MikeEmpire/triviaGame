$(document).ready(function() {
    function changeColor() {
        var colors = ['red', 'blue', 'green', 'grey'],
            color, randColor;
        do {
            randColor = colors[Math.floor(Math.random() * colors.length)];
        } while (color == randColor);
        $('h1, p').css('color', randColor);
        color = randColor;
    }

    setTimeout(changeColor, 1000);

    $("#startButton").click(function() {
        var selectedAnswer, answers, question, questionBank, selectedQuestion, promptQuestion;
        promptQuestion = $("<h1>Here is a new question</h1>")
        $("#questionBox").html(promptQuestion);
    });
});