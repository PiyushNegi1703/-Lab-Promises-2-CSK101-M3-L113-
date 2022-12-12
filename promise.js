const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
// Progression 2: using setTimeout() -- use 1000 units for time parameter
function getCookies() {
  setTimeout(() => {
    let output = '';

    for (i = 0; i < cookies.length; i++) {
      output += `<li> ${cookies[i].name} </li>`;
    }

    document.body.innerHTML = output;
  }, 1000);
}

//Progression 3: Create a function to create cookies and create an object of Promise.

// Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter

// Progression 5: handling errors and adding new cookie to the list
function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newCookie.name != '') {
        resolve(cookies.push(newCookie));
      } else {
        reject("The Object newCookie can't be empty");
      }
    }, 2000);
  });
}

// Progression 6: call function using `.then`
createCookie(newCookie)
  .then(() => {
    console.log('The newCookie has been added to cookies');
    return getCookies();
  })
  .catch((message) => {
    console.log(message);
  });
