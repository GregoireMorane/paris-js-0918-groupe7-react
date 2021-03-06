import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import AdminCardCrtl from './AdminCardCrtl';

import Hidden from '@material-ui/core/Hidden';

import ImgIntro from "../../images/intro_image.png";


class AdminHomePage extends Component {
    render() {
        return (
            <div>
                <Grid container className='gridintro' style={{
                    backgroundColor: 'rgb(125, 146, 177)',
                    position: 'absolute',
                    minHeight: '100%'
                }}>
                
                    <Grid item xs={12} md={6}>

                        <Typography               style={{
                textAlign: "center",
                justifyContent: "center",
                verticalAlign: "middle",
                color: "white",
                margin: "5% auto",
                padding: "0% 5%",
                fontFamily: "Raleway",
                fontSize: "calc(1vw + 1vh + 1vmin)",
              }} gutterBottom> Welcome Admin
                        </Typography>
                        <AdminCardCrtl />
                    </Grid>
                    <Hidden only={['xs', 'sm']}>
                    <Grid style={{
                        backgroundImage: `url(${ImgIntro})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                        
                    }} item xs={12} md={6}>
                    </Grid>
                </Hidden>
                </Grid>
            </div>
        )
    }
}

export default AdminHomePage;
