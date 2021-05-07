import React from 'react';
import { Bar } from 'react-chartjs-2';
const {viewAccountDetails} = require('./././api.js');


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
  function viewAccountDetails(custID,accountKey){
    loginAcc("Group12", "2q$bOC%uyST4fIR" ).then(data => {
      console.log(data)
    })
  }
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