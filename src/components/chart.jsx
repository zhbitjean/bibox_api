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
		console.log(items)
		const date_ms = items['chart_data']['date'];
		// const dates = Object.keys(date_ms).map(key=>(
	 //              Date(date_ms[key].date)
  //             ))
		var date_ms_arr = [];

		for (let key in date_ms) {
		  date_ms_arr.push(Date(date_ms[key].date));
		}
		//console.log(date_ms_arr);
		const close_price_list = Object.values(items['chart_data']['Close']);
		console.log(close_price_list);
		const slice_price = close_price_list.slice(0, 5)
		console.log(slice_price);
		const chartData = {
			//lables: date_ms_arr,
			lables: ["January", "February", "March", "April", "May", "June"],
			datasets:[
				{
					label: 'Close Price',
					//data:slice_price,
					data: [20, 25, 22, 19, 31, 40],
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(225,0,0,0.4)",
					borderColor: "red", // The main line color
					borderCapStyle: 'square',
					borderDash: [], // try [5, 15] for instance
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: "black",
					pointBackgroundColor: "white",
					pointBorderWidth: 1,
					pointHoverRadius: 8,
					pointHoverBackgroundColor: "yellow",
					pointHoverBorderColor: "brown",
					pointHoverBorderWidth: 2,
					pointRadius: 4,
					pointHitRadius: 10,
				}
			],
			options: {
		        animation: {
		            duration: 0, // general animation time
		        },
		        hover: {
		            animationDuration: 0, // duration of animations when hovering an item
		        },
		        responsiveAnimationDuration: 0, // animation duration after a resize
		    }
		}
		return(
			<Line data={chartData}/>
		)
	}
}


export default Chart;
