import React from 'react'
import Text from '../../component/Text'
import Colors from '../../values/Colors'
import Dimens from '../../values/Dimens'


const PortofolioDetail = (props) => {

    return (
        <>
            <div style={{ height: '90vh', overflow: 'auto',  }}>
                <div>
                    <Text text={'OWIBU (MOBILE)'} isBold size={Dimens.px20} bottom={Dimens.px20} />
                    <Text text={'Owibu adalah aplikasi sekaligus website tempatnya informasi seputar anime seperti jadwal rilis judul anime, forum diskusi anime, dan semua hal yang berkaitan dengan anime.'}
                        size={Dimens.px16} />
                    <div style={{ marginTop: Dimens.px20}}>
                        <ChipText label={'React'} />
                        <ChipText label={'Laravel'} />
                        <ChipText label={'MySQL'} />
                        <ChipText label={'PHP'} />
                        <ChipText label={'JavaScript'} />
                        <ChipText label={'Android Studio'} />
                    </div>
                </div>
                <div style={{ float: 'left', width: '100%', marginTop: Dimens.px20 }}>
                    <Text isBold text={'Picture'} />
                </div>
            </div>
        </>
    )
}

const ChipText = (props) => {

    return (
        <>
            <div style={{
                backgroundColor: '#f2f2f2',
                border: `solid 1px ${Colors.borderColor2}`,
                padding: Dimens.px8,
                borderRadius: Dimens.px8,
                marginTop: Dimens.px10,
                marginRight: Dimens.px10,
                display: 'flex',
                width: 'auto',
                float: 'left'
            }}>
                <Text text={props.label} />
            </div>
        </>
    )
}

export default PortofolioDetail