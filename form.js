import React from 'react'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
     	name : "",
     	movie :"",
     	rating : ""
    } 
  }
    show() {

      console.log(this.state.name);
    }


  render() {
  	return (
  		<form>
  		  <label>Name</label>
  		  <input placeholder = "Name"
  		  value = {this.state.name}
  		 onChange = {e => this.setState({name: e.target.value})}/>
         <label>Movie</label>
         <select value={this.state.movie}
            onChange={e => this.setState({ movie: e.target.value })} >
            <option>Artical 15</option>
            <option>Bharat</option>
            <option>URI</option>
            <option>Total Dhamaal</option>
            <option>Badla</option>
            <option>Kesari</option>
            <option>Kalank</option>
            <option>Gulli Boy</option>
            <option>Kabir Singh</option>
            <option>Super 30</option>
         </select>
         <label>Rating</label>
         <select value={this.state.rating}
            onChange={e => this.setState({rating: e.target.value })} >
            <option>5</option>
            <option>4.5</option>
            <option>4</option>
            <option>3.5</option>
            <option>3</option>
            <option>2.5</option>
            <option>2</option>
            <option>1.5</option>
            <option>1</option>
         </select>
         <button onClick= {() => this.show()} type="submit">Submit</button>
  		</form>

    );
  }	
}

export default Form
