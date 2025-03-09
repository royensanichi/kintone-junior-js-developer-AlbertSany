(() => {
  const API_URL = 'http://localhost:3000/employees';
  
  // Redirect to the form page
  function goToForm() {
    window.location.href = 'form.html';
  }

  // Fetch employee data from db.json
  async function fetchEmployees() {
    try {
      const response = await fetch(API_URL);
      const employees = await response.json();
      displayTable(employees);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }

  // Filter employees by name
  function filterEmployees() {
    const searchValue = document.getElementById('filter').value.toLowerCase();

    fetch(API_URL)
      .then(response => response.json())
      .then(employees => {
        const filtered = employees.filter(employee =>
          employee.name.toLowerCase().includes(searchValue)
        );
        displayTable(filtered);
      })
      .catch(error => console.error('Error', error));
  }

  // Display employees in the table
  function displayTable(employees) {
    const tableBody = document.getElementById('employee-table');
    tableBody.innerHTML = employees.map(employee =>
      `
        <tr>
          <td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.position}</td>
          <td><button class="delete-btn" data-id="${employee.id}">Delete</button></td>  
        </tr>
      `)
      .join('');

    document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', () => {
        const employeeId = button.getAttribute('data-id');
        deleteEmployee(employees, employeeId);
      });
    });
  }

  // Delete employee (Bonus)
  async function deleteEmployee(employees, id) {
    const employee = employees.find(emp => emp.id === id);
    if (!employee) {
      alert("Employee not found!");
      return;
    }

    const isConfirmed = confirm(`delete this employee ? Name: ${employee.name} - ID: ${id}`);
  if (!isConfirmed) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchEmployees(); // Refresh after delete
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  }

  // Event listeners
  document.addEventListener('DOMContentLoaded', fetchEmployees);
  document.getElementById('filter').addEventListener('input', filterEmployees);
  document.getElementById('add-employee-btn-form').addEventListener('click', goToForm);
})();
