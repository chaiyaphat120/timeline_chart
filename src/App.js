import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { getDateTimeObject } from './helpers/Helpers'
import { mockedData } from './mockApi'
import { MachineState } from './constants/MachineState'
const App = () => {
    const data = mockedData.map((item) => {
        const mappedItem = item.data.map((elem) => {
            const { mc_sname, startdate, enddate } = elem
            return {
                x: mc_sname,
                y: [getDateTimeObject(startdate).valueOf(), getDateTimeObject(enddate).valueOf()],
            }
        })
        return {
            name: item.name,
            data: mappedItem,
        }
    })
    
    //old data
    const state = [
        {
            name: 'John Adams',
            data: [
                {
                    x: 'President',
                    y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
                },
                {
                    x: 'Vice President',
                    y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()],
                },
            ],
        },
        // Thomas Jefferson
        {
            name: 'Thomas Jefferson',
            data: [
                {
                    x: 'President',
                    y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
                },
                {
                    x: 'Vice President',
                    y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
                },
                {
                    x: 'Secretary of State',
                    y: [new Date(1790, 2, 22).getTime(), new Date(1793, 11, 31).getTime()],
                },
            ],
        },
    ]
    
    const options = {
        chart: {
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150,
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350,
                },
            },
            height: 350,
            type: 'rangeBar',
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%',
                rangeBarGroupRows: true,
            },
        },
        colors: [
            function ({ value, seriesIndex, w }) {
                let result
                switch (seriesIndex) {
                    case 0:
                        result = MachineState.RUN.COLOR
                        break
                    case 1:
                        result = MachineState.SETUP.COLOR
                        break
                    case 2:
                        result = MachineState.STOP.COLOR
                        break
                    case 3:
                        result = MachineState.MAN.COLOR
                        break
                    case 4:
                        result = MachineState.MATERIAL.COLOR
                        break
                    case 5:
                        result = MachineState.PACKAGE.COLOR
                        break
                    case 6:
                        result = MachineState.OTHER.COLOR
                        break
                    case 7:
                        result = MachineState.BREAK.COLOR
                        break
                    default:
                        result = MachineState.OFF.COLOR
                        break
                }
                return result
            },
        ],
        fill: {
            type: 'solid',
        },
        xaxis: {
            type: 'datetime',
            label: {
                datetimeUTC: true,
            },
        },
        legend: {
            position: 'bottom',
        },
        //seriesIndex keyword พิเศษ รับค่า index มา
        tooltip: {
            custom: function ({ opts, seriesIndex, w }) {
                // const fromYear = new Date(opts.y1).getFullYear()
                // const toYear = new Date(opts.y2).getFullYear()
                // const values = opts.ctx.rangeBar.getTooltipValues(opts)
                return '<div class="arrow_box">' + seriesIndex + ': ' + '</div>'
            },
        },
    }

    return (
        <div id="chart">
            <ReactApexChart options={options} series={data} type="rangeBar" height={350} />
        </div>
    )
}
export default App
