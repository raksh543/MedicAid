//SIGN IN
var uid=null
const signinform = document.querySelector('#signinform')
signinform.addEventListener('submit', (e) =>
{
    e.preventDefault();
    console.log('Here2')
    console.log(signinform['sign-in-email'].value)
    const email = signinform['sign-in-email'].value;
    const password = signinform['sign-in-password'].value;


    signinform.signInWithEmailAndPassword(eamil,password).then(cred =>{
        uniqueID = cred.user.uid
        window.location.href = "newappointment.component.html"
    })
     
})




//SIGN UP
const signupform = document.querySelector('#signupform')
signupform.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Here3")
    const email = signupform['email'].value;    
    const password = signupform['password'].value;
    const displayName = signupform['name'].value;
    const clinicid = signupform['clinicid'].value;
    const phoneNumber = signupform['number'].value;

    const user = {
        userName:displayName,
        clinicID:clinicid,
        phoneNumber:phoneNumber,
        uniqueID : uid, 
        doctorList:{
            doctorID:null,
            appointments:{
                patientName:null,
                patientAge:null,
                amountPaid: null,
                amountDue:null,
                date:null,
                address:null
        
            }
        }

    }

    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred)
                details.ref('users').push({user});
                console.log("Added")
                uid=cred.user.uid();
                signupform.reset()
                window.location.href = "newappointment.component.html"
               
            
        })
        
    })





//to retrieve data
var dbnameref = details.ref('users');
dbnameref.on('value', function(datasnapshot){
    datasnapshot.forEach(function(childsnap){
        var childData = childsnap.val();
        console.log(childData.user.clinicID)
    })
})






//SET APPOINTMENT 
const appointment = document.querySelector('#appoint')
appointment.addEventListener('sumbit', (e)=> {
    e.preventDefault();
    console.log("Here4")
    
    const patientName = appointment['name'].value
    const age = appointment['age'].value
    const email= appointment['email'].value
    const amountPaid = appointment['amtPaid'].value
    const date = dateObj.toString(appointment['date'].value)
    const time = appointment['time'].value
    const address = appointment['address'].value
    const amtDue = appointment['amtDue'].value;
    const sex = appointment['gender'].value;
    const doctorName = appointment['docName'].value
    
    const appt = {
        patientName:patientName,
        age:age,
        email:email,
        amountPaid:amountPaid,
        date:date,
        address:address,
        sex:sex,
        amtPaid:amtPaid,
        time:time

    
    }

    details.ref(users.uid === uid).push(appt)
    appointment.reset();



})



//LOGOUT
const logout = document.querySelector('#logout')
logout.addEventListener('click', (e) =>
{
    auth.signOut();
    uid = null
})




// //SETTINGS
// const setting = document.querySelector('#settings')
// setting.addEventListener('click', (e)=>
// {
    
//     if()
//     details().ref()
// })

// const name = signupform['name'].value;
// const clinicID = signupform['clinicid'].value;

// console.log(email)




// console.log('Here')
