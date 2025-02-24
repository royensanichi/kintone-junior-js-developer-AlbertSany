# **Kintone Developer Screening Test: Employee Management (Vanilla JS, HTML, CSS)**  

## **✫ Instructions for Candidates**  

Welcome to this screening test! You will build a simple **Employee Management System** using **Vanilla JavaScript**, **HTML**, and **CSS**. This system will allow users to **view**, **add**, and **manage employees** using `JSON Server`.  

---

## **🛠 Setup Instructions**  

### **1. Install JSON Server**  
Before running the project initiate the npm then install `json-server` globally using:  
```sh
npm install -g json-server
```


### **2. Start JSON Server**  
Run the following command to start the JSON server:  
```sh
json-server --watch db.json --port 3000
```
This will create a local API at:  
**🔗 `http://localhost:3000/employees`**  

---

## **📁 Project Structure**  

You have been given an empty `index.html`, `style.css`, and a `script.js` file with only the API URL defined.  

```
/project-folder
│── index.html   (Empty HTML file)
│── style.css    (Empty CSS file)
│── script.js    (Contains API_URL only)
│── db.json      (Contains employee data)
```

**📈 Your task is to build the full implementation** inside these files.  

---

## **📚 Task Breakdown**  

### **1. HTML (`index.html`)**  
- Create a **simple form** with input fields for:
  - `Name`
  - `Position`
  - A submit button.
- Add a **table** below the form to display employees.

### **2. CSS (`style.css`)**  
- Style the form and table to make it visually appealing.
- Ensure the table is well-structured.

### **3. JavaScript (`script.js`)**  
Implement the following functions inside `script.js`:

#### ✅ **Fetch & Display Employees**  
- Fetch data from `http://localhost:3000/employees`
- Display the data inside the table.

#### ✅ **Add Employee**  
- Capture user input from the form.
- Send a `POST` request to `JSON Server` to save the new employee.
- Update the table dynamically **without reloading**.

#### ✅ **(Bonus) Delete Employee**  
- Add a delete button to remove an employee from the JSON Server.

---

## **📊 Example API Data (`db.json`)**  
Your `db.json` should be structured like this:
```json
{
  "employees": [
    { "id": "a1b2", "name": "Alice", "position": "Developer" },
    { "id": "c3d4", "name": "Bob", "position": "Designer" }
  ]
}
```

## **📄 Submission Instructions**  
1️⃣ Complete the implementation.  
2️⃣ Create a public GitHub repository with format "screening-test-[nama-anda]".

3️⃣ Send the link to the repository via email to bella@aqi.co.id and cc to aulya.khatulistivani@aqi.co.id, taufiqurahman.alghani@aqi.co.id & muhamad.rifaldi@aqi.co.id with title [Nama-anda]-Kintone-AQI

**Good luck! 🍀**   

# kintone-junior-dev-test
