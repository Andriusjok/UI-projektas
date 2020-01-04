import React from 'react';

class History extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mounted:false,         
        PHistory:undefined,
      }
};

    render() {
        var historyArray=[];
        for (let i=0 ;i<this.props.payments.length;i++)
        {
            if(this.props.payments[i].date>this.props.startDate && this.props.payments[i].date<this.props.endDate)
            {
                console.log(1);
                historyArray.push(this.props.payments[i]);
            }
        }
        console.log(historyArray);
      return (
        <div >
            {historyArray.map((record,i)=>{
            return(<div className="history" key={i}>
      <h2 className="font">{record.name}</h2>
      <h2 className="font">{record.date.toISOString().substring(0,10)}</h2>
      <h2 className="font">{record.title}</h2>
      <h2 className="font">{record.value} eur </h2>
            </div>);})}
        </div>
      );
    }
  }
  export default History;