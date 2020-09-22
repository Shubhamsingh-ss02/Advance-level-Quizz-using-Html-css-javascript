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
    new Question("Which of the following type of variable is visible only within a function where it is defined?",["global variable","local variable","Both of the above","None of the above"],"local variable"),

    new Question("Which built-in method calls a function for each element in the array?",["while()","loop()","forEach()","None of the above"],"forEach()"),

    new Question("Which built-in method returns the calling string value converted to lower case?",["toLowerCase()","toLower()","changeCase(case)","None of the above"],"toLowerCase()"),

    new Question("Which of the following jQuery method sets attributes of an element?",["attr(name, value)","setAttr(name, value)","setAttributes(name, value)","None of the above"],"attr(name, value)"),

    new Question("Which of the following jQuery method removes elements matching the specified selector from the set of matched elements?",["getNotEquals( selector )","isNotEquals( selector )","not(selector)","None of the above"],"not(selector)"),

    new Question("Which of the following jQuery method gets a set of elements containing the closest parent element that matches the specified selector, the starting element included?",["getNearest( selector )","getClosest( [selector])","closest(selector)","None of the above"],"getClosest( [selector])"),

    new Question("Which of the following jQuery method gets the height property of an element?",["getCSSHeight( )","getHeight( )","height( )","None of the above"],"height( )"),

    new Question("Which of the following jQuery method returns the outer height (including the border) of an element?",["getCSSHeight( )","getHeight( )","outerHeight( [margin] )","None of the above"],"outerHeight( [margin] )"),

    new Question("Which of the following jQuery method checks if event.stopImmediatePropagation() was ever called on this event object?",["isDefaultPrevented( )","isPropagationStopped( )","isImmediatePropagationStopped( )","None of the above"],"isImmediatePropagationStopped( )"),

    new Question("Which of the following jQuery method loads a remote page using an HTTP GET request?",["jQuery.get( url, [data], [callback], [type] )","jQuery.getJSON( url, [data], [callback] )","jQuery.getScript( url, [callback] )","jQuery.post( url, [data], [callback],[type]"],"jQuery.get( url, [data], [callback], [type] )"),
];


var quiz = new Quiz(questions);


populate();





