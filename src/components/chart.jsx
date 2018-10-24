import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component{
	constructor(props, context) {
	    super(props, context);

	    this.state = {
	      items: this.props.items,
	      isLoaded: this.props.isLoaded,
	    }
	}

	render(){
		const { isLoaded, items } = this.state;
		const date_ms = items['chart_data']['date'];
		const dates = Object.keys(date_ms).map(key=>(
	              Date(date_ms[key].date)
              ))
		console.log(dates);
		const close_price_list = Object.values(items['chart_data']['Close']);
		console.log(close_price_list);
		const chartData = {
			lables: Object.values(dates),
			datasets:[
				{
					label: 'Close Price',
					data:close_price_list,
				}
			]
		}
		return(
			<Line data={chartData}/>
		)
	}
}


export default Chart;
