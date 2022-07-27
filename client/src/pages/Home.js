import React from "react";
import SmallParticipationList from "../components/SmallParticipationList";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import "../styles/box.css";
// import CompositionRecall from "";

export default function Home({ users }) {
  
  let Users = {users}.users
  // let UsersLength = Users.length
  // let totalUsers =  UsersLength - 1
  // let lastUser = Users[totalUsers]
  // let lastUserCompositions = lastUser.compositions
  // let lastUserCompositionsAmount = lastUserCompositions.length
  // let lastUserCompositionsTotal = lastUserCompositionsAmount-1
  // let finalComposition = lastUserCompositions[lastUserCompositionsTotal]
  // let finalCompositionNotes = finalComposition.notes
  // let finalCompositionDrawingX = finalComposition.drawingX
  // let finalCompositionDrawingY = finalComposition.drawingY
  console.log(Users)

  return (
   
      <div>
        <Draggable handle="#handle">
          <div className="boxParticipationList">
            <fieldset
              id="handle"
              style={{
                fontSize: "13px",
                position: "relative",
                left: "-2px",
                color: "white",
                backgroundColor: "black",
                borderColor: "black",
                borderBlockHeight: "200px",
                borderStyle: "solid",
                borderWidth: "1px",
                padding: "3px",
                width: "262px",
              }}
            >
              Participation history List
            </fieldset>
            <SmallParticipationList users={users} />
            <Link
              to="/participationHistory"
              style={{
                fontSize: "10.5px",
                position: "relative",
                color: "black",
                padding: "0px",
                width: "270px",
              }}
            >
              See complete participation history List ⬈
            </Link>
          </div>
        </Draggable>

        <Link to="/playground">
          <button>create your own participation</button>
        </Link>

        {/* <CompositionRecall 
        notes={finalCompositionNotes}
        drawingX={finalCompositionDrawingX}
        drawingY={finalCompositionDrawingY}
        /> */}


      </div>
      
  );
}
