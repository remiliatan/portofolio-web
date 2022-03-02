import React from 'react'
import Text from '../component/Text'
import Colors from '../values/Colors'
import Dimens from '../values/Dimens'

const SkillData = (props) => {

    return (
        <>
            <div style={{ width: 'auto', textAlign: 'center',
                 marginLeft: Dimens.px20, marginTop: Dimens.px10, 
                 float: 'left', borderRadius: Dimens.px10,
                 marginBottom: Dimens.px20, padding: Dimens.px10,
                 boxShadow: `0px 0px 5px ${Colors.borderColor2}` }}>
                <img style={{ width: 150, height: 150, backgroundColor: Colors.borderColor }} />
                <Text
                    text={props.label}
                    align={'center'}
                    isBold
                    size={Dimens.px16} />
                <Text
                    text={`Since ${props.sinceLabel}`}
                    align={'center'}
                    size={Dimens.px12} />
            </div>
        </>
    )
}

export default SkillData