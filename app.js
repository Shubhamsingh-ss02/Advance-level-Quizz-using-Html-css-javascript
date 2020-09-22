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
    new Question("HTML is what type of language ?",["Scripting Language","Markup Language","Programming Language","Network Protocol"],"Markup Language"),

    new Question("HTML uses :",["User defined tags","Pre-specified tags","Fixed tags defined by the language","Tags only for linking"],"Fixed tags defined by the language"),
    
    new Question("The year in which HTML was first proposed _______",["1990","1980","2000","1995"],"1990"),
    
    new Question("Fundamental HTML Block is known as ___________",["HTML Body","HTML Tag","HTML Attribute","HTML Element"],"HTML Tag"),
    
    new Question("Apart from bold tag tag, what other tag makes text bold ?",["fat tag","strong tag","black tag","emp tag"],"strong tag"), 
     
    new Question("What is the full form of HTML?",["HyperText Markup Language","Hyper Teach Markup Language","Hyper Tech Markup Language","None of these"],"HyperText Markup Language"),
    
    new Question("Who is Known as the father of World Wide Web (WWW)?",["Robert Cailliau","Tim Thompson","Charles Darwin","Tim Berners-Lee"],"Tim Berners-Lee"),
    
    new Question("What should be the first tag in any HTML document?",["head tag","title tag","html tag","document tag"],"html tag"),

    new Question("What tag is used to display a picture in a HTML page?",["picture","image","img","src"],"img"),

    new Question("HTML web pages can be read and rendered by _________.",["Compiler","Server","Web Browser","Interpreter"],"Web Browser"),
];


var quiz = new Quiz(questions);


populate();





