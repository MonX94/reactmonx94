var ImageCounter = function(props) {
    return (
        <div className="image-counter">
            <div className="count">{props.count}</div>
            <img src={props.imageUrl} onClick={props.onCount}/>
        </div>
    );
}
var Hero = React.createClass({
    getInitialState: function() {
        return {count: 0}
    },
    HandleClick: function() {
        this.setState({
            count: this.state.count + 1
        })
    },
    render: function() {
        return (
            <div className="container">
                <ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.HandleClick}/>
                <h1>{this.props.title}</h1>
                <p className="subtitle">{this.props.subtitle}</p>
            </div>
        );
    }
});
var App = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.heroes.map((hero) =>
                    <Hero key={hero.id} title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl}/>
                )}
            </div>
        );
    }
});
var data = [
    {
        id: 1,
        title: "React",
        subtitle: "Библиотека для создания пользовательских интерфейсов",
        imageUrl: "https://facebook.github.io/react/img/logo.svg"
    },
    {
        id: 2,
        title: "Angular",
        subtitle: "Один фреймворк",
        imageUrl: "https://angular.io/resources/images/logos/angular2/angular.svg"
    },
    {
        id: 3,
        title: "Ember",
        subtitle: "Фреймворк для создания амбициозных веб-приложений",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png"
    },
    {
        id: 4,
        title: "Vue",
        subtitle: "Прогрессивный фреймворк",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/1000px-Vue.js_Logo.svg.png"
    }
]
ReactDOM.render(<App heroes={data}/>, document.getElementById('root'))
