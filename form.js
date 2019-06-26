import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);

    this.state = {
     	name : "",
     	movie :"",
     	rating : "",
      message: ""
    } ;
    
  }
  show() {
    this.setState({
      message: "You have successfilly submitted your form."
    })
    let value =  localStorage.getItem('user');
    let p = JSON.parse(value); 
    let array = [];
    if(p!=null) {
      p.map(function (v) {
        array.push(v);
      });
    }
    array.push(this.state);
    console.log(array);
    array.sort(function(a,b){
      return a.rating - b.rating;
    });
    localStorage.setItem('user',JSON.stringify(array));
    console.log(array);
  }
  render() {
  	return (
      <div>
        
      
      <form>
        <label>
           Name:<input type="text" placeholder = "Name"
  		            value = {this.state.name}
  		            onChange = {e => this.setState({name: e.target.value})}/>
        </label>
        <br/>
        <label>
          Movie:<select value={this.state.movie} onChange={e => this.setState({ movie: e.target.value })} >
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
        </label>
        <br/>
        <label>
        Rating:<select value={this.state.rating} onChange={e => this.setState({rating: e.target.value })} >
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
       </label>
       <br/>
       <p onClick={this.show}>submit</p>
      </form>
      <h2>{this.state.message}</h2>
      </div>
    );
  }	
}

export default Form

