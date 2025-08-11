document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');

  if (signupForm) {
    signupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      let isValid = true;

      clearErrors();

      const fullName = document.getElementById('fullName').value;
      if (fullName.trim() === '' || fullName.length < 3) {
        document.getElementById('fullNameError').textContent = 'Cannot be empty and must be at least 3 characters.';
        document.getElementById('fullName').classList.add('invalid');
        isValid = false;
      }

      const email = document.getElementById('email').value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please follow correct format (name@domain.com).';
        document.getElementById('email').classList.add('invalid');
        isValid = false;
      }

      const password = document.getElementById('password').value;
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters, with one uppercase letter, one number, and one special character.';
        document.getElementById('password').classList.add('invalid');
        isValid = false;
      }

      const confirmPassword = document.getElementById('confirmPassword').value;
      if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        document.getElementById('confirmPassword').classList.add('invalid');
        isValid = false;
      }

      const phoneNumber = document.getElementById('phoneNumber').value;
      if (!/^\d{10}$/.test(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent = 'Phone Number must be exactly 10 digits.';
        document.getElementById('phoneNumber').classList.add('invalid');
        isValid = false;
      }

      if (isValid) {
        alert('Signed Up!');
        setTimeout(() => window.location.href = 'main.html', 1000);
      } else {
        alert('Please enter the correct information in the form.');
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
      let isValid = true;

      clearErrors();

      const email = document.getElementById('email').value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please follow correct format (name@domain.com).';
        document.getElementById('email').classList.add('invalid');
        isValid = false;
      }

      const password = document.getElementById('password').value;
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters, with one uppercase letter, one number, and one special character.';
        document.getElementById('password').classList.add('invalid');
        isValid = false;
      }

      if (isValid) {
        alert('Logged In!');
        setTimeout(() => window.location.href = 'main.html', 1000);
      } else {
        alert('Please enter valid login credentials.');
      }
    });
  }

  function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input').forEach(input => input.classList.remove('invalid'));
  }
});