import React,{Component} from 'react'
import ReactDOM from 'react-dom';

class Entry extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name : "Daniel Osineye"
    }
  }
  handleChange(event){
    this.setState({name: event.target.value})
  }


  render(){
    return(
      <div style={{textAlign:'center'}}>
        <h1>Welcome</h1>
        <p>Hello {this.state.name}</p>
        <input onChange={this.handleChange} type='text' defaultValue={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(<Entry/>, document.getElementById("root"));
