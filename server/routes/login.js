const loginRoutes = (app, fs) => {
    const firebase = require('firebase');
    var firebaseConfig = {
        apiKey: "AIzaSyCRw4LfcXmlHrOBQ8-0p_azJAN0Zi2ukJo",
        authDomain: "startreact-97b36.firebaseapp.com",
        databaseURL: "https://startreact-97b36.firebaseio.com",
        projectId: "startreact-97b36",
        storageBucket: "startreact-97b36.appspot.com",
        messagingSenderId: "216815858395",
        appId: "1:216815858395:web:2dba9ecd21617420"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      app.post('/user',(req,res)=>{
            email = req.body.email;
            password = req.body.password;
      })

}
module.exports = loginRoutes;
