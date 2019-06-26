import React from 'react'

class View extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movie :"",
      viewMessage : ""
    };
    this.show = this.show.bind(this);
  }
  show() {
    
  	let x = this.state.movie;
  	let sum = 0;
    let unum = 0;
    let avg = 0;
    let data = JSON.parse(localStorage.getItem('user'));
    console.log('afdsfds',data);
    if(data != null) {
      data.map(function (item) {
        if(item.movie == x) {
          unum+=1;
          sum = sum + Number(item.rating);   	  
        }
      });
    }
    avg = sum / unum;
    if(unum != 0) {
      switch(avg) {
        case 1.5:
          avg = 1.5;
          break;
        case 2.5:
          avg = 2.5;
          break;
        case 3.5:
          avg = 3.5;
          break;
        case 4.5:
          avg = 4.5;
          break;
        default :
         avg = Math.round(avg);
      }
      this.setState({
      viewMessage: "Rating of the movie " + " " + x + " is" + " " + avg
    })
    }else {
      this.setState({
      viewMessage: "Sorry ! There is no data for movie" + " " + x
    })
     }
  }
  render() {
	return (
    <div>
      <form>
        <table align="center" border="1" width="60%" height = "50%">
          <thead>
            <tr>
              <th colSpan="2"> Check rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label>Select Movie Name</label>
              </td>
              <td>
                <select value={this.state.movie} onChange={e => this.setState({movie: e.target.value })} >
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
              </td>
            </tr>
            <tr>
              <td colSpan="2"><p onClick = {this.show}>check</p></td>
            </tr>
          </tbody>
        </table>
      </form>
      <h2>{this.state.viewMessage}</h2>
    </div>
    );
  }
}
export default View
