let departments = {}; //this is an empty object

let highestSaleMonth = {      
    "name": "",
    "monthlySales": 0,
    "department": ""
};
let highestSaleYear = {           
    "name": "",
    "yearlySales": 0,
    "department": ""
};

fetch('data/employees.json')
    .then(response => response.json())
    .then(data => {



        // Organize employees into departments
        for (let i = 0; i < data.length; i++) {
            const emp = data[i]; // get employee data
            const empDepartment = emp.department

            // Check if the department already exists in the departments object
            if (!departments[empDepartment]) {

                // if the department doesn't exist, create one
                departments[empDepartment] = [];
            }
            departments[empDepartment].push(emp);
        }

        console.log(departments)

        // Get the container where we will append the tables
        const deptContainer = document.getElementById("Departments");

        // Loop through each department
        for (let dept in departments) {
                // Create a department div
                const deptDiv = document.createElement("div");
                deptDiv.classList.add("w3-white", "w3-padding", "w3-margin-bottom");

                // Create a table
                let tableHTML = `<h2 class='w3-text-blue'>${dept}</h2>
                                    <table class="w3-table w3-bordered w3-striped w3-hoverable">
                                        <tr class="w3-light-grey">
                                            <th>Name</th>
                                            <th>Monthly Sales</th>
                                            <th>Yearly Sales</th>
                                        </tr>`;

                // Loop through employees in the department
                for (let j = 0; j < departments[dept].length; j++) {
                    let emp = departments[dept][j];

                    if(emp.monthlySales > highestSaleMonth.monthlySales){
                        highestSaleMonth = emp;
                    }

                    if(emp.yearlySales > highestSaleYear.yearlySales){
                        highestSaleYear = emp;
                    }


                    tableHTML += `
                                    <tr>
                                    <td>${emp.name}</td>
                                    <td>${emp.monthlySales !== null ? `&euro; ${emp.monthlySales}` : "N/A"}</td>
                                    <td>${emp.yearlySales !== null ? `&euro; ${emp.yearlySales}` : "N/A"}</td>
                                    </tr>`;
                }

                tableHTML += `</table>`; // Close table

                // Add table to department div
                deptDiv.innerHTML = tableHTML;

                // Append department div to the container
                deptContainer.appendChild(deptDiv);
        }
        // Display highest sales
        document.getElementById("highestSaleMonth").innerText = `
                ${highestSaleMonth.name} - ${highestSaleMonth.department} - ${highestSaleMonth.monthlySales}
                `;

        document.getElementById("highestSaleYear").innerText = `
                ${highestSaleYear.name} - ${highestSaleYear.department} - ${highestSaleYear.yearlySales}
                `;
    })
    .catch(error => console.error('Error loading the data:', error));