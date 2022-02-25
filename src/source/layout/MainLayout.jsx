import { makeStyles } from '@mui/styles'
import React from 'react'
import Text from '../component/Text'
import Colors from '../values/Colors'
import Dimens from '../values/Dimens'


const StyleLayout = makeStyles({
    parentMenu: {
        backgroundColor: Colors.white,
        display: 'block',
        position: 'absolute',
        marginTop: Dimens.px10
    },

    profileContent: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: Dimens.px14,
        marginRight: Dimens.px14
    },

    profileImage: {
        width: 250,
        height: 250,
        borderRadius: 125,
        backgroundColor: Colors.normal_Text
    }
})

const listMenu = [
    {
        id: 'home',
        label: 'Home'
    },
    {
        id: 'achievment',
        label: 'Achievment'
    },
    {
        id: 'portofolio',
        label: 'Portofolio'
    },
    {
        id: 'skills',
        label: 'Skills'
    },
    {
        id: 'contact',
        label: 'Contact'
    },
]


const MainLayout = (props) => {

    const styleLayout = StyleLayout()

    return (
        <>
            <div style={{overflow: 'auto' }}>
                <div className={styleLayout.parentMenu}>
                    <ul style={{ listStyleType: 'none', 
                                margin: 0, paddingTop: 10, 
                                paddingBottom: 10,  display: 'flex' }}>
                        {
                            listMenu.map((data) =>
                                <li key={data.id} style={{ paddingRight: Dimens.px24, cursor: 'pointer' }}><Text text={data.label} /></li>
                            )
                        }
                    </ul>
                    <div style={{backgroundColor: Colors.borderColor2, marginTop: Dimens.px10, width: '100vw', height: 1}}></div>
                </div>
                <div>
                    <div className={styleLayout.profileContent}>
                        <div style={{ textAlign: 'center'}}>
                            <img className={styleLayout.profileImage} />
                            <Text
                                text={'Noval Raihan Rifansyah'}
                                align={'center'}
                                isBold
                                top={Dimens.px20}
                                size={Dimens.px30} />
                            <Text
                                text={'Fullstack Web & Mobile Developer'}
                                align={'center'}
                                size={Dimens.px20} />
                            <Text
                                top={Dimens.px14}
                                text={'Medan, Indonesia'}
                                />
                            <Text
                                text={'me@novalraihan.com'}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout