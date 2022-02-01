import React from 'react'
import { Tabs, Tab, Container } from 'react-bootstrap'
import { Bkash } from './bkash'
import { SSL } from './ssl'

/**
* @author
* @function Payment
**/

export const Payment = ({ info }) => {

    return (
        <>
            <Tabs defaultActiveKey="bkash" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="bkash" title="bKash">
                    <Bkash payInfo={info} />
                </Tab>
                <Tab eventKey="ssl" title="SSLCOMMERZ">
                    <SSL payInfo={info} />
                </Tab>
                <Tab eventKey="aamarpay" title="aamarPay">

                </Tab>
            </Tabs>
        </>
    )

}