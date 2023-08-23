// Function to fetch data from the API
async function fetchData() {
    try {
      const response = await fetch('https://reqres.in/api/users?delay=3');
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  // Function to render user data
  function renderUserData(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear existing content
  
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('col-md-4', 'mb-4');
      userCard.innerHTML = `
        <div class="card">
          <img src="${user.avatar}" alt="User Avatar" class="card-img-top rounded-image">
          <div class="card-body">
            <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
            <p class="card-text">${user.email}</p>
          </div>
        </div>
      `;
      userList.appendChild(userCard);
    });
  }
  
  document.getElementById('updateButton').addEventListener('click', async () => {
    const users = await fetchData();
    renderUserData(users);
  });
  
  // Fetch data and render it initially
  fetchData().then(users => {
    renderUserData(users);
  });