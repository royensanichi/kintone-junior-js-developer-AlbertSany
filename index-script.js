(() => {
  const API_URL = 'http://localhost:3000/employees';

  async function fetchData() {
    return fetch(API_URL).then((response) => response.json());
  }

  function registerDeleteButton() {
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', async (event) => {
        const id = event.target.getAttribute('data-id');
        await fetch(`${API_URL}/${id}`, {
          method: 'DELETE',
        });

        const data = await fetchData();
        displayToTable(data);
      });
    });
  }

  function displayToTable(data) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    data.forEach((employee) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td><button class="btn-delete" data-id="${employee.id}">delete</button></td>
      `;
      tableBody.appendChild(tr);
    });

    registerDeleteButton();
  }

  async function filterByName(event) {
    const name = event.target.value;
    const data = await fetchData();

    const filteredData = data.filter((employee) => {
      return employee.name.toLowerCase().includes(name.toLowerCase());
    });

    displayToTable(filteredData);
  }

  // Function to fetch and display data
  document.addEventListener('DOMContentLoaded', async () => {
    const data = await fetchData();

    displayToTable(data);
  });

  document.getElementById('filter-name').addEventListener('input', filterByName);
})();
