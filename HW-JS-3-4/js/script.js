var container = document.querySelector('.container');
var questionsAndAnswers;
var questionsArray, questionNumber, questionText, question, questionAnswers;
var answersArray, answersList, answer, correctAnswer;
var element, label, checkbox;
var checkAnswersButton, checkButton;

var render = {
    //сделать массив для вопросов
    add: function (questionNumber, question, answers, correctAnswer) {
        //если такого id еще нет, то выполн след код
        'use strict';

        //создаю массив, в котором хранятся входящие данные
        questionsAndAnswers = [].slice.apply(arguments);

        // достаю из массива номер вопроса
        questionNumber = questionsAndAnswers[0];

        // достаю из массива текст вопроса
        questionText = questionsAndAnswers[1];

        // достаю массив с вариантами ответов
        answersArray = questionsAndAnswers[2];

        // достаю правильный ответ
        correctAnswer = questionsAndAnswers[3];

        // создаю HTML-элемент, который будет выводить номер и текст вопроса
        question = document.createElement('span');
        question.classList.add('question');
        question.innerHTML = questionNumber + '. ' + questionText;

        // добавляю его в HTML-документ
        container.appendChild(question);

        //создаю список в HTML-документе
        answersList = document.createElement('ul');
        answersList.classList.add('list');
        container.appendChild(answersList);

        // добавляю циклом все ответы из массива в список ответов
        var i = 0;
        var length = answersArray.length;
        for (i; i < length; i++) {
            //для каждово варианта ответа создаю элемент списка и добавляю его к вопросу
            element = document.createElement('li');
            element.classList.add('list-element');
            answersList.appendChild(element);

            //в каждом элементе списка создаю лейбл
            label = document.createElement('label');
            element.appendChild(label);

            // в каждом лейбле создаю чекбокс и добавляю его
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');

            // присваиваю чекбоксу значение со строкой варианта ответа
            checkbox.setAttribute('value', answersArray[i]);
            checkbox.classList.add('checkbox');
            label.appendChild(checkbox);

            // в каждом лейбле создаю текст вопроса и добавляю его
            answer = document.createElement('span');
            answer.classList.add('answer');
            answer.innerHTML = checkbox.value;
            label.appendChild(answer);
        }
    },
    // кнопка должна запускать функцию проверки ответов
    button: function() {
        checkButton = document.createElement('input');
        checkButton.setAttribute('type', 'submit');
        checkButton.setAttribute('value', 'Проверить мои результаты');
        checkButton.classList.add('checkButton');
        checkButton.classList.add('btn');
        checkButton.classList.add('btn-default');
        container.appendChild(checkButton);
    }
}

render.add(1, 'Вопрос №1', ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3', 'Вариант ответа №4'], 'Вариант ответа №2');
render.add(2, 'Вопрос №2', ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'], 'Вариант ответа №3');
render.add(3, 'Вопрос №3', ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'], 'Вариант ответа №1');
render.add(4, 'Вопрос №4', ['Вариант ответа №1', 'Вариант ответа №2'], 'Вариант ответа №2');
render.add(5, 'Вопрос №5', ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'], 'Вариант ответа №1');

render.button();

//тут сделать фор. в цикле сравнить правильный ли ответ и пометить его классом "правильный"
var checkAnswers = function () {
    console.log('checkAnswers works');
    if (checkbox.checked) {
        answer = this.checkbox.nextSibling.innerHTML;
        console.log(answer);
    } else {
        console.log('no answer');
    }
};

// вешаю ивент на кнопку проверки ответов
checkAnswersButton = document.querySelector('.checkButton');
checkAnswersButton.addEventListener('click', checkAnswers);
