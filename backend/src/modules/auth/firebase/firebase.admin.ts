import * as admin from 'firebase-admin';


const serviceAccountCredentials :admin.ServiceAccount  = {
   projectId: process.env.FIREBASE_ADMIN_SDK_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_SDK_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_ADMIN_SDK_PRIVATE_KEY?.replace(/\\n/g, '\n'),}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountCredentials,
  ),
});


export default admin;



