import React from 'react';
import './App.css';

class BalanceCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {         
      }
};

    render() {
        let balance=0;
        for (let i=0;i<this.props.inputai.length;i++)
        {
            if(this.props.inputai[i].type.includes('Income'))
            {
            balance+=parseInt(this.props.inputai[i].value);
            console.log("Pliusas");
            }
            if(this.props.inputai[i].type.includes('Expense'))
            balance-=parseInt(this.props.inputai[i].value);
        }
      return (
        <div>
        <h2 className="font">{balance}</h2>
        </div>
      );
    }
  }
  export default BalanceCount;