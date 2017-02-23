"use strict";

var ImageCounter = function ImageCounter(props) {
    return React.createElement(
        "div",
        { className: "image-counter" },
        React.createElement(
            "div",
            { className: "count" },
            props.count
        ),
        React.createElement("img", { src: props.imageUrl, onClick: props.onCount })
    );
};
var Hero = React.createClass({
    displayName: "Hero",

    getInitialState: function getInitialState() {
        return { count: 0 };
    },
    HandleClick: function HandleClick() {
        this.setState({
            count: this.state.count + 1
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "container" },
            React.createElement(ImageCounter, { imageUrl: this.props.imageUrl, count: this.state.count, onCount: this.HandleClick }),
            React.createElement(
                "h1",
                null,
                this.props.title
            ),
            React.createElement(
                "p",
                { className: "subtitle" },
                this.props.subtitle
            )
        );
    }
});
var App = React.createClass({
    displayName: "App",

    render: function render() {
        return React.createElement(
            "div",
            null,
            this.props.heroes.map(function (hero) {
                return React.createElement(Hero, { key: hero.id, title: hero.title, subtitle: hero.subtitle, imageUrl: hero.imageUrl });
            })
        );
    }
});
var data = [{
    id: 1,
    title: "React",
    subtitle: "Библиотека для создания пользовательских интерфейсов",
    imageUrl: "https://facebook.github.io/react/img/logo.svg"
}, {
    id: 2,
    title: "Angular",
    subtitle: "Один фреймворк",
    imageUrl: "https://angular.io/resources/images/logos/angular2/angular.svg"
}, {
    id: 3,
    title: "Ember",
    subtitle: "Фреймворк для создания амбициозных веб-приложений",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png"
}, {
    id: 4,
    title: "Vue",
    subtitle: "Прогрессивный фреймворк",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/1000px-Vue.js_Logo.svg.png"
}];
ReactDOM.render(React.createElement(App, { heroes: data }), document.getElementById('root'));
