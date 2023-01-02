const rule1 = /\w{3,16}/;
const rule2 = /\w{3,16}/;
const rule3 = /.+@gmail\.com/;
const rule4 = /.{4}/;





function sabmit() {
  //test for first name
  const firstName = document.querySelector('#first-name').value;
  const result1 = rule1.test(firstName);
  
  //test for last name
  const lastName = document.querySelector('#last-name').value;
  const result2 = rule2.test(lastName);
  
  //test for email address
  const emailAddress = document.querySelector('#email').value;
  const result3 = rule3.test(emailAddress);
  
//test for password
  const password = document.querySelector('#password').value;
  const result4 = rule4.test(password);
  
  
  if (result1 == false) {alert('your first name is invalid')}
  else if (result2 == false) {alert('your last name is invalid')}
  else if (result3 == false) {alert('your email address is invalid')}
  else if (result4 == false) {alert('your password is invalid')}
  
  else {alert('you are signed in')}
  

}
