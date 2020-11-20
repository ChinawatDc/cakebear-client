import React from 'react'
import Scsshome from './home.module.scss'
function home() {
    return (
        <div>
                <img src="/img/main/melissa-walker-horn-1C6HQFP7U24-unsplash.jpg" className={Scsshome.homeimg1}/*style={{height:"500px",width:"500px"}}*/></img>
            <div style={{fontFamily : "Sriracha, cursive",color:"#000000"}}>
                <p style={{fontSize:"900%",marginLeft:"2%"}}>Are you ready to</p>
                <p style={{fontSize:"750%",marginLeft:"2%"}}>Delicious and good cakes</p>
            </div>
        </div>

    )
}

export default home
