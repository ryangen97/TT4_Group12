import React, {useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const data = {

  labels: ['-4', '-3', '-2', '-1'],
  datasets: [
    {
      label: 'Transactions per month',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function VerticalBar(){
  useEffect(() => {
    axios.post("https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts", {
        "custID": 12,
        "accountKey": "od7b0979-0un2-hhbj-wa0j-oujvks2cf3r"
    }, {
            headers: {
                'x-api-key': 'BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40',
            }
        })
        .then(res => {
          console.log(
            "RESPONSE"
          )
          console.log(res)
        })
        .catch(err => {

        })
}, [])
  return(
  <>
    <div className='header'>
      <h1 className='title'>Transaction History</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/VerticalBar.js'
        >
        </a>
      </div>
    </div>
    <Bar data={data} options={options} />
  </>
  )
};

export default VerticalBar;