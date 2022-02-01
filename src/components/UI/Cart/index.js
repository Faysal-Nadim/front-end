import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

/**
* @author
* @function CartIcon
**/

export const CartIcon = (props) => {
    return (
        <div style={{ marginRight: "7px" , position: "relative" }}>
            <span
                style={{
                    position: "absolute",
                    fontSize: "13px",
                    textAlign: "center",
                    alignSelf: "center",
                    top: "-9px",
                    right: "-6px",
                    color: "white",
                    background: "#157347",
                    border: "1px solid #F8F9FA",
                    borderRadius: "50px",
                    width: "20px",
                    height: "20px",
                }}
            >
                {props.totalItem}
            </span>
            <IoCartOutline size={25} />
        </div>
    )

}