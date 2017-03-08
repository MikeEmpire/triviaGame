$(document).ready(function() {
    var selectedAnswer, answers = ['Run DMC', 'Swoosh', 'North Carolina', 'Oregon', 'Nike Blazers', 'Keds', 'Tinker Hartfield', '30 Dollars', 'Fast Times at Ridgemont High'],
        question, questionBank = ['Which rap group was the first to publicly endorse sneakers in their music?', 'What is the logo for Nike?', 'What is Michael Jordans alma mater ', 'Where are Nike sneakers made?', 'What Nike Shoe is named after a basketball franchise in Portland?', 'What was the first sneaker ever mass produced?', 'Who designed Michael Jordan\'s iconic sneakers?', 'How much was the swoosh designed for?', 'What cult 80s teen film helped bring Vans into the sneaker culture?'],
        selectedQuestion, promptQuestion, incorrectAnswers = 0,
        correctAnswers = 0,
        questionsLeft = 7,
        questionNext,
        selectedAnswerIndex,
        textBarInput = '',
        counter = 0;
    selectedQuestion = questionBank[Math.floor(Math.random() * questionBank.length)];
    selectedAnswerIndex = questionBank.indexOf(selectedQuestion);
    selectedAnswer = answers[selectedAnswerIndex];

    function changeBackGround() {
        var images = ["assets/images/original.jpg", "assets/images/VansWallpaper.jpg", "assets/images/Sneaker.jpg", "assets/images/Vans.jpg", "assets/images/nvla7UR.jpg"],
            randomImage,
            image;
        do {
            randomImage = images[Math.floor(Math.random() * images.length)];
        }
        while (image == randomImage);
        $(".full").css("background", "url(" + randomImage + ")");
        image = randomImage;
    }
    setInterval(changeBackGround, 3000);

    function checkAnswer() {
        // check if input value is equal to correct answer
        $("#steez").click(function() {
            textBarInput = $("#textBar").val().trim();

            function stopTimer() {
                counter = 0;
                clearTimeout(counter);
            }

            console.log(textBarInput);
            if (textBarInput === selectedAnswer) {
                stopTimer();
                // if it is, display correct! hide all of the content inside of the startDiv
                $("#counter").html("Correct!");
                // increment correctAnswers variable & decrement the questionsLeft variable
                correctAnswers++;
                console.log(correctAnswers);
                questionsLeft--;
                console.log(questionsLeft);
                // call nextQuestion function after 5 seconds
            } else { // if the answer is incorrect, display incorrect
                $("#counter").html("Incorrect");
                incorrectAnswers++;
                questionsLeft--;
                stopTimer();
            }
        });
    }

    function callTimer() {
        counter = 30;
        setInterval(function() {
            counter--;
            if (counter >= 10) {
                $("#counter").html("00:" + counter);
            } else if (textBarInput === selectedAnswer) {
                counter = 0;
                clearTimeout(counter);
            } else if (counter > 0 && counter <= 9) {
                $("#counter").html("00:0" + counter);
            } else if (counter === 0) {
                // call function to display new question
                $("#counter").html("Times Up!");
                $("#questionBox").html("The correct answer is " + selectedAnswer);
                $("#nextQuestion").css("display", "inherit");
                questionsLeft--;
                clearInterval(counter);
            }
        }, 1000);
    }

    function gameOver() {

    }
    $("#textField, #timer, .stats").css("display", "none");

    $("#startButton").click(function() {
        $("#startDiv, #nextQuestion").css("display", "none");
        $("#textField, #timer").css("display", "inherit");
        $("#questionBox").html(selectedQuestion);
        $("#startButton").css("display", "none");
        console.log(selectedQuestion);
        console.log(selectedAnswer);
        checkAnswer();
        callTimer();
        gameOver();
    });
});