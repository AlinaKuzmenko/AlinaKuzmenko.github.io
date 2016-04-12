'use strict';

var users = [];

for (var i = 1; i <= 5; i++){
    var name = prompt('Enter a name #' + i + '!');

    users.push(name);
}

console.log('Usernames: ', users);

function checkName() {
    var newName = prompt('Please, enter a Username');
    var found = false;

    for (var i = 0; i <= users.length; i++) {
        if (newName == users[i]){
            found = true;
        }
    }

    if (!found){
        alert(newName + ', you are not allowed!')
    } else {
        return alert(newName + ", you've entered successfully!");
    }
}
checkName();
