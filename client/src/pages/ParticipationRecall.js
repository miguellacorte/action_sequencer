import React, { useState } from "react";
import CompositionRecall from "../components/CompositionRecall";
import { useParams } from "react-router-dom";
import Draggable from "react-draggable";

export default function ParticipationRecall({ users }) {
  let userID = useParams().id;

  let user = users.find(function (user) {
    if (user._id === userID) return true;
  });

  console.log(user.compositions);

  //  const [foundUser, setFoundUser] = useState();
  //  const [userComposition, setUserComposition] = useState(null);

  return (
    <div>
      <Draggable handle="#handle">
        <div className="compositionRecallBox">
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
              width: "943px",
            }}
          >
            Playground
          </fieldset>

          <CompositionRecall
            drawingX={user.compositions[0].drawingX}
            drawingY={user.compositions[0].drawingY}
            notes={user.compositions[0].notes}
          />
        </div>
      </Draggable>
    </div>
  );
}
