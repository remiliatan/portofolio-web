import React from 'react'
import Text from '../component/Text'
import Colors from '../values/Colors'
import Dimens from '../values/Dimens'
import {ReactComponent as Circle} from '../../assets/icons/circle.svg'

const ItemHistory = (props) => {


    return (
        <>
            <div style={{marginBottom: Dimens.px14}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Text
                        text={props.year}
                        right={Dimens.px10}
                    />
                    <p style={{margin: 0, marginLeft: Dimens.px10}}>
                    <Text
                        text={props.text}
                        isBold
                    />
                    <Text
                        text={props.sub}
                    />
                    </p>
                </div>

            </div>
        </>
    )
}

export default ItemHistory