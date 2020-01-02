import React from 'react';
import './App.css';
import Select from "react-dropdown-select";

class InputComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
              value:undefined,
              type:undefined,
        options:[
        {   value:'Income:Current balance'},
        {   value:'Income:Job/Main income'},
        {    value:'Income:Unexpected income'},
        {    value:'Expense:Food'},
        {    value:'Expense:Rent'},
        {    value:'Expense:Utility costs'},
        {    value:'Expense:Gym membership'},
        {    value:'Expense:Monthly subscription'},
        {    value:'Expense:Internet bill'},
        {    value:'Expense:TV bill'},
        {    value:'Expense:Fuel'}
        ]
            
    }
    this.handleChange = this.handleChange.bind(this);  
    this.sendData=this.sendData.bind(this);
    this.handleChange=this.handleChange.bind(this)
};
funkcija = () =>{
    let array={
        value:this.state.value,
        type:this.state.type
    };
    this.props.CallFunction(array);
    console.log(array);
}
sendData = () => {
    this.props.parentCallback(0);
}
    
    handleChange(event) {
        this.setState({
            value:event.target.value,
        });
    }

    setValues(event){
        this.setState({
            type:event[0].value,
        });
    }

    render() {
      return (
        <div>
        <div>
        <label className="font">
        Amount:
        </label>
        <br/>
        <input type="number" className={"inputBox"} input={this.state.value} onChange={this.handleChange}  name="amount" />
        <br/>
        <label className="font">
        Type:
        </label>
        <Select
        options={this.state.options}
        labelField={"value"}
        onChange={(values)=>this.setValues(values)}
        className={"inputBox"}/>

        <button onClick={this.funkcija} className={"submit"}>Submit</button>
        </div>
        <div className="back"><button className="button" onClick={this.sendData}>Back</button></div>
        </div>
      );
    }
  }
  export default InputComp;