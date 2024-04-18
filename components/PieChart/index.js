import { Pie } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from "react";

ChartJS.register (
    CategoryScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["red", "blue", "yellow", "green", "purple", "orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 6, 15, 20, 12, 4, 5],
                    borderColor: [ 'rgb(53, 162, 235',
                                 'rgb(53, 162, 235',
                                 'rgb(63, 152, 35',
                                 'rgb(93, 16, 235',
                                 'rgb(103, 12, 235',
                                 'rgb(153, 162, 25'
                    ],
                    backgroundColor: ['rgb(67, 12, 235, 0.4)',
                                      'rgb(12, 132, 225, 0.4)',
                                      'rgb(53, 122, 65, 0.4)',
                                      'rgb(50, 182, 65, 0.4)',
                                      'rgb(123, 142, 75, 0.4)',
                                      'rgb(3, 132, 95, 0.4)',
                    ],
                    borderWidth: 1,
                }
            ]
        })
    
        setChartOptions({
            plugins: {
                legend: {
                    positions: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRation: false,
                responsive: true
            }
        })
    })

    return(
        <>
        <div>
            <Pie data={chartData} options={chartOptions} style={{width: "500px", height:"300px"}}/>
        </div>
        
        </>
    )
}