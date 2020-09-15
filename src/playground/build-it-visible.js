let visbility = false;

const toggleVisibility = () => {
    visbility = !visbility
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visbility ? 'Hide details' : 'Show details'}
            </button>
            {visbility && (
                <div>
                    <p>Hey. These are some details you can now see.</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();