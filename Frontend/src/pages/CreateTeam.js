import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { useContextGlobal } from '../context';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const CreateTeam = () => {
    const { createTeam } = useContextGlobal();

    const [FirstName,setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const [Email,setEmail] = useState('');
    const [TeamName,setTeamName] = useState('');
    const [NbrMember,setNbrMember] = useState('');
    const [DescTeam,setDescTeam] = useState('');
    const handelSubmit = () => {
        const teamOwnerInfos = {FirstName,
                                LastName,
                                Email
                                };
        const teamInfos = {TeamName,
                           NbrMember,
                           DescTeam};
        createTeam({ teamOwnerInfos, teamInfos});
    }
    return (
        <div className="createTeam">
            <div className="preform">
            <form>
                <div className="postform">
                    <div className="form_section">
                        <h2>Team Owner Informations</h2>
                        <div>
                            <TextField className="textfield" name="uu" id="outlined-basic" variant="outlined" label="First Name" value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/>
                        </div>
                        <div>
                            <TextField className="textfield" id="outlined-basic" variant="outlined" label="Last Name" value={LastName} onChange={(e)=>setLastName(e.target.value)}/>
                        </div>
                        <div>
                            <TextField className="textfield" id="outlined-basic" variant="outlined" label="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="form_section">
                        <h2>Team Informations</h2>
                        <div>
                            <TextField className="textfield" id="outlined-basic" variant="outlined" label="Team Name" value={TeamName} onChange={(e)=>setTeamName(e.target.value)}/>
                        </div>
                        <div>
                            <TextField className="textfield" id="outlined-basic" variant="outlined" label="Number of members" value={NbrMember} onChange={(e)=>setNbrMember(e.target.value)}/>
                        </div>
                        <div>
                            <TextareaAutosize className="textarea" aria-label="description of the team" placeholder="Description of the team... " value={DescTeam} onChange={(e)=>setDescTeam(e.target.value)}/>
                        </div>    
                    </div>
                </div>
                <Link to="/TeamList"
                      onClick={handelSubmit}  
                      className="btn-form"
                        >
                            Create Team
                    </Link>
            </form> 
               
            </div>         
        </div>
    );
};

export default CreateTeam;
