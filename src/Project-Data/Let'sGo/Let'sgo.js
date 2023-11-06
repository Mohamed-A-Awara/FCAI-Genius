import React, { useState } from 'react'
import { teamName } from '../Register/Register'
import './start.css'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { add5numberOne, add5numberTwo, addnumberOne, addnumberTwo, del5numberOne, del5numberTwo, delnumberOne, delnumberTwo, resetvalue } from './ReduxFiles/Slice'


import count20s from '../Audios/Count20.mp3'
import count45s from '../Audios/Count45.mp3'
function StartDay() {    
        let {valueteam1 , valueteam2} = useSelector((state)=> state.counter)
        const  dispatch = useDispatch()
        const addT1 =()=>{dispatch ( addnumberOne())} 
        const addT2 = ()=>{dispatch ( addnumberTwo())}
        const delT1 = ()=> {dispatch ( delnumberOne())}
        const delT2 = ()=> {dispatch ( delnumberTwo())}
        const add5T1 = ()=> {dispatch ( add5numberOne())}
        const add5T2 = ()=> {dispatch ( add5numberTwo())}
        const del5T1 = ()=> {dispatch( del5numberOne())}
        const del5T2 = ()=>{ dispatch ( del5numberTwo())}
        // const resetCounter = ()=> {dispatch( resetvalue())}
        // ********************** Timer Function ********************* */ 
        const [timer,settimer] = useState(20) 
        const t15 = ()=>{
            settimer((x)=>{
                while (x!==0){
                    return x-1
                }
                return x=0
                
            })
        }
        const startTimer = ()=>{
            setInterval(t15 , 1000)
        }    
            
        //**************** Audio Sound  ******************************** */
        const sound20 = new Audio(count20s)
        const sound45 = new Audio(count45s)
        const play20s =()=>{
                sound20.play()
        }
        const play45s = ()=>{
            sound45.play()
        }
        const pause20s = ()=>{
                sound20.pause()
        }

        const start20s = ()=>{
            startTimer()
            settimer(20)
            play20s()
        }
        const start45s = ()=>{
            startTimer()
            settimer(45)
            play45s()
        }
        
    return (
        <>
            <section className='start-page'>
                <div className='team-one'>
                    <h3>Team {teamName.FirstTeam}</h3>
                    <div className='counter-value'> {valueteam1}</div>
                    <div className='btn-control'>
                        <Button className='btn btn-success btn-counter' onClick={addT1 }>+</Button>
                        <Button className='btn btn-success btn-counter' onClick={add5T1 }>+5</Button>
                        <Button className='btn btn-danger btn-counter' onClick={delT1 }>-</Button>
                        <Button className='btn btn-danger btn-counter' onClick={del5T1}>-5</Button>
                    </div>
                </div> 
                <div className='timer-data'>
                        <h1>{timer}</h1>
                        <div className='Timer-controls'>
                            <Button className='btn btn-info' onClick={()=> start20s()}>Start 20s</Button>
                            <Button className='btn btn-info' onClick={()=> start45s()}>Start 45s</Button>
                            <Button className='btn btn-info' onClick={()=> settimer(0)}>Reset Timer</Button>
                        </div>
                </div>
                <div className='team-two'>
                <h3>Team {teamName.LastTeam}</h3>
                    <div className='counter-value'>{valueteam2}</div>
                    <div className='btn-control'>
                        <Button className='btn btn-success btn-counter' onClick={addT2}>+</Button>
                        <Button className='btn btn-success btn-counter'onClick={add5T2}>+5</Button>
                        <Button className='btn btn-danger btn-counter' onClick={delT2 }>-</Button>
                        <Button className='btn btn-danger btn-counter'onClick={del5T2}>-5</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo(StartDay)
