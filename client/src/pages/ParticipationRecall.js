import React,{ useState } from 'react'
import Composition from '../components/Composition'
import { useParams } from 'react-router-dom';





export default function ParticipationRecall({ users }) {
 let userID = useParams().id;

 const [foundUser, setFoundUser] = useState();
 const [userComposition, setUserComposition] = useState(null);

 let F = users.find(function(user) {
	if(user._id === userID)
		return true;
});

console.log(F)

  return (
    <div>
    
    {/* <Composition /> */}
    <Composition />
     
    </div>
  )
}
