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
   new Question("Which of the following is not a keyword in java?",["static","Boolean","void","private"],"Boolean"),

new Question("What is the size of long variable?",["8 bit","16 bit","32 bit","64 bit"],"64 bit"),
 
new Question("What is the default value of char variable?",["u0000","0","null","not defined"],"u0000"),

new Question("What is the default value of Boolean variable?",["true","false","null","not defined"],"false"),

new Question("What is Abstraction?",["Abstraction is a technique to define different methods of same type.","Abstraction is the ability of an object to take on many forms.","It refers to the ability to make a class abstract in OOP.","None of the above."],"It refers to the ability to make a class abstract in OOP."),

new Question("Can be constructor be made private?",["True.","False.","null","not defined"],"True."),

new Question("Method Overriding is an example of",["Static Binding.","Dynamic Binding.","Both of the above.","None of the above."],"Dynamic Binding."),

new Question("Does garbage collection guarantee that a program will not run out of memory?",["True.","False.","null","not defined"],"False."),

new Question("Is it necessary that each try block must be followed by a catch block?",["True.","False.","null","not defined"],"False."),

new Question("which operator is considered to be with highest precedence?",["() , []"," = "," ?: "," % "],"() , []"),


];


var quiz = new Quiz(questions);


populate();





