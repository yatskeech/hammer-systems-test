import React from 'react'
import { Card } from 'antd';
import ApexChart from "react-apexcharts";
import { apexPieChartDefaultOption } from 'constants/ChartConstant';
import PropTypes from 'prop-types'

const defaultOption = apexPieChartDefaultOption;

const Chart = props => {
	return (
		<ApexChart {...props} />
	)
}

const DonutChartWidget = props => {
	const { series = [], customOptions, labels = [], width = '100%', height = 250, title = '', extra } = props
	let options = defaultOption
	options.labels = labels
	options.plotOptions.pie.donut.labels.total.label = title
	if(!title) {
		options.plotOptions.pie.donut.labels.show = false
	}
	if(customOptions) {
		options = {...options, ...customOptions }
	}
	return (
		<Card>
			<div className="text-center">
				<Chart type="donut" options={options} series={series} width={width} height={height} />
				{extra}
			</div>
		</Card>
	)
}

DonutChartWidget.propTypes = {
	series: PropTypes.array.isRequired,
	labels: PropTypes.array,
	title: PropTypes.string,
	extra: PropTypes.element
}

export default DonutChartWidget
