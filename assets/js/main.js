$(document).ready(function() {
    var selectedAnswer, answers = ['run dmc', 'swoosh', 'north carolina', 'oregon', 'nike blazers', 'keds', 'tinker hartfield', '30 dollars', 'fast times at ridgemont high'],
        question, questionBank = ['Which rap group was the first to publicly endorse sneakers in their music?', 'What is the logo for Nike?', 'What is Michael Jordans alma mater ', 'Where are Nike sneakers made?', 'What Nike Shoe is named after a basketball franchise in Portland?', 'What was the first sneaker ever mass produced?', 'Who designed Michael Jordan\'s iconic sneakers?', 'How much was the swoosh designed for?', 'What cult 80s teen film helped bring Vans into the sneaker culture?'],
        selectedQuestion, promptQuestion, incorrectAnswers = 0,
        correctAnswers = 0,
        questionsLeft = 7,
        questionNext,
        selectedAnswerIndex,
        textBarInput = '',
        counter = 0,
        finishedQuestions = [],
        afam,
        finishedQuestionsIndex;

    function generateQuestion() {
        questionsLeft--;
        selectedQuestion = questionBank[Math.floor(Math.random() * questionBank.length)];
        selectedAnswerIndex = questionBank.indexOf(selectedQuestion);
        selectedAnswer = answers[selectedAnswerIndex];
        finishedQuestionsIndex = questionBank.indexOf(selectedQuestion);
        if (finishedQuestionsIndex > -1) {
            questionBank.splice(finishedQuestionsIndex, 1);
            answers.splice(selectedAnswerIndex, 1);
        }
        console.log(finishedQuestionsIndex);
        finishedQuestions = selectedQuestion;
        console.log(finishedQuestions);
        console.log(selectedAnswer);
    }

    function changeBackGround() {
        var images = ["assets/images/original.jpg", "assets/images/yeezyboost.jpg", "assets/images/Sneaker.jpg", "assets/images/Vans.jpg", "assets/images/undftd8s.jpg", "assets/images/maxresdefault.jpg", "assets/images/shoeswallpaper.jpg"],
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
            $("#textField").css("display", "none");
            textBarInput = $("#textBar").val().trim();

            function stopTimer() {
                counter = 0;
                clearInterval(afam);
                clearTimeout(counter);
            }

            console.log(textBarInput);
            if (textBarInput === selectedAnswer) {
                stopTimer();
                // increment correctAnswers variable & decrement the questionsLeft variable
                correctAnswers++;
                // if it is, display correct! hide all of the content inside of the startDiv
                $("#counter").html("Correct!");
                $("#questionBox").html("<p>You have " + correctAnswers + " correct answers so far!<br> There are " + questionsLeft + " questions left! Keep going!</p>");
                $("#nextQuestion").css("display", "inherit");
                // call nextQuestion function after 5 seconds
            } else {
                incorrectAnswers++;
                stopTimer();
                $("#questionBox").html("<p>You have " + incorrectAnswers + " incorrect answers so far. <br> There are " + questionsLeft + " questions left! Keep going!</p>");
                $("#counter").html("Incorrect");
                $("#nextQuestion").css("display", "inherit");
            }
        });
    }

    function callTimer() {
        counter = 30;
        afam = setInterval(function() {
            counter--;
            if (counter >= 10) {
                $("#counter").html("00:" + counter);
            } else if (textBarInput === selectedAnswer) {
                // syntax to remove question and answer from array array.splice(i, 1); var value = array.splice( index, 1 )[0];
                questionBank.splice(selectedQuestion, 1);
                console.log(questionBank);
                $("#nextQuestion").css("display", "inherit");
                counter = 0;
                clearInterval(afam);
                clearTimeout(afam);
            } else if (counter > 0 && counter <= 9) {
                $("#counter").html("00:0" + counter);
            } else if (counter === 0) {
                // call function to display new question
                incorrectAnswers++;
                console.log(incorrectAnswers);
                $("#counter").html("Times Up!");
                $("#textField").css("display", "none");
                $("#questionBox").html("<p>The correct answer is " + selectedAnswer + ". You have " + questionsLeft + " questions left. Keep going!</p>");
                $("#nextQuestion").css("display", "inherit");
                clearInterval(afam);
            }
        }, 1000);
    }

    function gameOver() {
        if (questionsLeft === -1) {
            $("#questionBox").html("<p>Congratulations! Check your stats below! <br> Please refresh your page to play again.</p>");
            $("#nextQuestion, #counter, #textField, #nextQuestion").css("display", "none");
            $(".stats").css("display", "inherit");
            $("#incorrect").html(" " + incorrectAnswers);
            $("#correct").html(" " + correctAnswers);
            clearTimeout(afam);
            clearInterval(afam);
        }
    }
    $("#textField, #timer, .stats").css("display", "none");
    $("#nextQuestion").click(function() {
        console.log(questionBank);
        console.log(selectedAnswer);
        console.log(selectedQuestion);
        $("#textBar").val('');
        generateQuestion();
        $("#questionBox").html("<p> " + selectedQuestion + "<br> Please use only lowercase words.</p>");
        $("timer").css("display", "inherit");
        $("#nextQuestion").css("display", "none");
        $("#textField").css("display", "inherit");
        callTimer();
        gameOver();
    });

    $("#startButton").click(function() {
        generateQuestion();
        $("#startDiv, #nextQuestion").css("display", "none");
        $("#textField, #timer").css("display", "inherit");
        $("#questionBox").html("<p>" + selectedQuestion + "<br> Please use only lowercase words</p>");
        $("#startButton").css("display", "none");
        for (var i = questionBank.length - 1; i >= 0; i--) {
            if (questionBank[i] === selectedQuestion) {
                questionBank.splice(i, 1);
            }
        }
        for (var n = answers.length - 1; n >= 0; n--) {
            if (answers[n] === selectedAnswer) {
                answers.splice(n, 1);
            }
        }
        console.log(questionBank);
        console.log(selectedQuestion);
        console.log(selectedAnswer);
        checkAnswer();
        callTimer();
    });
});