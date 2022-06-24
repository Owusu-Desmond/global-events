// hide and show mobile menu
const menuContent = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.menu-icon');

// add to storage function
function addToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// remove to storage function
function getFromStorage(key) {
  // check if local storage has the value
  const rawData = localStorage.getItem(key);
  if (rawData !== null) {
    return JSON.parse(localStorage.getItem(key));
  }
  return [];
}

hamburger.addEventListener('click', () => {
  document.querySelector('.bi-list').classList.toggle('bi-x');
  menuContent.classList.toggle('menu-show');
});
// show and hide login and sign up modal
const signInModal = document.getElementById('sign-in-form-modal');
const signUpModal = document.getElementById('sign-up-form-modal');
// show sign in modal
document.getElementById('sign-in-btn1').addEventListener('click', () => {
  signInModal.style.display = 'block';
});
document.getElementById('sign-in-btn2').addEventListener('click', () => {
  signInModal.style.display = 'block';
});
document.getElementById('sign-in-btn3').addEventListener('click', () => {
  signUpModal.style.display = 'none';
  signInModal.style.display = 'block';
});
// show login modal five seconds time when user visit page and not login
if (getFromStorage('Users').length === 0) {
  setTimeout(() => {
    signInModal.style.display = 'block';
  }, 5000);
}
// show register modal
document.getElementById('sign-up-btn').addEventListener('click', () => {
  signInModal.style.display = 'none';
  signUpModal.style.display = 'block';
});
// close sign in modal
document.getElementById('modal-close-btn1').addEventListener('click', () => {
  signInModal.style.display = 'none';
});
document.getElementById('cancel-btn1').addEventListener('click', () => {
  signInModal.style.display = 'none';
});
// close register modal
document.getElementById('modal-close-btn2').addEventListener('click', () => {
  signUpModal.style.display = 'none';
});
document.getElementById('cancel-btn2').addEventListener('click', () => {
  signUpModal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === signInModal || event.target === signUpModal) {
    signInModal.style.display = 'none';
    signUpModal.style.display = 'none';
  }
};

/*
  Resgister user and login user by storing user data in the local storage of the browser
*/
const registerForm = document.getElementById('sign-up-form');
const loginForm = document.getElementById('sign-in-form');

// Register user
registerForm.addEventListener('submit', (event) => {
  const username = document.getElementById('username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const user = {
    username,
    email,
    password,
  };
  const errorContainer = document.getElementById('error-message2');
  // addToStorage("User" ,data)
  const errors = [];
  const users = getFromStorage('Users');
  if (users.length === 0) {
    users.push(user);
    addToStorage('Users', users);
    return;
  }
  // check if user already exist or not
  users.forEach((user) => {
    if (user.username === username) {
      errors.push('Username areadly exist');
      event.preventDefault();
    } else if (user.email === email) {
      errors.push('Email address areadly exist');
      event.preventDefault();
    }
  });
  // add user if there is no error
  if (errors.length === 0) {
    users.push(user);
    addToStorage('Users', users);
  } else {
    event.preventDefault();
    const [errorMessage] = errors;
    errorContainer.innerHTML = errorMessage;
    // hide error message five seconds time
    setTimeout(() => {
      errorContainer.innerHTML = '';
    }, 5000);
  }
});
// Login user
loginForm.addEventListener('submit', (event) => {
  const errors = [];
  const errorContainer = document.getElementById('error-message1');
  const users = getFromStorage('Users');
  if (users.length === 0) {
    errors.push('Email address do not exit, please register');
  }
  // add user if there is no error
  if (errors.length !== 0) {
    event.preventDefault();
    const [errorMessage] = errors;
    errorContainer.innerHTML = errorMessage;
    // hide error message five seconds time
    setTimeout(() => {
      errorContainer.innerHTML = '';
    }, 5000);
  }
});
// get user from local storage when page loads
const User = getFromStorage('Users');
const signInText1 = document.getElementById('sign-in-btn1');
const signInText2 = document.getElementById('sign-in-btn2');
if (User.length > 0) {
  document.getElementById('user-page1').innerHTML = `<i class="bi bi-person-circle"></i>${User[0].username}`;
  document.getElementById('user-page2').innerHTML = `<i class="bi bi-person-circle"></i>${User[0].username}`;
  signInText1.innerHTML = 'Logout<i class="bi bi-arrow-left-square"></i>';
  signInText2.innerHTML = 'Logout<i class="bi bi-arrow-left-square"></i>';
  signInText1.id = '';
  signInText2.id = '';
  signInText1.href = 'index.html';
  signInText2.href = 'index.html';
}