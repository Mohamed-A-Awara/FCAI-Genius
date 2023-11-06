import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Register.css'
import GroupsIcon from '@mui/icons-material/Groups';
import { NavLink } from 'react-router-dom';


function Register() {
    const [team,setteam] = useState({
        team1_Name:"",
        team2_Name:"",
    },[])
    teamName.FirstTeam = team.team1_Name
    teamName.LastTeam = team.team2_Name

    return (
        <>
            <section className='register-page'>
                <Container>
                    <h1>Register in Our competition</h1>
                    <hr style={{borderColor:"#337CCF" , borderWidth:"3px"}}/>
                    <Row className='input-parent'>
                        <Col xl='5' className=' input-style'>
                                <label>Enter Your Team Name : </label>
                                <input type='text' placeholder='Team One Name'
                                    value={team.team1_Name} 
                                    onChange={(e) => setteam({...team,team1_Name:e.target.value})}
                                />
                        </Col>
                        <Col xl='5' className=' input-style'>        
                                <label>Enter Your Team Name : </label>
                                <input type='text' placeholder='Team Two Name'
                                    value={team.team2_Name} 
                                    onChange={(e) => setteam({...team,team2_Name:e.target.value})}
                                />
                        </Col>
                        <hr style={{borderColor:"#337CCF" , borderWidth:"3px"}}/>
                        <Col xl='4' className='teams-data' sm='6'>
                            <div>
                                <h3> Team One </h3>
                                <GroupsIcon className='team-icon'/>
                                <h3>{team.team1_Name}</h3>
                            </div>
                        </Col>    
                        <Col xl='4' className='teams-data' sm='6'>
                        <div>
                                <h3> Team two </h3>
                                <GroupsIcon className='team-icon'/>
                                <h3> {team.team2_Name}</h3>
                            </div>
                        </Col>    
                    <hr style={{borderColor:"#337CCF" , borderWidth:"3px"}}/>
                            
                        <Col xl='12' className='link-start'>
                            <NavLink className='btn btn-success' to='/letsgo'>Let's Go</NavLink>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
        
    )
}
export default React.memo(Register)
export const teamName = {
    FirstTeam:"",
    LastTeam:""
}