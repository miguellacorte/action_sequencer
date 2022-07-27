import React from "react";
import SmallParticipationList from "../components/SmallParticipationList";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import box from "../styles/box.css";

export default function Home({ users }) {
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
    </div>
  );
}
