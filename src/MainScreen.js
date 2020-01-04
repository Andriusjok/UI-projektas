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
import DatePicker from "react-datepicker";
import History from './history';
import "react-datepicker/dist/react-datepicker.css";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './main.scss';
import "./input.css";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
class MainScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        view:2,
        payments:[
        
        {   value:5000,
            title:'Income:Savings',
            color:'#43bf00',
            name:'Swedbank account',
            date: new Date(2020,0,3)},
        {   
            value:1766,
            title:'Income:Job/Main income',
            color:'#0b3817',
            name:'Tesonet support',
            date: new Date(2020,0,3)},
        {
            value:80,
            title:'Income:Unexpected income',
            color:'#2b7838',
            name:'Tic-tac-toe ticket',
            date:new Date(2020,0,3)},
        {   value:400,
            title:'Expense:Food',
            color:'#E38627',
            name:'Monthly expense on food',
            date:new Date(2020,0,3)},
        {   value:800,
            title:'Expense:Rent',
            color:'#C13C37',
            name:'Rent for Kalvariju g.',
            date:new Date(2020,0,3)},
        {   value:120,
            title:'Expense:Utility costs',
            color:'#6A2135',
            name:'Hot water, electricity',
            date:new Date(2020,0,3)},
        {   value:20,
            title:'Expense:Gym membership',
            color:'#ffd60a',
            name:'Gymplus',
            date:new Date(2020,0,3)},
        {   value:6,
            title:'Expense:Monthly subscription',
            color:'#fa4d4d',
            name:'Spotify',
            date:new Date(2020,0,3)},
        {   value:20,
            title:'Expense:Internet bill',
            color:'#572222',
            name:'Telia',
            date:new Date(2020,0,3)},
        {   value:15,
            title:'Expense:TV bill',
            color:'#a17777',
            name:'Viasat',
            date:new Date(2020,0,3)},
        {   value:80,
            title:'Expense:Fuel',
            color:'#fca9a9',
            name:'Petrol',
            date:new Date(2020,0,3)}
        ],
        balance:0,
        startDate: new Date(2020,0,1),
        endDate: new Date(2020,1,1),
        infoopacity:0,
        opacity:0,
        selectedDay:undefined,
        eventName:'',
        eventDescription:'',
        selectedEvent:0,    
        events:[
            { title: 'event 1', date: '2020-01-04', description:'description' },
            { title: 'event 2', date: '2020-01-15', description:'desscription11' }
          ],
      };
  this.setView=this.setView.bind(this);
  this.loginTransition=this.loginTransition.bind(this);
  this.eventPush=this.eventPush.bind(this);
    };

    callback=(props)=>{
    var newArray = this.state.payments.slice();    
    newArray.push(props);   
    this.setState({payments:newArray});
    }
    callb=(props)=>{
        this.setState({balance:props});
    }
    handleHistory=(props)=>{
        this.setState({PHistory:props});
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
    handleDateClick = (arg) => { // bind with an arrow function
        this.setState({opacity:100,
        selectedDay:arg})
      }
    handleChange=(prop)=>{
        this.setState({
            eventName:prop.target.value
        })
    }
    handleChange1=(prop)=>{
        this.setState({
            eventDescription:prop.target.value
        })
    }
    eventPush=()=>{
        let eventai=[...this.state.events];
        let newArray={
            title:this.state.eventName,
            date:this.state.selectedDay.dateStr,
            description:this.state.eventDescription
        }
        eventai.push(newArray);
        this.setState({events:eventai});
    }
    handleeventClick=(arg)=>{

        for(let i=0;i<this.state.events.length;i++)
        {
            if(this.state.events[i].title==arg.event.title)
            {
                this.setState({selectedEvent:i});
            }
        }
        this.setState({infoopacity:100});
    }
    calendarTransition = () => {
        this.setState({
          view: 5
        });
      };
    render() {
       
        const style = {
            position: "relative",
            margin: "50px auto"
          }
        const boxstyle={
                width: "100%",
                height: "40%",
                marginTop: '5%',
                marginRight: "5%",
                background: "#ffffff",
                boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                padding: "40px 55px 45px 55px",
                borderRadius: "15px",
                transition: "all 0.3s",
                opacity: this.state.opacity
        }
        const boxstyle1={
            width: "100%",
            height: "40%",
            marginTop: '5%',
            marginRight: "5%",
            background: "#ffffff",
            boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
            padding: "40px 55px 45px 55px",
            borderRadius: "15px",
            transition: "all 0.3s",
            opacity: this.state.infoopacity
    }
        const fontstyle={
                fontSize:"1em",
                marginTop:"5%",

        }
        // 0 - main screen
        // 1 - input
        // 2 - log in screen
        // 3 - statistics
        // 4 - signup
        // 5 - calendar
        switch (this.state.view) {
            case 0:
        return (
            <div id="wrapDiv">
            <div className="Sidemenu">
              <img id="logoMainScreen" src={Logo} alt="" />
              <button
                className="menubutton"
                onClick={this.loginTransition.bind(this)}
              >
                Records
              </button>
              <button
                className="menubutton"
                onClick={this.inputTransition.bind(this)}
              >
                Input
              </button>
              <button
                className="menubutton"
                onClick={this.statisticsTransition.bind(this)}
              >
                Statistics
              </button>
                <button
                className="menubutton"
                onClick={this.calendarTransition.bind(this)}
            >
                CALENDAR
            </button>
              <button
                className="menubutton"
                onClick={this.logoutTransition.bind(this)}
              >
                Log Out
              </button>

              <h1 id="balance">BALANCE:</h1>
              <BalanceCount
                inputai={this.state.payments}
                callb={this.callb}
              ></BalanceCount>
            </div>
            <div id="historyDiv">
              <div id="datePickerDiv">
                {" "}
                <DatePicker
                  id="datepicker1"
                  selected={this.state.startDate}
                  onChange={date => this.setState({ startDate: date })}
                  selectsStart
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  dateFormat="yyyy/MM/dd"
                />
                <DatePicker
                  id="datepicker2"
                  selected={this.state.endDate}
                  onChange={date => this.setState({ endDate: date })}
                  selectsEnd
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  minDate={this.state.startDate}
                  dateFormat="yyyy/MM/dd"
                />
              </div>

              <div id="historyShowDiv">
                {" "}
                <History
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  payments={this.state.payments}
                />
              </div>
            </div>
          </div>
        );

            case 1:
                return (
                    <div id="wrapDiv">
                    <div className="Sidemenu">
                      <img id="logoMainScreen" src={Logo} alt="" />
                      <button
                        className="menubutton"
                        onClick={this.loginTransition.bind(this)}
                      >
                        Records
                      </button>
                      <button
                        className="menubutton"
                        onClick={this.inputTransition.bind(this)}
                      >
                        Input
                      </button>
                      <button
                        className="menubutton"
                        onClick={this.statisticsTransition.bind(this)}
                      >
                        Statistics
                      </button>
                      <button
                                              className="menubutton"
                                              onClick={this.calendarTransition.bind(this)}
                                            >
                                              CALENDAR
                                            </button>
                      <button
                        className="menubutton"
                        onClick={this.logoutTransition.bind(this)}
                      >
                        Log Out
                      </button>
                      <h1 id="balance">BALANCE:</h1>
                      <BalanceCount
                        inputai={this.state.payments}
                        callb={this.callb}
                      ></BalanceCount>
                    </div>
                    <div id="inputDiv">
                      <InputComp
                        parentCallback={this.setView}
                        CallFunction={this.callback}
                      ></InputComp>
                    </div>
                  </div>);

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
                            <div id="wrapDiv">
                              <div className="Sidemenu">
                                <img id="logoMainScreen" src={Logo} alt="" />
                                <button
                                  className="menubutton"
                                  onClick={this.loginTransition.bind(this)}
                                >
                                  Records
                                </button>
                                <button
                                  className="menubutton"
                                  onClick={this.inputTransition.bind(this)}
                                >
                                  Input
                                </button>
                                <button
                                  className="menubutton"
                                  onClick={this.statisticsTransition.bind(this)}
                                >
                                  Statistics
                                </button>
                                <button
                                              className="menubutton"
                                              onClick={this.calendarTransition.bind(this)}
                                            >
                                              CALENDAR
                                            </button>
                                <button
                                  className="menubutton"
                                  onClick={this.logoutTransition.bind(this)}
                                >
                                  Log Out
                                </button>
                  
                                <h1 id="balance">BALANCE:</h1>
                                <BalanceCount
                                  inputai={this.state.payments}
                                  callb={this.callb}
                                ></BalanceCount>
                              </div>
                              <div id="incomeDiv">
                                <Graph
                                  data={this.state.payments}
                                  balance={this.state.balance}
                                  login={this.loginTransition.bind(this)}
                                ></Graph>
                              </div>
                            </div>);


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
                                case 5:
                                    return (
                                        <div className="wrapDiv">
                                        <div className="menuside">
                                        <img id="logoMainScreen" src={Logo} alt="" />
                                        <button
                                          className="menubutton"
                                          onClick={this.loginTransition.bind(this)}
                                        >
                                          Records
                                        </button>
                                        <button
                                          className="menubutton"
                                          onClick={this.inputTransition.bind(this)}
                                        >
                                          Input
                                        </button>
                                        <button
                                          className="menubutton"
                                          onClick={this.statisticsTransition.bind(this)}
                                        >
                                          Statistics
                                        </button>
                                          <button
                                          className="menubutton"
                                          onClick={this.calendarTransition.bind(this)}
                                      >
                                          CALENDAR
                                      </button>
                                        <button
                                          className="menubutton"
                                          onClick={this.logoutTransition.bind(this)}
                                        >
                                          Log Out
                                        </button>
                          
                                        <h1 id="balance">BALANCE:</h1>
                                        <BalanceCount
                                          inputai={this.state.payments}
                                          callb={this.callb}
                                        ></BalanceCount>
                                      </div>
                                          <div className="wrapperis">
                                            <div className="calendar">
                                              <FullCalendar
                                                height='auto'
                                                dateClick={this.handleDateClick}
                                                eventClick={this.handleeventClick}
                                                events={this.state.events}
                                                plugins={[dayGridPlugin, interactionPlugin]}
                                              />
                                            </div>
                                            <div className="boxes">
                                            <div style={boxstyle}>
                                              <h1 className="font">NEW EVENT</h1>
                                              <h1 style={fontstyle}>Input the name of event:</h1>
                                              <input
                                                type="text"
                                                input={this.state.eventName}
                                                onChange={this.handleChange}
                                              ></input>
                                              <br></br>
                                              <h1 style={fontstyle}>Describe the event:</h1>
                                              <textarea onChange={this.handleChange1}></textarea>
                                              <button
                                                className="button"
                                                input={this.state.eventDescription}
                                                onClick={this.eventPush}
                                              >
                                                Submit
                                              </button>
                                            </div>
                                            <div style={boxstyle1}>
                                              <h1 className="font">EVENT INFO</h1>
                                              <h3 style={fontstyle}>
                                                {this.state.events[this.state.selectedEvent].title}
                                              </h3>
                              
                                              <h3 style={fontstyle}>
                                                {this.state.events[this.state.selectedEvent].date}
                                              </h3>
                              
                                              <h3 style={fontstyle}>
                                                {this.state.events[this.state.selectedEvent].description}
                                              </h3>
                                            </div>
                                            </div>
                                          </div>
                                          </div>
                                      );
    }
  };
}
  export default MainScreen;