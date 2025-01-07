
function checkStrength() {
    const password = document.getElementById('password').value;
    const resultElement = document.getElementById('result');
    let strength = 0;

    if (password.length >= 8) {
      strength++;
    }

    if (/[A-Z]/.test(password)) {
      strength++;
    }

    if (/[a-z]/.test(password)) {
      strength++;
    }

    if (/[0-9]/.test(password)) {
      strength++;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength++;
    }

    if (strength <= 2) {
      resultElement.textContent = "Weak";
      resultElement.className = "weak";
    } else if (strength === 3) {
      resultElement.textContent = "Medium";
      resultElement.className = "medium";
    } else {
      resultElement.textContent = "Strong";
      resultElement.className = "strong";
    }
  }
