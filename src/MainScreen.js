import React from 'react';
import './App.css';
import InputComp from './input';
import BalanceCount from './expenses';

class MainScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        view:0,
        payments:[
        ]
      };
  this.setView=this.setView.bind(this);
    };

    callback=(props)=>{
        var newArray = this.state.payments.slice();    
    newArray.push(props);   
    this.setState({payments:newArray});
    }
    setView=(value)=> {
        this.setState(
          {
            view: value,
          },
        );
      };

    inputTransition=()=>{
        this.setState(
            {
                view:1,
            },
        );
    };
    logoutTransition=()=>{
        this.setState(
            {
                view:2,
            },
        );
    };
    loginTransition=()=>{
        this.setState(
            {
                view:0,
            },
        );
    };
    statisticsTransition=()=>{
        this.setState(
            {
                view:3,
            },
        );
    }
    render() {
        // 0 - main screen
        //   1 - input
        // 2 - log in screen
        // 3 - 
        switch (this.state.view) {
            case 0:
                
            console.log(this.state.payments);
        return (
            <div>
            <div className="Sidemenu">
            <button className="menubutton" onClick={this.inputTransition.bind(this)}>Input</button>
            <button className="menubutton" onClick={this.statisticsTransition.bind(this)}>Statistics</button>
            <button className="menubutton" onClick={this.logoutTransition.bind(this)}>Log Out</button>
            </div >
            <div className="Center">
            <h1 className="font">Balance:</h1>
            <BalanceCount inputai={this.state.payments}></BalanceCount>
            </div>
            </div>
        );
            case 1:
                return (
          <div className="menu">
            <InputComp parentCallback ={this.setView}
                        CallFunction={this.callback}
            ></InputComp>
            </div>      
                );
                case 2:
                    return (
                <div>
                    <button className="button" onClick={this.loginTransition.bind(this)}>Log in</button>
                </div>      
                    );
                    case 3:
                        return (
                    <div>
                        <button className="button" onClick={this.loginTransition.bind(this)}>Back</button>
                    </div>      
                        );
    }
  };
}
  export default MainScreen;