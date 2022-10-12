const logButton = document.getElementById('button');
    logButton.onclick = () => {
        const userDiv = document.querySelector('#username').value;
        const passDiv = document.querySelector('#password').value;
    
            if(!userDiv){
                console.log('Input Username');
            }
            else if(userDiv.length < 3){
                alert('Username should be longer than 3 characters!');
            }

            if(!passDiv){
                console.log('Input Password');
            }
            else if(passDiv.length < 3){
                alert('Username should be longer than 3 characters!');
            }

            if(userDiv === "admin" && passDiv === "root"){
                window.open("login-home.html")
            }
            else{
                alert('Wrong username or password');
            }
    }
