const firebaseConfig = {
    apiKey: "AIzaSyAt2Fy7Qy2H8qelIG_SrotcWpOiJt0EHrk",
    authDomain: "laundary-iitjv2.firebaseapp.com",
    databaseURL: "https://laundary-iitjv2-default-rtdb.firebaseio.com",
    projectId: "laundary-iitjv2",
    storageBucket: "laundary-iitjv2.appspot.com",
    messagingSenderId: "5721943638",
    appId: "1:5721943638:web:98ccfb0893b3d7727d95f7"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var FirstName = getElementVal("FirstName");
    var LastName = getElementVal("LastName");
    var RollNo = getElementVal("RollNo");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");


    saveMessages(FirstName, LastName, RollNo, emailid, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (FirstName, LastName, RollNo, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        FirstName: FirstName,
        LastName: LastName,
        RollNo: RollNo,
        emailid: emailid,
        msgContent: msgContent,
    });

    window.location = 'SubmissionPage.html';
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};