//ajax to PHP
function userLogin(){
	var username = document.getElementById('username');
	var password = document.getElementById('password');

	makeAjaxCall(username.value, password.value);
}
function makeAjaxCall(username, password){

	var data = 'json_string={"header":"login","username":"'+username+'","password":"'+password+'"}'
	var request = new XMLHttpRequest();

	request.open('POST', '../php/frontend.php', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.send(data);

	//ajax request was successful
	request.onload = function() {
		if (request.status >= 200 && request.status < 400) {
			var response = request.responseText;
			console.log(response)
			loginAttempt(response, username)
		} else {
			console.log(response)
		}
	};
}
//======================================================================================
//parses response
function loginAttempt(response, username){
	var responseJSON = JSON.parse(response)
	if(responseJSON =="fail"){
		console.log("failed Login");
	}
	else{
		window.localStorage.setItem('username', username);
		window.localStorage.setItem('type', responseJSON);

		if(responseJSON=="student"){
			console.log("Student")
			window.location.replace("../student/s-landing.html");
		}
		else if(responseJSON=="teacher"){
			console.log("teacher")
			window.location.replace("../teacher/t-landing.html");
		}
	}
}
//======================================================================================
