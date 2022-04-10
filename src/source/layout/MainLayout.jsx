import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { CustomDialog } from '../component/dialog/AllDialog'
import Text from '../component/Text'
import ItemHistory from '../material/ItemHistory'
import PortofolioData from '../material/PortofolioData'
import SkillData from '../material/SkillData'
import Colors from '../values/Colors'
import Dimens from '../values/Dimens'
import PortofolioDetail from './dialog_layout/PortofolioDetail'


const StyleLayout = makeStyles({
    parentMenu: {
        display: 'block',
        position: 'fixed',
        width: '100vw',
        zIndex: 99,
        borderBottom: `solid 1px ${Colors.borderColor2}`,
        background: Colors.white
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
    },

    skillContent: {
        display: 'flex',
        justifyContent: 'center'
    },

    aboutContent: {
        maxWidth: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        position: 'relative',
        left: '25%',
        marginBottom: Dimens.px30
    },

    parentHistory: {
        padding: Dimens.px20,
        display: 'flex'
    },

    exprience: {
        maxWidth: '50%'
    },

    achievment: {
        maxWidth: '50%'
    },

    portofolio: {
        backgroundColor: Colors.white,
        alignSelf: 'center',
        marginTop: Dimens.px20
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
    const [detailDialog, showDetailDialog] = useState(false)
    const styleLayout = StyleLayout()

    return (
        <>
            <CustomDialog isVisible={detailDialog} onClose={e => showDetailDialog(false)} minWidth={'50vw'} view={<PortofolioDetail/>}/>
            <div style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                <div className={styleLayout.parentMenu}>
                    <ul style={{
                        listStyleType: 'none',
                        margin: 0, paddingTop: 10,
                        paddingBottom: 10, display: 'flex'
                    }}>
                        {
                            listMenu.map((data) =>
                                <li key={data.id} style={{ paddingRight: Dimens.px24, cursor: 'pointer' }}><Text size={18} text={data.label} /></li>
                            )
                        }
                    </ul>
                </div>
                <div>
                    <div className={styleLayout.profileContent}>
                        <div style={{ textAlign: 'center' }}>
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
                    <div className={styleLayout.aboutContent}>
                        <Text
                            text={'About'}
                            align={'center'}
                            isBold
                            top={Dimens.px20}
                            size={Dimens.px24} />
                        <Text
                            text={'me@novalraihan.com'}
                        />
                    </div>
                    <Text
                        text={'Skills'}
                        align={'center'}
                        isBold
                        top={Dimens.px20}
                        bottom={Dimens.px10}
                        size={Dimens.px24} />
                    <div className={styleLayout.skillContent}>
                        <div className={styleLayout.itemSkill}>
                            <SkillData label={'Laravel'} sinceLabel={'March 2019'} />
                            <SkillData label={'Laravel'} sinceLabel={'March 2019'} />
                            <SkillData label={'React'} sinceLabel={'March 2019'} />
                        </div>
                    </div>
                    <div className={styleLayout.parentHistory}>
                        <div className={styleLayout.achievment}>
                            <Text
                                text={'Achievment'}
                                isBold
                                top={Dimens.px20}
                                bottom={Dimens.px10}
                                size={Dimens.px24} />
                            <div className={styleLayout.parentItemHistory}>
                                <ItemHistory text={'Owns, manages an application forum that has been downloaded more than 90 thousand times'} year={'2020'} />
                                <ItemHistory text={'3rd place in the district level website building competition in 2020'} year={'2020'} />
                            </div>
                        </div>
                        <div className={styleLayout.exprience}>
                            <Text
                                text={'Exprience'}
                                isBold
                                top={Dimens.px20}
                                bottom={Dimens.px10}
                                size={Dimens.px24} />
                            <div className={styleLayout.parentItemHistory}>
                                <ItemHistory text={'Dafunda Media'} sub={'Since Agu 2020 - Nove 2020'} year={'2020'} />
                                <ItemHistory text={'PT. Nirvana Indonesia Yoga'} sub={'Since Jan 2021 - Agu 2021'} year={'2021'} />
                            </div>
                        </div>
                    </div>
                    <div className={styleLayout.portofolio}>
                        <Text
                            text={'Portofolio'}
                            isBold
                            top={Dimens.px20}
                            align={'center'}
                            bottom={Dimens.px10}
                            size={Dimens.px24} />
                        <div className={styleLayout.skillContent}>
                            <div className={styleLayout.itemSkill}>
                                <PortofolioData onDetailClick={e => showDetailDialog(true)}/>
                                <PortofolioData/>
                                <PortofolioData/>
                                <PortofolioData/>
                                <PortofolioData/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainLayout