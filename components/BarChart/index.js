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

export default function BarChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
            datasets: [
                {
                    label: 'Sales $',
                    data: [10, 6, 15, 20, 12, 4, 5],
                    borderColor: 'rgb(53, 162, 235',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)'
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
            <Bar data={chartData} options={chartOptions} style={{width: "500px", height:"300px"}}/>
        </div>
        
        </>
    )
}