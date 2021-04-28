import axios from 'axios';


export const reducer = (state, action) => {

    switch(action.type){
        case 'GetTeams' : 
            return {...state,Teams:action.payload,loading:false};

        case 'loading' :
            return {...state,loading:true};

        case 'addTeam' :
            let {teamInfos, teamOwnerInfos} = action.payload;
            let team = {}, teamOwner = {};
            team.name = teamInfos.TeamName;
            team.description = teamInfos.DescTeam;
            team.nbrMaxofMembers = teamInfos.NbrMember;

            teamOwner.firstName = teamOwnerInfos.FirstName;
            teamOwner.lastName = teamOwnerInfos.LastName;
            teamOwner.email = teamOwnerInfos.Email;
            axios.post('http://localhost:8080/addTeam', {team, teamOwner}).then((response) => {
                console.log(response);
            })

        case 'joinTeam' :
            let userInfos = action.payload;
            let teamId = userInfos.teamId;
            let user = {};
            user.firstName = userInfos.FirstName;
            user.lastName = userInfos.LastName;
            user.email = userInfos.Email;
            axios.post('http://localhost:8080/addUserToTeam', {teamId, user});


    }
}