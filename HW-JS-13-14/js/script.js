var questionsAndAnswers = {
    questions: [
        {
            questionNumber: 1,
            question: 'Чему равен this в функциях вызванных на глобальном уровне (т.е. не внутри других функций)',
            answer1: 'Сама функция',
            answer2: 'window',
            answer3: 'undefined',
            answer4: 'null',
            correctAnswer: 'undefined'
        },
        {
            questionNumber: 2,
            question: 'Какие основное ограничения к объявлению переменных в строгом режиме?',
            answer1: 'Переменные функций должны объявляться с использованием ключевого слова var',
            answer2: 'Название переменных должно быть camel-case с маленькой буквы',
            answer3: 'Любая переменная должна объявляться с использованием ключевого слова var',
            answer4: 'Глобальные переменные должны объявляться с использованием ключевого слова var',
            correctAnswer: 'Любая переменная должна объявляться с использованием ключевого слова var'
        },
        {
            questionNumber: 3,
            question: 'Для чего используется конструкция try-catch в javascript?',
            answer1: 'Для генерирования ошибок',
            answer2: 'Для замены условного оператора if',
            answer3: 'Для обработки возможных ошибок',
            answer4: 'В строгом режиме весь код необходимо оборачивать в try-catch',
            correctAnswer: 'Для обработки возможных ошибок'
        }
    ]
};

localStorage.setItem('questionsAndAnswers', JSON.stringify(questionsAndAnswers));

var test = localStorage.getItem('questionsAndAnswers');

test = JSON.parse(test);

$(function () {
    'use strict';

    // HANDLEBARS -->
    var source = $('#test-template').html();

    var template = Handlebars.compile(source);
    var html = template(questionsAndAnswers);

    $('#content').html(html);
    // <-- HANDLEBARS //


    // CHECK ANSWERS
    $('#test14').on('submit', function () {
        var usersAnswers = [];
        var correctAnswers = [];

        // add correct answers to the array
        (function () {
            var i = 0,
                questionsNumber = questionsAndAnswers.questions.length;

            for (i; i < questionsNumber; i++) {
                var correctAnswer = questionsAndAnswers.questions[i].correctAnswer;
                correctAnswers.push(correctAnswer);
            }
        })();

        // add user's answers to the array
        var addUsersAnswers = function () {
            $('.answers input:checked').each(function () {
                usersAnswers.push( $(this).attr('value') );
            });
        };
        addUsersAnswers();

        // check if all the questions have answers
        // check the user's answer to each question with the correct answers
        // if the answer is correct, make the text color green
        // if it is incorrect, make the text red
    });
});


