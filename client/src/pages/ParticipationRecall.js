import React,{ useState } from 'react'
import CompositionRecall from '../components/CompositionRecall'
import { useParams } from 'react-router-dom';


export default function ParticipationRecall({ users }) {
 let userID = useParams().id;

 let user = users.find(function(user) {
	if(user._id === userID)
		return true;
});

//  const [foundUser, setFoundUser] = useState();
//  const [userComposition, setUserComposition] = useState(null);

  return (
    <div>
    
    <CompositionRecall 
    drawingX = {user.compositions[0].drawingX}
    drawingY = {user.compositions[0].drawingY}
    notes = {user.compositions[0].notes}
    />
     
    </div>
  )
}
