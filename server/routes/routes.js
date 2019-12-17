const productsRoutes = require('./products');

const appRouter = (app, fs) => {
    var router = require('express').Router();

      router.post('/user',(req,res)=>{
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
            email = req.body.email;
            password = req.body.password;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((data) => res.send(JSON.parse(data)),console.log(data))
        .catch(error => this.setState({ errorMessage: error.message }))
    });

    // // other routes
};

module.exports = appRouter;