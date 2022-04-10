import React from 'react'
import Text from '../../component/Text'
import Colors from '../../values/Colors'
import Dimens from '../../values/Dimens'


const PortofolioDetail = (props) => {

    return (
        <>
            <div>
                <div style={{ height: '80vh', overflow: 'auto', }}>
                    <div>
                        <Text text={'OWIBU (MOBILE)'} isBold size={Dimens.px20} bottom={Dimens.px20} />
                        <Text text={'Owibu adalah aplikasi sekaligus website tempatnya informasi seputar anime seperti jadwal rilis judul anime, forum diskusi anime, dan semua hal yang berkaitan dengan anime.'}
                            size={Dimens.px16} />
                        <div style={{ marginTop: Dimens.px20 }}>
                            <ChipText label={'React'} />
                            <ChipText label={'Laravel'} />
                            <ChipText label={'MySQL'} />
                            <ChipText label={'PHP'} />
                            <ChipText label={'JavaScript'} />
                            <ChipText label={'Android Studio'} />
                        </div>
                    </div>
                    <div style={{ float: 'left', width: '100%', marginTop: Dimens.px20 }}>
                        <Text isBold text={'Picture'} bottom={Dimens.px20} />
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: Dimens.px20 }}>
                            <img style={{ textAlign: 'center', maxWidth: '90%', objectFit: 'cover' }} src={require('../../../assets/images/asset_owibu_mobile.jpg')} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: Dimens.px20 }}>
                            <img style={{ textAlign: 'center', maxWidth: '90%', objectFit: 'cover' }} src={require('../../../assets/images/asset_owibu_mobile3.jpg')} />
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', height: '100%', alignItems: 'center', paddingTop: Dimens.px16}}>
                    <Text text={'Demo: '} isBold size={Dimens.px20}/>
                    <img style={{width: '20%', 
                        marginLeft: Dimens.px20,
                        textAlign: 'center',  objectFit: 'contain', 
                        borderRadius: Dimens.px12}} 
                        src={require('../../../assets/images/playstore.jpg')} />
                    <img style={{width: '20%', 
                        marginLeft: Dimens.px20,
                        textAlign: 'center',  objectFit: 'contain', 
                        borderRadius: Dimens.px12}} 
                        src={require('../../../assets/images/appstore.jpg')} />
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