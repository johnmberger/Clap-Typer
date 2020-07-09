import React from 'react';
import './App.css';

class ClapTyper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      emoji: '👏',
    };
  }

  componentDidMount() {
    try {
      window.twttr.widgets.load();
    } catch (err) {
      // ignore errors
    }
  }

  _onChange(text) {
    this.setState({ text });
  }

  _onSelectChange(emoji) {
    this.setState({ emoji });
  }

  _clap(text) {
    return text.split(/\s+/).join(` ${this.state.emoji} `);
  }

  render() {
    return (
      <div>
        <h1>Clap {this.state.emoji} Typer</h1>
        <input
          type="text"
          placeholder="type woke shit here"
          onChange={(e) => this._onChange(e.target.value)}
        />
        <br />
        <select
          value={this.state.emoji}
          onChange={(e) => this._onSelectChange(e.target.value)}
        >
          <option value="👏">👏</option>
          <option value="👏🏻">👏🏻</option>
          <option value="👏🏼">👏🏼</option>
          <option value="👏🏽">👏🏽</option>
          <option value="👏🏾">👏🏾</option>
          <option value="👏🏿">👏🏿</option>
        </select>
        <br />
        <textarea rows="10" value={this._clap(this.state.text)}></textarea>
      </div>
    );
  }
}

export default ClapTyper;
