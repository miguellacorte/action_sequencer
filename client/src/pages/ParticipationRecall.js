import React, { useState } from "react";
import CompositionRecall from "../components/CompositionRecall";
import { useParams } from "react-router-dom";
import Draggable from "react-draggable";

export default function ParticipationRecall({ users }) {
  let userID = useParams().id;

  let user = users.find(function (user) {
    if (user._id === userID) return true;
  });

  console.log(user.compositions.length);
  let lastComposition = user.compositions.length -1

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
            Participation from: {user.username}
          </fieldset>

          <CompositionRecall
            drawingX={user.compositions[lastComposition].drawingX}
            drawingY={user.compositions[lastComposition].drawingY}
            notes={user.compositions[lastComposition].notes}
          />
        </div>
      </Draggable>
    </div>
  );
}
