function requireUserName(name){
  for (var a = 0; a < name.length; a++) {
    if (name[a] !== name[a].toLowerCase()) {
      return "Username anda tidak valid";
    }
  }
  return 'Username valid'
}
console.log(requireUserName('arisupriatna'))

function requireEmail(email) {

  for (var a = 0; a < email.length; a++) {
    if (email[a] !== email[a].toLowerCase()) {
      return "Email anda tidak valid";
    }
  }

  var at = email.indexOf('@')
  if(at > 1){
    return 'Email anda valid'
  } else {
    return 'Email anda tidak valid'
  }

}
console.log(requireEmail("ariupriatna703@gmail.com"));

function requirePhoneNumber(phone){

  for(var a = 0; a < phone.length; a++){
    if(phone[a] === '+' || phone[a] === ' '){
      return 'Number phone valid'
    } else {
      return 'invalid'
    }
  }

}
console.log(requirePhoneNumber('+685 777 282 844'))