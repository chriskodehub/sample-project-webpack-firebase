import _ from 'lodash';
import '../css/style.css';

function component () {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(
        [
            '<h2>STAGE 1</h2>', 'Hello', 'webpack<br><br>', 'application',
            'work', 'fine', '😁',
        ], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
