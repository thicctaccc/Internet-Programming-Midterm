document.addEventListener("DOMContentLoaded", function() {
 fields.firstName = document.getElementById('firstName');
 fields.lastName = document.getElementById('lastName');
 fields.email = document.getElementById('email');
 fields.StudentID = document.getElementById('StudentID');
 fields.note = document.getElementById('note');
})

function isEmail(email) {
 let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
 return regex.test(String(email).toLowerCase());
}
