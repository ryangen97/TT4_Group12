import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Form, Button } from "react-bootstrap"
import axios from "axios"
export default function AddTransaction() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(data) {
     
        const payeeID = data.payee
        const amount = data.amount
        const egift = data.egift 
        const message = data.message

        axios.post('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add',
                  {
                    "custID": 12,
                    "accountKey": "od7b0979-0un2-hhbj-wa0j-oujvks2cf3r",
                    "payeeID": payeeID,
                    "amount": amount,
                    "eGift": egift,
                    "message": message
                  },
                  {
                    headers: {
                      'x-api-key': 'BDTv5isstyQr8aGI2xNp5CzqSYFCrtXPIAZV4Z40',
                      'Content-Type': "application/json"
                    }
                  }
                ) 
            .then( res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        
    }
    return (

        <div className="login-form  col-6 offset-3">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="">
                    <Form.Label>Send to:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Payee ID..." {...register('payee', {})} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="">
                    <Form.Label>Amount:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Amount ID..." {...register('amount', { })} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <div className="">
                    <input className="mr-4" type="checkbox" label="egift" {...register('egift')}/>
                    <label>eGifts</label>
                </div>

                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Message..." {...register('message', { })} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

    

                <Button variant="primary" className="w-100" type="submit">
                    Add Transaction
                </Button>
            </Form>
        </div>
    )
}



