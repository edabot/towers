import * as firebase from "firebase";

class Firebase {

    static initialise() {
        var config = {
          apiKey: "AIzaSyCFwuCu_hL0-nzjr3j4FQq3hrRPz7VYTQw",
          authDomain: "towers-6817f.firebaseapp.com",
          databaseURL: "https://towers-6817f.firebaseio.com",
          projectId: "towers-6817f",
          storageBucket: "towers-6817f.appspot.com",
          messagingSenderId: "85955290587"
        };
        firebase.initializeApp(config);
    }

}

module.exports = Firebase;
