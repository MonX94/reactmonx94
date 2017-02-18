"use strict";

var Hero = React.createClass({
  displayName: "Hero",

  getInitialState: function getInitialState() {
    return {
      count: 0
    };
  },
  HandleClick: function HandleClick() {
    this.setState({ count: this.state.count + 1 });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "count" },
        this.state.count
      ),
      React.createElement("img", { src: this.props.imageUrl, onClick: this.HandleClick }),
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
ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Hero, {
    title: "React",
    subtitle: "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432",
    imageUrl: "https://facebook.github.io/react/img/logo.svg"
  }),
  React.createElement(Hero, {
    title: "Angular",
    subtitle: "\u041E\u0434\u0438\u043D \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A",
    imageUrl: "https://angular.io/resources/images/logos/angular2/angular.svg"
  })
), document.getElementById('root'));
