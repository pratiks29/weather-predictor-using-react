import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";


class App extends React.Component{

  //this state can also be written outside  of the constructor
   state = {lat:null, error:''};
  renderBody(){
    if(this.state.error && !this.state.lat)
    return <Loader />
    else if(!this.state.error && this.state.lat)
    return <SeasonDisplay latitude={this.state.lat}/>
    else
    return <Loader/>
  }

    render(){
      return <div className="border red">{this.renderBody()}</div>;
    }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position =>{ this.setState({ lat:position.coords.latitude }) },
      err=>{this.setState({error:err.message})}
      );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
