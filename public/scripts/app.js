'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var web = {
    title: 'Indecision',
    subtitle: 'This is some info',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        web.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var removeAll = function removeAll() {
    web.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * web.options.length);
    var option = web.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            web.title
        ),
        web.subtitle && React.createElement(
            'p',
            null,
            web.subtitle
        ),
        React.createElement(
            'p',
            null,
            web.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: web.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            web.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
