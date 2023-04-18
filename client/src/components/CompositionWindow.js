import React, { useEffect } from "react";
import * as Tone from "tone";
import Sketch from "react-p5";
import "../styles/box.css";

export default function Composition({
  userNotes,
  setUserNotes,
  userDrawingX,
  setUserDrawingX,
  userDrawingY,
  setUserDrawingY,
  setSaveComposition,
  saveComposition,
}) {
  useEffect(() => {
    return () => {
      Tone.Transport.stop();
    };
  });

  let width = 900;
  let height = 500;

  let setup = (p5, canvasParentRef) => {
    console.log(canvasParentRef);
    let canvas = p5.createCanvas(width, height).parent(canvasParentRef);

    canvas.mousePressed((event) => {
      console.log("Clicked on the canvas. Event:", event);
    });
  };

  let synth = new Tone.Synth({
    oscillator: { type: "square8" },
  }).toDestination();

  Tone.Destination.volume.value = -15;

  let revWet = 1;
  let reverb = new Tone.Reverb([1]).toDestination();
  reverb.wet.rampTo(revWet, 3);

  let chorusDelayTime = 400;
  let chorus = new Tone.Chorus(20, chorusDelayTime, 1).toDestination();
  chorus.wet.value = 1;

  let feedback = 0.3;
  let pingPong = new Tone.PingPongDelay("16n", feedback).toDestination();

  synth.connect(chorus);
  chorus.connect(pingPong);
  pingPong.connect(reverb);

  let note = "";
  let notes = [];

  let drawingCoordinatesX = [];
  let drawingCoordinatesY = [];

  function audioStart() {
    Tone.start();
  }

  let mousePressed = (p5) => {
    let mouseX = p5.mouseX;
    let mouseY = p5.mouseY;
    console.log(mouseX, mouseY);

    audioStart();

    function checkNote() {
      if (mouseX >= 0 && mouseY >= 0 && mouseX < width && mouseY < height) {
        console.log("u are right");
        if (
          mouseX <= width / 4 &&
          mouseY <= height / 4 &&
          mouseX > 100 &&
          mouseY > 5
        ) {
          note = "G5";
        }
        if (
          mouseX > width / 4 &&
          mouseX < (width / 4) * 2 &&
          mouseY < height / 4
        ) {
          note = "A4";
        }
        if (
          mouseX > (width / 4) * 2 &&
          mouseX < (width / 4) * 3 &&
          mouseY < height / 4
        ) {
          note = "Bb4";
        }
        if (
          mouseX > (width / 4) * 3 &&
          mouseX < (width / 4) * 4 &&
          mouseY < height / 4
        ) {
          note = "C4";
        }
        if (
          mouseX <= width / 4 &&
          mouseY <= height / 2 &&
          mouseY > height / 4 &&
          mouseX > 1 &&
          mouseY > 1
        ) {
          note = "D3";
        }
        if (
          mouseX > width / 4 &&
          mouseX < (width / 4) * 2 &&
          mouseY <= height / 2 &&
          mouseY > height / 4 &&
          mouseX > 1 &&
          mouseY > 1
        ) {
          note = "Bb3";
        }
        if (
          mouseX > (width / 4) * 2 &&
          mouseX < (width / 4) * 3 &&
          mouseY <= height / 2 &&
          mouseY > height / 4 &&
          mouseX > 1 &&
          mouseY > 1
        ) {
          note = "F3";
        }
        if (
          mouseX > (width / 4) * 3 &&
          mouseX < (width / 4) * 4 &&
          mouseY <= height / 2 &&
          mouseY > height / 4 &&
          mouseX > 1 &&
          mouseY > 1
        ) {
          note = "G3";
        }
        if (
          mouseX <= width / 4 &&
          mouseY > height / 2 &&
          mouseY < height / 2 + height / 4 &&
          mouseX > 1 &&
          mouseY > 1
        ) {
          note = "A2";
        }
        if (
          mouseX > width / 4 &&
          mouseX < (width / 4) * 2 &&
          mouseY > height / 2 &&
          mouseY < height / 2 + height / 4
        ) {
          note = "F4";
        }
        if (
          mouseX > (width / 4) * 2 &&
          mouseX < (width / 4) * 3 &&
          mouseY > height / 2 &&
          mouseY < height / 2 + height / 4
        ) {
          note = "C4";
        }
        if (
          mouseX > (width / 4) * 3 &&
          mouseX < (width / 4) * 4 &&
          mouseY > height / 2 &&
          mouseY < height / 2 + height / 4
        ) {
          note = "D4";
        }
        if (
          mouseX <= width / 4 &&
          mouseY > height / 2 + height / 4 &&
          mouseX > 1 &&
          mouseY > 1
        ) {
          note = "G3";
        }
        if (
          mouseX > width / 4 &&
          mouseX < (width / 4) * 2 &&
          mouseY > height / 2 + height / 4 &&
          mouseX > 1 &&
          mouseY > 1
        ) {
          note = "A3";
        }

        if (
          mouseX > (width / 4) * 2 &&
          mouseX < (width / 4) * 3 &&
          mouseY > height / 2 + height / 4 &&
          mouseX > 1 &&
          mouseY > 1
        ) {
          note = "Bb3";
        }

        if (
          mouseX > (width / 4) * 3 &&
          mouseX < (width / 4) * 4 &&
          mouseY > height / 2 + height / 4 &&
          mouseX > 1 &&
          mouseY > 1
        ) {
          note = "C3";
        }
      }
    }

    if (mouseX >= 0 && mouseY >= 0 && mouseX < width && mouseY < height) {
      p5.loop();
      p5.strokeWeight(0);
      p5.fill(0);

      p5.circle(p5.mouseX, p5.mouseY, 29);
      p5.noLoop();

      checkNote();

      console.log(notes);
      notes.push(note);

      drawingCoordinatesX.push(p5.mouseX);
      drawingCoordinatesY.push(p5.mouseY);

      Tone.Transport.bpm.value = 30;
      Tone.Transport.pause();

      const seq = new Tone.Sequence(
        (time, note) => {
          synth.triggerAttackRelease(note, 0.1, time);
        },
        notes,
        "4n"
      ).start();

      Tone.Transport.start();
    }
  };

  let draw = (p5) => {
    let mouseX = p5.mouseX;
    let mouseY = p5.mouseY;
    let pmouseX = p5.pmouseX;
    let pmouseY = p5.pmouseY;

    if (p5.mouseIsPressed === true) {
      p5.strokeWeight(4);
      p5.fill(230, 0, 0);
      p5.line(pmouseX - 3, pmouseY + 3, mouseX, mouseY);
    }
  };

  const handleNotes = (event) => {
    setUserNotes((userNotes = notes));
  };

  const handleDrawingX = (event) => {
    setUserDrawingX((userDrawingX = drawingCoordinatesX));
  };

  const handleDrawingY = (event) => {
    setUserDrawingY((userDrawingY = drawingCoordinatesY));
  };

  // useEffect(() => {
  //   document.addEventListener("keydown", handleSaveComposition, true);
  //   console.log("keydown")
  // }, []);

  const handleSaveComposition = (event) => {
    setSaveComposition((saveComposition = true));
  };

  console.log(userNotes, userDrawingX, userDrawingY);
  return (
    <div>
      <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />
      <div>
        <button
          onClick={() => {
            handleNotes();
            handleDrawingY();
            handleDrawingX();
            handleSaveComposition();
          }}
          className="saveCompositionBtn"
        >
          {" "}
          Save Composition
        </button>
      </div>
    </div>
  );
}
