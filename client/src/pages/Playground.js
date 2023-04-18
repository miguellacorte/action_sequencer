import React, { useState } from "react";
import CompositionWindow from "../components/CompositionWindow";
import { useParams, Link } from "react-router-dom";
import Popup from "reactjs-popup";
import LoginSave from "../components/LoginSave";
import Draggable from "react-draggable";
import "../styles/box.css";
import SignupAndSave from "../components/SignupAndSave";

export default function Playground() {
  let userID = useParams().id;

  const [userNotes, setUserNotes] = useState();
  const [userDrawingX, setUserDrawingX] = useState();
  const [userDrawingY, setUserDrawingY] = useState();
  const [saveComposition, setSaveComposition] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  console.log(position);

  return (
    <div>
      <div>
        {saveComposition && (
          <SignupAndSave
            userNotes={userNotes}
            userDrawingX={userDrawingX}
            userDrawingY={userDrawingY}
          />
        )}

        {saveComposition && (
          <LoginSave
            userNotes={userNotes}
            userDrawingX={userDrawingX}
            userDrawingY={userDrawingY}
          />
        )}
      </div>

      <div>
        {!saveComposition && (
          <Draggable handle="#handle">
            <div className="compositionBox">
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
                  width: "65.5vw",
                }}
              >
                Playground
              </fieldset>

              <CompositionWindow
                setUserNotes={setUserNotes}
                userNotes={userNotes}
                userDrawingX={userDrawingX}
                setUserDrawingX={setUserDrawingX}
                userDrawingY={userDrawingY}
                setUserDrawingY={setUserDrawingY}
                saveComposition={saveComposition}
                setSaveComposition={setSaveComposition}
              />
            </div>
          </Draggable>
        )}
      </div>
    </div>
  );
}
