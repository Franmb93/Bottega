import { Box, Grid, Link } from "@mui/material"

const style = {    
position: 'fixed',
bottom:0,
left:0,

width: '100%',
backgroundColor: '#fdeded',
height: ['5.5%', '4.5%']


}

const textStyle = {
    textDecoration: 'none',

    letterSpacing: '1px',
    color: '#407088',
    cursor: 'pointer'
}

export default function Footer(){



    return(
        <>
            <Box sx={style}>
                <Grid style={{height: '100%'}} container direction='row' alignContent={"center"} justifyContent={'space-around'}>
                    <Link sx={textStyle}>About us</Link>
                    <Link sx={textStyle}>Contact</Link>
                    <Link href="https://github.com/Franmb93" sx={textStyle}>GitHub</Link>
                    <Link href="https://www.linkedin.com/in/fmbetanzos/" sx={textStyle}>LinkedIn</Link>
                </Grid>
            </Box>
        </>
    )
}