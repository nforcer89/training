function getInfo() {
    let inputValues = document.querySelectorAll('.information');
    inputValues.forEach(function (values) {
        for (let key in values) {
            console.log(values[key]);
        }
    });

}

function addExercise() {
    let parent = document.querySelector('#daily');
    let element = parent.querySelector('.exblock');
    let clone = element.cloneNode(true);
    parent.insertBefore(clone, parent.children[3]);
}

function createPlan(info) {

    let newday = document.createElement('div');
    let parent = document.querySelector('body');
    newday.innerHTML = info['Дата'] + " " + info['Упражнение'] + ' ' + info['Подходы'] + ' ' + info['Повторения'];
    parent.appendChild(newday);
}

document.querySelector('#AddElem').addEventListener('click', addExercise);

document.querySelector('#makeplan').addEventListener('click', function () {
    let info = getInfo();
    createPlan(info);
});



