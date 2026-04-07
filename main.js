// Username and Password
function username_password () {
    let username = document.getElementById('input1').value;
    let password = document.getElementById('input2').value;

    if (username === 'Franchesca Dela Rosa' && password === 'OBMCGH') {
        window.alert('You have successfully logged in! Welcome, Franchesca Dela Rosa!');
    } else {
        window.alert('Incorrect username and/or password. Please try again.');
    }
}

// Instructions
function toggle_instructions() {
    document.getElementById('toggle').innerHTML = 'Kindly fill up the following details. After doing so, click the login button to successfully log in to your account. If the password and/or username is incorrect, please try again.';
}

//Stay Logged In
function logged_in() {
    const checkbox = document.getElementById('stay');
    const output = document.getElementById('output');
    
    if (checkbox.checked) {
        output.innerHTML = 'Your session will stay active on this device.';
    } else {
        output.innerHTML = '';
    }
}
