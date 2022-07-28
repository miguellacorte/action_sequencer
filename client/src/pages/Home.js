import React from "react";
import SmallParticipationList from "../components/SmallParticipationList";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import "../styles/box.css";
import CompositionRecall from "../components/CompositionRecall";

export default function Home({ usersWithCompositions }) {
  console.log(usersWithCompositions)
  if (usersWithCompositions.length !== 0) {
    let totalUsers = usersWithCompositions.length;
    let lastUser = usersWithCompositions[totalUsers - 1];
    let lastUserCompositions = lastUser.compositions;
    let LastUserCompositionNumber = lastUserCompositions.length;
    let user = lastUserCompositions[LastUserCompositionNumber - 1];

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
            <SmallParticipationList
              usersWithCompositions={usersWithCompositions}
            />
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

        <div>
          <Draggable handle="#handle">
            <div className="compositionRecallHome">
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
                Last user participation
              </fieldset>

              <CompositionRecall
                drawingX={user.drawingX}
                drawingY={user.drawingY}
                notes={user.notes}
              />
            </div>
            
          </Draggable>
          <div>
              <Link to="/playground" className="saveCompositionBtnHome">
                <button>create your own participation</button>
              </Link>
          </div>
        </div>
      </div>
    );
  }
}
