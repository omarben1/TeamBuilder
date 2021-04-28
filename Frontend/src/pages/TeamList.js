import React from 'react';
import Team from '../components/Team';
import { useContextGlobal } from '../context';

const TeamList = () => {
    const { Teams, loading} = useContextGlobal().state;
    console.log(loading);
    if(loading){
        return <h2>Loading</h2>;
    }
    return (
        <div>
            <h1>Team List</h1>
            {Teams.map((team) => {
                return <Team teamId={team.teamId} teamName={team.teamName} teamDescription={team.teamDesc} nbrRemainingMembers={team.nbrRemainingMembers} teamOwnerFirstName={team.teamOwnerFirstName} teamOwnerLastName={team.teamOwnerLastName}></Team> 
            })}
        </div>
    );
}

export default TeamList;
