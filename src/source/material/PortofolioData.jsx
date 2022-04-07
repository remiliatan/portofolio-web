import { makeStyles } from '@mui/styles'
import React from 'react'
import Text from '../component/Text'
import WrapButton from '../component/WrapButton'
import Colors from '../values/Colors'
import Dimens from '../values/Dimens'

const Style = makeStyles({

    parent: {
        float: 'left',
        width: '20vw',
        marginTop: Dimens.px20,
        marginBottom: Dimens.px20,
        marginRight: Dimens.px20,
        marginLeft: Dimens.px20,
        border: `solid 1px ${Colors.borderColor2}`,
        padding: Dimens.px10,
        background: Colors.white,
        borderRadius: Dimens.px10
    },

    image: {
        width: '100%',
    },

    detailButton: {
        padding: Dimens.px10,
        display: 'inline-block',
        marginTop: Dimens.px10
    }
})

const PortofolioData = (props) => {

    const stylePorto = Style()

    return (
        <>
            <div className={stylePorto.parent}>
                <img res className={stylePorto.image} src={require('../../assets/project-29.png')} />
                <Text
                    text={'Owibu (Mobile)'}
                    isBold
                    size={Dimens.px20} />
                <Text
                    top={Dimens.px10}
                    text={'Owibu adalah aplikasi sekaligus website tempatnya informasi seputar anime seperti jadwal rilis judul anime, forum diskusi anime, dan semua hal yang berkaitan dengan anime.'}
                    size={Dimens.px14} />
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <WrapButton label={'Detail'} onClick={e => console.log('CLICK')}/>
                </div>
            </div>

        </>
    )
}

export default PortofolioData