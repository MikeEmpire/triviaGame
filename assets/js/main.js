$(document).ready(function() {
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

    $("#textField").css("display", "none");
    $(".stats").css("display", "none");

    $("#startButton").click(function() {
        var selectedAnswer, answers, question, questionBank = ['Who is the first employee for nike?', 'What is the logo for Nike?', 'What is Michael Jordans alma mater ', 'Where are Nike sneakers made?', 'What Nike Shoe is named after a basketball franchise in Portland?', 'When was the Air force originally launched?', 'Who designed Michael Jordan\'s iconic sneakers?', 'How much was the swoosh designed for?', 'What is the most popular sneaker for nike?', 'Where is Nike\'s headquarters?'],
            selectedQuestion, promptQuestion, incorrectAnswers = 0,
            correctAnswers = 0,
            questionsLeft = 10;
        $("#textField").css("display", "inherit");
        $(".stats").css("display", "inherit");
        promptQuestion = $("<h1>Here is a new question</h1>");
        promptQuestion.addClass("text-center");
        $("#questionsLeft").append(questionsLeft);
        $("#incorrect").append(incorrectAnswers);
        $("#correct").append(correctAnswers);
        // get random question from questionBank array
        // once random question is selected, pop that question from questionBank array
        // display random question 
        // give random question the current question variable
        // display options

        function selectAnswer() {

        }

        function callTimer() {
            var counter = 5;
            setInterval(function() {
                counter--;
                if (counter >= 0) {
                    $("#counter").append(counter);
                }
                if (counter === 0) {
                    // call function to display new question
                    /*
                    Code goes Here
                     */
                    clearInterval(counter);
                }
            }, 1000);
        }

        $("#questionBox").html(promptQuestion);
        $("#startButton").css("display", "none");
        // change start button to text input
        // set interval for timer per question
        // create logic for 
    });
});