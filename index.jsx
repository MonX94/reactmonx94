// function Hero(props) {
// 	let count = 0
//     return (
//         <div className="container">
// 					<div className="count">{count}</div>
//           <img src={props.imageUrl} onClick={HandleClick}/>
//           <h1>{props.title}</h1>
//           <p className="subtitle">{props.subtitle}</p>
//         </div>
//     );
// }

var Hero = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },
  HandleClick: function() {
    this.setState({ count: this.state.count + 1})
  },
  render: function() {
    return (
        <div className="container">
					<div className="count">{this.state.count}</div>
          <img src={this.props.imageUrl} onClick={this.HandleClick}/>
          <h1>{this.props.title}</h1>
          <p className="subtitle">{this.props.subtitle}</p>
        </div>
    );
  }
});
ReactDOM.render(
  <div>
    <Hero
      title="React"
      subtitle="Библиотека для создания пользовательских интерфейсов"
      imageUrl="https://facebook.github.io/react/img/logo.svg"
			/>
    <Hero
      title="Angular"
    	subtitle="Один фреймворк"
      imageUrl="https://angular.io/resources/images/logos/angular2/angular.svg"
			/>
  </div>,
  document.getElementById('root'))
