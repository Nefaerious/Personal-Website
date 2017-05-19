var React = require('react');
var ReactDOM = require('react-dom');

class MyComponent extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello "
    );
  }
}

ReactDOM.render(MyComponent, document.getElementById('root'));

alert('hello');
