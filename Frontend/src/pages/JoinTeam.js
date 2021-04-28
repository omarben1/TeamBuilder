import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useParams } from 'react-router';
import { useContextGlobal } from '../context';


const JoinTeam = () => {
    const { joinTeam } = useContextGlobal();
    
    const [FirstName,setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const [Email,setEmail] = useState('');
    const { teamId } = useParams(); 

    const handelSubmit = (e) => {
        e.preventDefault();
        const userInfos = {teamId,
                      FirstName,
                      LastName,
                      Email};
        joinTeam(userInfos);
    }
    return (
        <form onSubmit={handelSubmit}>
            <div className="joinTeam">
                <h2>Member Informations</h2>
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
            <button className="btn-form" type="submit">Create Team</button>
        </form>
    );
}
export default JoinTeam;
