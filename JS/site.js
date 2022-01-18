
// Dispalying Darren to unsuspecting Victims
function getMessage(){

    let userMessage = document.getElementById("message").value;
    
Swal.fire(
    'The App Title',
    userMessage,
    'question'
    );

    console.log(userMessage);
}