import React, {useState} from "react";
import Composition from "../components/Composition";
import { useParams, Link } from "react-router-dom";
// import Popup from "reactjs-popup";
import Signup from "../components/Signup";

export default function Playground() {
  let userID = useParams().id;

  const [userNotes, setUserNotes] = useState()
  const [userDrawingX, setUserDrawingX] = useState()
  const [userDrawingY, setUserDrawingY] = useState()
  const [saveComposition, setSaveComposition] = useState(false)

  return (
    <div>
      <div>
        <Composition 
        setUserNotes={setUserNotes} userNotes={userNotes} 
        userDrawingX = {userDrawingX} setUserDrawingX ={setUserDrawingX} 
        userDrawingY={userDrawingY} setUserDrawingY={setUserDrawingY}
        saveComposition={saveComposition} setSaveComposition={setSaveComposition}
        />
      </div>

      <div>
      {saveComposition
      && 
      <Signup 
        userNotes={userNotes} userDrawingX={userDrawingX} 
        userDrawingY={userDrawingY}
      /> 
      }
      </div> 

    </div>
  );
}
