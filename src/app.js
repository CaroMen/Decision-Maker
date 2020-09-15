console.log('App.js is running!');

// JSX - JavaScript XML

const web = {
    title: 'Indecision',
    subtitle: 'This is some info',
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        web.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    web.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * web.options.length);
    const option = web.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{web.title}</h1>
            {(web.subtitle) && <p>{web.subtitle}</p>}
            <p>{web.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={web.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    web.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();

