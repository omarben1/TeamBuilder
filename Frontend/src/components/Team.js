import React from 'react';
import {Card, Typography, Button, CardContent, CardActions, CardActionArea} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Team = ({ teamId, teamName, teamDescription, nbrRemainingMembers, teamOwnerFirstName, teamOwnerLastName}) => {
    return (
    <Card className="card" raised={true}>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {teamName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {teamDescription}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Team Owner : {`${teamOwnerFirstName} ${teamOwnerLastName}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Remaining members : {nbrRemainingMembers}
          </Typography>
        </CardContent>
      
      <CardActions>
        <Link className="teamLink" to={`/TeamList/${teamId}`}>
            <Button size="small" color="primary" variant="contained">
            Join
            </Button>
        </Link>
      </CardActions>
    </Card>
    );
}

export default Team;
