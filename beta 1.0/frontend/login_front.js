function ajaxLoginFunction(){
	var ajaxRequest;  // The variable that makes Ajax possible
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
        // Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			var ajaxDisplay = document.getElementById('ajaxDiv');
			var res = ajaxRequest.responseText;

			//Defines where the front pages for student and instructo are
			var studentPage = "student_front.php";
			var instructorPage = "instructor_front.php";
			var data = JASON.parse(res);	//looks at database to find if users are in it

			//Checks whether the login is a student or instructor and redirects them to the appropriate front page
			if (data['authorization']=="student") window.location.replace(studentPage);
			else if (data['authorization']=="instructor") window.location.replace(instructorPage);
			else ajaxDisplay.innerHTML = <h2><center>Login Failed</center></h2>;	//login will fail if user is not in database
		}
	}
	var name = document.getElementById('login:username').value;
	var pass = document.getElementById('login:password').value;
	var myJSONObject = {"name": name,"pass":pass};
	ajaxRequest.open("POST", MID_PATH+"login.php", true);
	
	//ajaxRequest.send(null); 
	ajaxRequest.send(JSON.stringify(myJSONObject));
}