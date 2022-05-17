//gonna build class component
// then transform it into a functional component
//react has already defined component class, extend means our class has all the p
//properties of it plus whatever we add

import React from "react";

class CCoffee extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick
    this.state = {
      count: 0,
      another: "another state var",
    };
  }
handleClick(){
this.setState({count: this.state.count + 1})
//this.setState merges new state with old state 

}
  render() {

    const { count } = this.state;
    const {firstName} = this.props;
    //render always required, returns JSX
    return (
      <>
        <h1>Coffee List (CC)</h1>
        <p>Hello {firstName}</p>
        <p>You clicked the button {count} times.</p>
        <button onClick={() => this.handleClick()}>Click Me</button>
      </>
    );
  }
}
export default CCoffee;
