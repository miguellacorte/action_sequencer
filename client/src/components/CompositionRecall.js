import React, { useEffect } from "react";
import * as Tone from "tone";
import Sketch from "react-p5";

export default function CompositionRecall({ drawingX, drawingY, notes }) {
  useEffect(() => {
    return () => {
      Tone.Transport.stop();
    };
  });

  let drawingCoordinatesX = drawingX;
  let drawingCoordinatesY = drawingY;
  notes = notes;
  let width = 900;
  let height = 530;

  let totalDrawingDots = drawingCoordinatesY.length;

  let setup = (p5, canvasParentRef) => {
    let canvas = p5.createCanvas(width, height).parent(canvasParentRef);
    

    for (let i = 0; i < totalDrawingDots; i++) {
      p5.circle(drawingCoordinatesX[i], drawingCoordinatesY[i], 29);
      p5.line(
        drawingCoordinatesX[i],
        drawingCoordinatesY[i],
        drawingCoordinatesX[i + 1],
        drawingCoordinatesY[i + 1]
      );
    }
  };

  let synth = new Tone.Synth({
    oscillator: { type: "square8" },
  }).toDestination();

  const play = () => {
    console.log('play')
    Tone.start();
  };

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

  const seq = new Tone.Sequence(
    (time, note) => {
      synth.triggerAttackRelease(note, 0.1, time);
    },
    notes,
    "4n"
  ).start();

  Tone.Transport.start();

  return (
    <div>
      <Sketch setup={setup} />
      <button 
      onClick={play} 
      className="playBtn"

      >▶</button>
    </div>
  );
    
    
}
