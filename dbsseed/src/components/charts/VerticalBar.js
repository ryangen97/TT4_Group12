import React, {useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const { viewTransactionDetails } = require('../../api.js');

const preprocessing = (api_data) => {  //assume api_data is json of all transactions 
  var amount_by_month= {};

  for (var one_trans in api_data){
    var unixTime = one_trans['date'];
    var date = new Date(unixTime*1000);
    var month = date.toLocaleDateString("en-US").split('/')[1];

    var amount = parseInt(one_trans['amount']); 

    if (month in amount_by_month.keys()){
      amount_by_month[month].append(amount)
    }else{
      amount_by_month[month] = []
    }; 

  };

  var preprocessed_data_ls = []
  
  for (var m in amount_by_month.keys()){
    var amount_ls = amount_by_month[m]
    var total = amount_ls.reduce((a, b) => a + b, 0)
    preprocessed_data_ls.append(total)
  }

  return preprocessed_data_ls

}; 

const data = {

  labels: ['-4', '-3', '-2', '-1'],
  datasets: [
    {
      label: 'Transactions per month',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
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
    console.log("test")
    viewTransactionDetails(12,"od7b0979-0un2-hhbj-wa0j-oujvks2cf3r")
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