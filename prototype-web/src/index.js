import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TestElement extends React.Component {
  render() {
    const text = 'Hello';

    return (
        <div className="text">{text}</div>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <div className="container">
		<TestElement/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Page/>,
  document.getElementById('root')
);
