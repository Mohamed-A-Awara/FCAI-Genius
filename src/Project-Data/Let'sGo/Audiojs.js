import React from 'react'
import audio15s from '../Audios/Count.mp3'
import { Button } from 'react-bootstrap'
function Audiojs() {
    const play =()=>{
        new Audio(audio15s).play()
    }
    return (
        <>
            <Button onClick={play}>Play Audio</Button>
        </>
    )
}

export default Audiojs
