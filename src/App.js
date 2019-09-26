import React, { Component } from 'react';

class MeuH1 extends Component {
  render() {
    console.log(this.props);
    return <h1>Você clicou {this.props.title}</h1>
  }
}

class MeuBtn extends Component {
  render() {
    return <button onClick={() => this.props.change(this.props.name)}>{this.props.name}</button>
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      actionBtn: ''
    }
  }

  handleChange = (name) => {
    // alert("Quem ta com a ruela do eno?")
    this.setState({
      actionBtn: name
    })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <MeuH1 title={this.state.actionBtn} />
        <MeuBtn change={this.handleChange} name="botão 1" />
        <MeuBtn change={this.handleChange} name="botão 2" />
        <MeuBtn change={this.handleChange} name="botão 3" />
      </>
    );
  }
}
