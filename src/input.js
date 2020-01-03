import React from 'react';
import Select from "react-dropdown-select";

class InputComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
              value:undefined,
              title:undefined,
              color:undefined,
        options:[
        {   value:'Income:Current balance',
            color:'#43bf00'},
        {   value:'Income:Job/Main income',
            color:'#0b3817'},
        {    value:'Income:Unexpected income',
            color:'#2b7838'},
        {    value:'Expense:Food',
            color:'#E38627'},
        {    value:'Expense:Rent',
            color:'#C13C37'},
        {    value:'Expense:Utility costs',
            color:'#6A2135'},
        {    value:'Expense:Gym membership',
            color:'#ffd60a'},
        {    value:'Expense:Monthly subscription',
            color:'#fa4d4d'},
        {    value:'Expense:Internet bill',
            color:'#572222'},
        {    value:'Expense:TV bill',
            color:'#a17777'},
        {    value:'Expense:Fuel',
            color:'#fca9a9'}
        ]
            
    }
    this.handleChange = this.handleChange.bind(this);  
    this.sendData=this.sendData.bind(this);
    this.handleChange=this.handleChange.bind(this)
};
funkcija = () =>{
    let array={
        value:this.state.value,
        title:this.state.title,
        color:this.state.color
    };
    this.props.CallFunction(array);
}
sendData = () => {
    this.props.parentCallback(0);
}
    
    handleChange(event) {
        this.setState({
            value:parseInt(event.target.value),
        });
    }

    setValues(event){
        this.setState({
            title:event[0].value,
            color:event[0].color,
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