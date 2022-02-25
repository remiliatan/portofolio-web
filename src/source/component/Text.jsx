import React from "react";


const Text = (props) => {

    var fontFamily = props.isBold ? 'popins_bold' : 'popins_regular'
    var size = props.size ? props.size : 14
    var align = props.align
    var color = props.color
    var mLeft = props.left ? props.left : 0
    var mRight = props.right ? props.right : 0
    var mTop = props.top ? props.top : 0
    var mBottom = props.bottom ? props.bottom : 0
    return(
        <>
            <p style={{
                margin: 0,
                fontFamily: fontFamily,
                fontSize: size,
                marginLeft: mLeft,
                marginRight: mRight,
                marginTop: mTop,
                marginBottom: mBottom,
                color: color,
                textAlign: align
            }}>
                {props.text}
            </p>
        </>
    )
}

export default Text