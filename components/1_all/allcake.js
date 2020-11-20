import React from 'react';
import {Card ,Button } from 'react-bootstrap';
import Scssallcake from './allcake.module.scss'
function allcake() {
    return (
        <div style={{width:"100%"}}>
            <div style={{width:"fit-content", margin:"auto",marginTop:"30px",}}>
                <div>
                  <div style={{color:"black",fontFamily : "Sriracha, cursive"}}>
                     Cake Menu
                  </div> 
                  <div className={Scssallcake.cake}>
                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://sweetme-bakery.com/wp-content/uploads/2018/04/Triple-Flavors-Chocolate-Cake-03.jpg"style={{width:"287px",height:"260px",margin:"auto"}}/>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://sweetme-bakery.com/wp-content/uploads/2017/08/DSCF7553-Edit.jpg" style={{width:"287px",height:"260px",margin:"auto"}}/>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://sweetme-bakery.com/wp-content/uploads/2017/08/Copy-of-DSCF7497-Edit-2.jpg" style={{width:"287px",height:"260px",margin:"auto"}}/>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://sweetme-bakery.com/wp-content/uploads/2017/08/Sweet-Vanilla-butter-cheese.jpg" style={{width:"287px",height:"260px",margin:"auto"}}/>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://sweetme-bakery.com/wp-content/uploads/2017/08/Sweetme-soft-chocolate-cake-1.jpg" style={{width:"287px",height:"260px",margin:"auto"}}/>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://sweetme-bakery.com/wp-content/uploads/2017/08/Sweetme-Chocolate-Orange-Cake.jpg"style={{width:"287px",height:"260px",margin:"auto"}}/>
                    </Card>


                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://sweetme-bakery.com/wp-content/uploads/2017/08/Blueberry-Yogurt-Cake-1.jpg"style={{width:"287px",height:"260px",margin:"auto"}}/>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://sweetme-bakery.com/wp-content/uploads/2017/08/Sweet-Candy-Cake.jpg"style={{width:"287px",height:"260px",margin:"auto"}}/>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://sweetme-bakery.com/wp-content/uploads/2017/08/Sweet-vanilla-mousse-cake-with-mango-and-sauce-01.png"style={{width:"287px",height:"260px",margin:"auto"}}/>
                    </Card>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default allcake
