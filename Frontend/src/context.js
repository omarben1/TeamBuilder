import React, { useReducer } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { reducer } from './reducer';

const url = "http://localhost:8080/getTeams";
const AppContext = React.createContext();
const initialState = {
        Teams: [{
            teamId : '',
            teamName : '',
            teamDesc : '',
            teamOwnerFirstName : '',
	        teamOwnerLastName : '',
            nbrRemainingMembers : ''
        }],
        loading:false
    };


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const createTeam = async ( teamInfos ) => {
        dispatch({type:'addTeam', payload:teamInfos});
        dispatch({type:'loading'});
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        dispatch({type:'GetTeams', payload:data});
    }

    const joinTeam = ( userInfos ) => {
        dispatch({type: 'joinTeam', payload:userInfos});
    }

    const fetchData = async() => {
        try{
            dispatch({type:'loading'});
            const res = await fetch(url);
            const data = await res.json();
            dispatch({type:'GetTeams', payload:data});
        }catch(Error){
            console.error(Error.message);
        }
    } 
    useEffect(fetchData,[]);
    return (
        <AppContext.Provider
          value={{
            state,
            createTeam,
            joinTeam
          }}
        >
            { children }
        </AppContext.Provider>
    )
}
const useContextGlobal = () => {
    return useContext(AppContext);
}
export {AppProvider, useContextGlobal};
