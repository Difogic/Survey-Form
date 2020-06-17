const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

const postAnswers = async data => {
  let collectionRef = db.collection('replies')
  data.ts = new Date().toJSON()
  await collectionRef.add(data)
    .then(ref => console.log('Added document with ID: ', ref.id))
  return data
}


exports.sendMail = functions.https.onRequest(async (req, res) =>
cors(req, res, async () => {
  const mailConfig = functions.config()["p11-form"].mailconfig

  console.log('mailConfig', mailConfig)

  const transport = nodemailer.createTransport({
    ...mailConfig,
    secure: true,
    logger: true,
    tls: {
       rejectUnauthorized: false
    }
  })

  transport.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  const sendMail = async (data) => {
    console.log(data)

    await transport.sendMail({
      from: '"p11 Survey Form" <hello@difogic.com>',
      to: 'hi@p11.com',
      subject: 'New questionnaire reply',
      text: data.toString()
    })
  }

  console.log('req.body', req.body)

  try {
    const data = await postAnswers(req.body)
    console.log('data', data)
    const result = await sendMail(data)
    console.log('sendMail result', result)
    return res.send(data)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }

})
);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
