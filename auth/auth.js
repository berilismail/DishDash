const inputUser = document.getElementById('username');
const inputPass = document.getElementById('password');
const loginForm = document.getElementById('loginForm');
const logOutBtn = document.getElementById('logoutBtn');
// Login 
async function login(username, password) {
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, 
        }),
      });

      console.log(response);
      
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
  
      const data = await response.json();

      localStorage.setItem('authToken', data.token);

      return data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }
  
  // Logout
function logout() {
    localStorage.removeItem('authToken');
    alert('Logged out successfully.');
    inputUser.value = "";
    inputPass.value = "";
  }


  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = inputUser.value;
    const password = inputPass.value;
  
    try {
      const userData = await login(username, password);
      window.location.href = '../reviews/leaveReview.html'
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  });

 logOutBtn.addEventListener('click', logout);

 
  


  
  