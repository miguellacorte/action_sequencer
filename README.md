# Action Sequencer

The Action Sequencer is an online music sequencer designed to explore new forms of interactive collective creation and online music distribution. It allows users to create and share a constellation of synth sequences and then play them back. The last sequence created is displayed on the homepage until a new one is created.

![PreviewImg](https://raw.githubusercontent.com/miguellacorte/action_sequencer/main/Screenshot%202023-04-21%20at%2019.04.11.png)

### Play with the latest deployment here: [https://action-sequencer.onrender.com/](https://action-sequencer.onrender.com/)

# Technical Framework

The project is built using React and p5.js for the frontend, and Node.js and MongoDB for the backend. The frontend utilizes several libraries such as React Router, React Draggable, React Bootstrap, and React Player, among others. The backend is built using Express.js and Mongoose.

Behind the scenes, p5.js is used to create the grid and handle user interactions with the interface. Tone.js is used to synthesize the sound, as well as to handle the sequencing of the composition. The backend server is responsible for storing and serving the saved compositions.

## Licensing and References
This project is licensed under the MIT license.

Currently, this project is being maintained within two repositories:
- Frontend repository: [https://github.com/miguellacorte/action_sequencer_frontend](https://github.com/miguellacorte/action_sequencer_frontend)
- Backend repository: [https://github.com/miguellacorte/action_Sequencer_backend](https://github.com/miguellacorte/action_Sequencer_backend)
