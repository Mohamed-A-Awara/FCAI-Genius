import React from 'react'
import facilogo from '../Images/Fcailogo-removebg-preview.png'
import sciencelogo from "../Images/اللجنة_الأجتماعية-1-removebg-preview.png"
import homeimg from '../Images/homeback.jpg'
import './Home.css'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Home() {

    return (
        <>
            <section className='Home-style' style={{backgroundImage:`url(${homeimg})`}}>
                <div className='overlay'>
                    <div className='our-data'>
                        <Image src={facilogo}  className='img-logo' />
                        <h1>FCAI UNION</h1>
                        <Image src={sciencelogo} className=' logo-right'/>
                    </div>
                    <div className='our-view'>
                        <h2>Genius competition</h2>
                        <NavLink to='/register' className='btn btn-primary' style={{opacity:"0.75"}}>get started !</NavLink>     
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default React.memo(Home)
