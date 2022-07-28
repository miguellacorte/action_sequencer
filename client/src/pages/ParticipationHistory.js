import React from "react";
import ParticipationHistoryList from "../components/ParticipationHistoryList";
import Draggable from "react-draggable";

export default function ParticipationHistory({ users }) {

  if (users !== undefined) {
  return (
    <div>
      <h1>Participation History</h1>
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
          <ParticipationHistoryList users={users}  />
        </div>
      </Draggable>
    </div>
  );
}
}
