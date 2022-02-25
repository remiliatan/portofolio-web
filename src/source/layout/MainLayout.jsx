import { makeStyles } from '@mui/styles'
import React from 'react'
import Colors from '../values/Colors'
import Dimens from '../values/Dimens'


const StyleLayout = makeStyles({
    parentMenu: {
        backgroundColor: Colors.white,
        display: 'flex'
    }
})


const MainLayout = (props) => {

    const styleLayout = StyleLayout()

    return (
        <>
            <div style={{margin: Dimens.px10}}>
                <div className={styleLayout.parentMenu}>
                    <p>HOME</p>
                    <p>HOME</p>
                    <p>HOME</p>
                    <p>HOME</p>
                </div>
            </div>
        </>
    )
}

export default MainLayout