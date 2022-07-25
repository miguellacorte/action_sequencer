import React, {useState} from "react";
import Composition from "../components/Composition";
import { useParams, Link } from "react-router-dom";
// import Popup from "reactjs-popup";
// import Signup from "../components/Signup";

export default function Playground() {
  let userID = useParams().id;

  const [userNotes, setUserNotes] = useState()
  const [userDrawingX, setUserDrawingX] = useState()
  const [userDrawingY, setUserDrawingY] = useState()
  const [showModal, setShowModal] = useState(false)

  

//   let composition = [`${userNotes}`],
//   [`${[userDrawingX]}`], 
//   [`${[userDrawingY]}`]

//   console.log(composition.[0])

  return (
    <div>
      <div>
        <Composition 
        setUserNotes={setUserNotes} userNotes={userNotes} 
        userDrawingX = {userDrawingX} setUserDrawingX ={setUserDrawingX} 
        userDrawingY={userDrawingY} setUserDrawingY={setUserDrawingY}
        showModal={showModal} setShowModal={setShowModal}
        />
      </div>
{/* if modal = true
1. display popUp
2. if pop up button is submitted: 
3. post composition & user data 
   */}

        {/* <div>
        <Popup modal trigger={<button>Save Participation</button>}>
          Modal Content
          <Signup />
        </Popup>
        </div> */}
    </div>
  );
}
