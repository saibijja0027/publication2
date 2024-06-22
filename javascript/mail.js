const firebaseConfig = {
    apiKey: "AIzaSyCkJ1_1HNz1h3MLXCDt5LmMUl0Xk_H1wb4",
    authDomain: "feedbackform-73391.firebaseapp.com",
    databaseURL: "https://feedbackform-73391-default-rtdb.firebaseio.com",
    projectId: "feedbackform-73391",
    storageBucket: "feedbackform-73391.appspot.com",
    messagingSenderId: "1040745459357",
    appId: "1:1040745459357:web:ff16bfb4923fbbca546e74"
  };

  //initialize firebase

  firebase.initializeApp(firebaseConfig);

  //reference your database

  var contactFormDB = firebase.database().ref('contactform');

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e)
  {
    e.preventDefault();

    var name = getElementVal("exampleInputFirstname");
    var emailid = getElementVal("exampleInputEmail1");
    var message = getElementVal("comment");

    saveMessages(name, emailid, message);

    //enable alert

    document.querySelector(".alert").style.display = "block";

    //remove the alert

    setTimeout(() => {
    document.querySelector(".alert").style.display = "none";

    }, 3000);


    //reset the form

    document.getElementById("contactForm").reset();
  }


const saveMessages = (name, emailid, message) =>{

    var newContactForm = contactFormDB.push();

    newContactForm.set({

        name : name,
        emailid : emailid,
        message : message,
    });
}




const getElementVal = (id) => {

    return document.getElementById(id).value;
};
