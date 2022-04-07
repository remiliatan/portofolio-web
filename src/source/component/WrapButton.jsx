import React, { useState } from 'react'
import Colors from '../values/Colors'
import Dimens from '../values/Dimens'
import Text from './Text'


const WrapButton = (props) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <>
            <div onClick={props.onClick} style={{
                padding: Dimens.px10,
                display: 'inline-block',
                cursor: 'pointer',
                marginTop: Dimens.px10,
                borderRadius: Dimens.px10,
                backgroundColor: isHover ? '#ebebeb' : Colors.white
            }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
                <Text
                    text={props.label}
                    isBold
                    size={Dimens.px16} />
            </div>
        </>
    )
}

export default WrapButton