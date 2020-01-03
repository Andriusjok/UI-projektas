import React from 'react';

class BalanceCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mounted:false,         
      }
};
sendData = (prop) => {
  this.props.callb(prop);
}

    render() {
        
      let balance=0; 
      for (let i=0;i<this.props.inputai.length;i++)
        {
            if(this.props.inputai[i].title.includes('Income'))
            balance+=parseInt(this.props.inputai[i].value);
            if(this.props.inputai[i].title.includes('Expense'))
            balance-=parseInt(this.props.inputai[i].value);
        }
      if (this.state.mounted===false)
        {
          this.sendData(balance);
          this.setState({mounted:true});
        }
      return (
        <div>
        <h2 className="font">{balance}</h2>
        </div>
      );
    }
  }
  export default BalanceCount;