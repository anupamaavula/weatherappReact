import React,{Component}from "react";
// import Moment from "moment";
// import "moment-timezome";
// import tz from "zipcode-to-timezone ";
import './App.css';



class App extends Component {
  state = {  };
//   getTime = () =>{
//     const zone=tz.lookup(this.state.zip);
//     const now=Moment().tz(zone).format("llll");

//     this.setState({
//       time:now,
//     });
// };
  
  getWeather = () => {
    var zipInput=document.getElementById("zipInput").Value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=` +
        zipInput +
        `,US&units=imperial&appid=4890ec8c1a44083580937d9c9371b03a`
      
    )
    // fetch(`https://api.openweathermap.org/data/2.5/weather?zip=` + zipInput + `,us&appid=93366594e122065ac46ecc951c9a81df`)
  .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then((data) =>{
        console.log(data);
        this.setState({
          zip: zipInput,
          temperture:data.main.temp,
          feels_like:data.main.feels_like,
          city:data.name,
          // timezone:data.timezone,

        });
        //  this.getTime();
      });
  })
  
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
};
  render() { 
    return ( 
      <>
      <div id="form">
        <input type="text" placeholder="Zipcode here" id="zipInput">

        </input>
        <button onClick={this.getWeather}>Search</button>
      </div>
      <div>
        <span id="temp">{this.state.temperture}</span>
        <span id="feelsLike">{this.state.feels_like}</span>
        <span id="city">{this.state.city}</span>
        {/* <h2>{this.state.time}</h2> */}

      </div>
      </>
     );
  }
}
 
export default App;


