import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from "react";

ChartJS.register (
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalBarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
            datasets: [
                {
                    label: 'Data 1',
                    data: [10, 6, 15, 20, 12, 4, 5],
                    borderColor: 'rgb(53, 162, 235',
                    backgroundColor: 'rgb(23, 12, 235, 0.4)'
                },
                {
                    label: 'Data 2',
                    data: [2, 6, 15, 20, 12, 4, 15],
                    borderColor: 'rgb(53, 162, 235',
                    backgroundColor: 'rgb(53, 162, 25, 0.4)'
                },
                {
                    label: 'Data 3',
                    data: [20, 4, 25, 20, 3, 15, 7],
                    borderColor: 'rgb(53, 162, 235',
                    backgroundColor: 'rgb(153, 162, 150, 0.4)'
                }
            ]
        })
    
        setChartOptions({
            indexAxis: 'y',
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
            <Bar data={chartData} options={chartOptions} style={{width: "500px", height:"300px"}}/>
        </div>
        
        </>
    )
}