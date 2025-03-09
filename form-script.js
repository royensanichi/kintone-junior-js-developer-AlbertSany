(() => {
  const API_URL = 'http://localhost:3000/employees';

 // Generate random 10-character alphanumeric ID
 const generateId = () => Math.random().toString(36).slice(2, 12);

// Function to add new employee
const addEmployee = async (event) => {
  event.preventDefault();

  // get form values
  const name = document.getElementById("nameEmployee").value.trim();
  const position = document.getElementById("positionEmployee").value.trim();

  if (!name || !position || name.trim() === "" || position.trim() === "" ) {
    alert("Please fill in all fields and avoid starting with a space");
    return;
  }

  const newEmployee = {
    id: generateId(),
    name: name,
    position: position
  };

  try {
    // Send POST request to JSON Server
    const isConfirmed = confirm(`add ${name} - ${position} as an employee ?`);
    if (!isConfirmed) return;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee)
    });

    if (!response.ok) throw new Error("Failed to add employee");

    alert("Employee added successfully!");
    redirectToIndex(); // Redirect after success

  } catch (error) {
    console.error("Error adding employee:", error);
    alert("Error adding employee. Please try again.");
  }
};

  const redirectToIndex = () => {
    window.location.href = "index.html";
  };

  document.getElementById("employee-form").addEventListener("submit", addEmployee);

})();
