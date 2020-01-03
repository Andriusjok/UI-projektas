import React from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import './main.css';

class Graph extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  
            view:0,
            textcolor:'black',
            texttitle:'',
            textvalue:0,
            textpercentage:0,
            data1:undefined,
            data2:undefined,
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
  handleClick2=()=>{
    this.setState({view:1});
  }

  handleClick1=()=>{
    this.setState({view:0});
  }


  render() {
    const styleas ={
      margin: "1em 0 0.5em 0",
	    color: this.state.textcolor,
	    'fontWeight': 'normal',
	    'fontSize': '30px',
	    'lineHeight': '40px',
	    'fontFamily': "Orienta,sans-serif"
    }
    
    var dataarr1=[];
    var dataarr2=[];

   
    for (let i=0;i<this.props.data.length;i++)
    {
      if (this.props.data[i].title.includes('Expense'))
    {
      dataarr2.push(this.props.data[i]);  
    }
    if (this.props.data[i].title.includes('Income'))
    {
      dataarr1.push(this.props.data[i]);
    }
  }
  console.log(dataarr1); 

  switch (this.state.view) {
      case 0:
    return(
        <div>
          <h3 className='header'>Income statistics</h3>
        <div className="statistics">
          
          <div style={{display:"inline-block", 'marginTop':"5%"}}>
            
          <button className="button" onClick={this.props.login}>Back</button>
          <button className="button" onClick={this.handleClick2}>Expenses</button>
          </div>
        <div className="info">
        <ReactMinimalPieChart
  animate={true}
  animationDuration={500}
  animationEasing="ease-out"
  cx={50}
  cy={50}
  data={dataarr1}
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
 </div> 
<div className="infot">
<h3 style={styleas}>{this.state.texttitle}</h3>
<h3 style={styleas}>€{this.state.textvalue} </h3>
<h3 style={styleas}>{this.state.textpercentage}%</h3>
</div>
      </div>
      </div>
    );
case 1:
  return(
  <div>
          <h3 className='header'>Expenses statistics</h3>
        <div className="statistics">
          
          <div style={{display:"inline-block", 'marginTop':"5%"}}>
            
          <button className="button" onClick={this.props.login}>Back</button>
          <button className="button" onClick={this.handleClick1}>Income</button>
          </div>
        <div className="info">
        <ReactMinimalPieChart
  animate={true}
  animationDuration={500}
  animationEasing="ease-out"
  cx={50}
  cy={50}
  data={dataarr2}
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
 </div> 
<div className="infot">
<h3 style={styleas}>{this.state.texttitle}</h3>
<h3 style={styleas}>€{this.state.textvalue} </h3>
<h3 style={styleas}>{this.state.textpercentage}%</h3>
</div>
      </div>
      </div>
    );}
}
  
}
export default Graph;