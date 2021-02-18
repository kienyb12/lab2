import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// const functions = require('firebase-functions');

const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     const date = new Date();
//     const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
//     res.send(`
//       <!doctype html>
//       <head>
//         <title>Time</title>
//         <link rel="stylesheet" href="/style.css">
//         <script src="/script.js"></script>
//       </head>
//       <body>
//         <p>In London, the clock strikes:
//           <span id="bongs">${'BONG '.repeat(hours)}</span></p>
//         <button onClick="refresh(this)">Refresh</button>
//       </body>
//     </html>`);
// });
// exports.app = functions.https.onRequest(app);

exports.bigben = functions.https.onRequest((req, res) => {
    const hours = (new Date().getHours() % 12) + 1  // London is UTC + 1hr;
    res.status(200).send(`<!doctype html>
      <head>
        <title>Time</title>
      </head>
      <body>
        ${'BONG '.repeat(hours)}
      </body>
    </html>`);
});