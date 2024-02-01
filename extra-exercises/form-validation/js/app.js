const form = document.querySelector('#signup');
const usernameField = document.querySelector('#username');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');
const confirmPasswordField = document.querySelector('#confirm-password');

const fieldIsRequired = value => value === '' ? false : true;

const usernameIsBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(email);
};

const isPasswordSecure = (password) => {
	const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
	return regex.test(password);
};

const showError = (input, message) => {
	// get the form-field element
	const formField = input.parentElement;
	// add the error class
	formField.classList.remove('success');
	formField.classList.add('error');

	// show the error message
	const error = formField.querySelector('small');
	error.textContent = message;
};

const showSuccess = (input) => {
	// get the form-field element
	const formField = input.parentElement;

	// remove the error class
	formField.classList.remove('error');
	formField.classList.add('success');

	// hide the error message
	const error = formField.querySelector('small');
	error.textContent = '';
}

const checkUsername = () => {
	let		valid			= false;
	const	min				= 3,
				max				= 25;
	const	username	= usernameField.value.trim();

	if (!fieldIsRequired(username)) {
		showError(usernameField, 'Username cannot be blank.');
	} else if (!usernameIsBetween(username.length, min, max)) {
		showError(usernameField, `Username must be between ${min} and ${max} characters.`)
	} else {
		showSuccess(usernameField);
		valid = true;
	}
	return valid;
}

const checkEmail = () => {
	let valid = false;
	const email = emailField.value.trim();

	if (!fieldIsRequired(email)) {
		showError(emailField, 'Email cannot be blank.');
	} else if (!isEmailValid(email)) {
		showError(emailField, 'Email is not valid.')
	} else {
		showSuccess(emailField);
		valid = true;
	}
	return valid;
}

const checkPassword = () => {
	let valid = false;
	const password = passwordField.value.trim();

	if (!fieldIsRequired(password)) {
		showError(passwordField, 'Password cannot be blank.');
	} else if (!isPasswordSecure(password)) {
		showError(passwordField, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
	} else {
		showSuccess(passwordField);
		valid = true;
	}

	return valid;
};

const checkConfirmPassword = () => {
	let valid = false;
	// check confirm password
	const confirmPassword = confirmPasswordField.value.trim();
	const password = passwordField.value.trim();

	if (!fieldIsRequired(confirmPassword)) {
		showError(confirmPasswordField, 'Please enter the password again');
	} else if (password !== confirmPassword) {
		showError(confirmPasswordField, 'Confirm password does not match');
	} else {
		showSuccess(confirmPasswordField);
		valid = true;
	}

	return valid;
};

const debounce = (fn, delay = 500) => {
	let timeoutId;
	return (...args) => {
		// cancel the previous timer
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		// setup a new timer
		timeoutId = setTimeout(() => {
			fn.apply(null, args)
		}, delay);
	};
};

form.addEventListener('input', debounce(function (e) {
	switch (e.target.id) {
		case 'username':
			checkUsername();
			break;
		case 'email':
			checkEmail();
			break;
		case 'password':
			checkPassword();
			break;
		case 'confirm-password':
			checkConfirmPassword();
			break;
	}
}));

form.addEventListener('submit', function (e) {
	// prevent the form from submitting
	e.preventDefault();

	// validate form
	let isUsernameValid = checkUsername(),
			isEmailValid = checkEmail(),
			isPasswordValid = checkPassword(),
			isConfirmPasswordValid = checkConfirmPassword();

	let isFormValid = isUsernameValid &&
			isEmailValid &&
			isPasswordValid &&
			isConfirmPasswordValid;

	// submit to the server if the form is valid
	if (isFormValid) {
		alert("Form sent successfully");
	}
});
