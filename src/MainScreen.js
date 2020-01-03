import React from 'react';
import InputComp from './input';
import BalanceCount from './expenses';
import Graph from './Graph';
import './main.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo from "./logo.png";
import Login from "./login";
import SignUp from "./signup";
import './login.css';

class MainScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        view:2,
        payments:[
        
        {   value:5000,
            title:'Income:Current balance',
            color:'#43bf00'},
        {   
            value:1766,
            title:'Income:Job/Main income',
            color:'#0b3817'},
        {   value:80,
            title:'Income:Unexpected income',
            color:'#2b7838'},
        {   value:400,
            title:'Expense:Food',
            color:'#E38627'},
        {   value:800,
            title:'Expense:Rent',
            color:'#C13C37'},
        {   value:120,
            title:'Expense:Utility costs',
            color:'#6A2135'},
        {   value:20,
            title:'Expense:Gym membership',
            color:'#ffd60a'},
        {   value:6,
            title:'Expense:Monthly subscription',
            color:'#fa4d4d'},
        {   value:20,
            title:'Expense:Internet bill',
            color:'#572222'},
        {   value:15,
            title:'Expense:TV bill',
            color:'#a17777'},
        {   value:80,
            title:'Expense:Fuel',
            color:'#fca9a9'}
        ],
        balance:0
      };
  this.setView=this.setView.bind(this);
  this.loginTransition.bind(this);
    };

    callback=(props)=>{
        var newArray = this.state.payments.slice();    
    newArray.push(props);   
    this.setState({payments:newArray});
    }
    callb=(props)=>{
        this.setState({balance:props});
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
    SignUpTransition=()=>{
        this.setState(
            {
                view:4,
            },
        );
    }
    render() {
        // 0 - main screen
        // 1 - input
        // 2 - log in screen
        // 3 - statistics
        // 4 - signup
        switch (this.state.view) {
            case 0:
        return (
            <div>
            <div className="Sidemenu">
            <button className="menubutton" onClick={this.inputTransition.bind(this)}>Input</button>
            <button className="menubutton" onClick={this.statisticsTransition.bind(this)}>Statistics</button>
            <button className="menubutton" onClick={this.logoutTransition.bind(this)}>Log Out</button>
            </div >
            <div className="Center">
            <h1 className="font">Balance:</h1>
            <BalanceCount inputai={this.state.payments}
            callb={this.callb}></BalanceCount>
            </div>
            </div>
        );

            case 1:
                return (
          <div className="menu">
            <InputComp parentCallback={this.setView}
                        CallFunction={this.callback}
            ></InputComp>
            </div>      
                );

                case 2:
        return (
          <div className="App">
            <div className="auth-wrapper">
              <div onClick={this.logoutTransition.bind(this)}>
                <img id="logo" src={Logo} alt="" />
              </div>
              <div className="auth-inner">
                <Login login={this.loginTransition}></Login>
                <div id="signup" onClick={this.SignUpTransition.bind(this)}>
                  <h6>Sign Up</h6>
                </div>
              </div>
            </div>
          </div>
        );

                    case 3:
                        return (
                    <div>
                        <Graph data={this.state.payments} balance={this.state.balance}
                        login={this.loginTransition.bind(this)}
                        ></Graph>
                        
                    </div>      
                        );


                        case 4:
                            return (
                              <div className="App">
                                <div className="auth-wrapper">
                                  <div onClick={this.logoutTransition.bind(this)}>
                                    <img id="logo" src={Logo} alt="" />
                                  </div>
                                  <div className="auth-inner">
                                    <SignUp signup={this.logoutTransition}></SignUp>
                                  </div>
                                </div>
                              </div>
                            );
    }
  };
}
  export default MainScreen;