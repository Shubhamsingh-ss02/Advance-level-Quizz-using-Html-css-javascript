function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which of the following selector matches all elements of a type?",["The Type Selector","The Universal Selector","The Descendant Selector","The Class Selector"],"The Type Selector"),

    new Question(" Which of the following defines a measurement in centimeters?",["%","cm","em","ex"],"cm"),
    
    new Question(" Which of the following is correct about RGB Values format of CSS colors?",["This color value is specified using the rgb( ) property.","This property takes three values, one each for red, green, and blue.","The value can be an integer between 0 and 255 or a percentage.","All of the above."],"1All of the above."),
    
    new Question("Which of the following property is used to make a font italic or oblique?",["font-family","font-style","font-variant","font-weight"],"font-style"),
    
    new Question("Which of the following property is used to increase or decrease how bold or light a font appears?",["font-family","font-style","font-variant","font-weight"],"font-weight"),   
    
    new Question("Which of the following property is used to set the width of an image?",["border","height","width","-moz-opacity"],"width"),
   
    new Question("Which of the following property specifies the width of a border?",[":border-color",":border-style",":border-width",":border-bottom-color"],":border-width"),
    
    new Question("Which of the following property changes the color of left border?",[":border-top-color",":border-left-color",":border-right-color",":border-bottom-color"],":border-left-color"),
   
     new Question("Which of the following property allows you to control the shape or appearance of the marker of a list?",["list-style-type","list-style-position","list-style-image","list-style"],"list-style-type"),

    new Question("Which of the following property specifies the top padding of an element?",["padding-bottom","padding-top","padding-left","padding-right"],"padding-top"),
];


var quiz = new Quiz(questions);


populate();





