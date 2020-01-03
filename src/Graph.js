import React from 'react';
import './App.css';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

class Graph extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  
            textcolor:'black',
            texttitle:'',
            textvalue:0,
            textpercentage:0,

        }
this.handleClick.bind(this);
  };

  handleClick=(event, data, dataIndex) => {
    
    var prcnt1=0;
    var prcnt2=0;
    var title;
    var sum1=0;
    var sum2=0
    for (let i=0; i<data.length;i++)
    {
        if (data[i].title.includes('Income'))
    {
        sum1+=data[i].value;
    }
    if (data[i].title.includes('Expense'))
    {
        sum2+=data[i].value;
    }

    }
    if (data[dataIndex].title.includes('Income'))
    {
        prcnt1=data[dataIndex].value/sum1*100;
        prcnt1=prcnt1.toFixed(3);
        title=data[dataIndex].title.split(":").pop();
        this.setState({textpercentage:prcnt1,});
    }
    
    if (data[dataIndex].title.includes('Expense'))
    {
    prcnt2=data[dataIndex].value/sum2*100;
    prcnt2=prcnt2.toFixed(3);
    title=data[dataIndex].title.split(":").pop();
    this.setState({textpercentage:prcnt2,});
    }
    this.setState({
        textcolor:data[dataIndex].color,
        texttitle:title,
        textvalue:data[dataIndex].value,
    })
  }

  render() {
    return(
        <div className="statistics">
        <div className="graph">
        <ReactMinimalPieChart
  animate={true}
  animationDuration={500}
  animationEasing="ease-out"
  cx={50}
  cy={50}
  data={this.props.data}
  label
  labelPosition={75}
  labelStyle={{
    fontFamily: 'sans-serif',
    fontSize: '5px'
  }}
  lengthAngle={360}
  lineWidth={20}
  onClick={this.handleClick}
  onMouseOut={undefined}
  onMouseOver={undefined}
  paddingAngle={18}
  radius={50}
  rounded
  startAngle={0}
  viewBoxSize={[
    100,
    100
  ]}
/>
<div>
<h3 style={{color:this.state.textcolor}}>Finance type: {this.state.texttitle}</h3>
<h3 style={{color:this.state.textcolor}}>Value: {this.state.textvalue} €</h3>
<h3 style={{color:this.state.textcolor}}>Percentage of total: {this.state.textpercentage}%</h3>
</div>
       </div>
      </div>
    );
}
  
}
export default Graph;