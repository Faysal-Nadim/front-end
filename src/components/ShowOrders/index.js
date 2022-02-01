import React from 'react';
import { OrderHead } from '../OrderHead';

/**
* @author
* @function ShowOrder
**/

export const ShowOrder = ({ info }) => {
    return (
        <>
            {
                info.slice().reverse().map((allorder) =>
                    // console.log(details.totalPrice)
                    <OrderHead details={allorder} />

                )
            }
        </>
    )

}