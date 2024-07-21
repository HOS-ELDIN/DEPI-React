class Employee {
	constructor(name, salary, position, task) {
		this.name = name;
		this.salary = salary;
		this.position = position;
		this.task = task;
	}
}

class EmployeeUi {
	static addEmployeeIntoTable(Employee) {
		const tbody = document.querySelector("tbody");
		const row = document.createElement("tr");
		row.innerHTML = `
            <td>${Employee.name}</td>
            <td>${Employee.salary}</td>
            <td>${Employee.position}</td>
            <td>${Employee.task}</td>
            <td>
                <a class="btn btn-danger btn-sm delete" href="#">delete</a>
                <a class="btn btn-warning btn-sm update" href="#">update</a>
            </td>
        `;
		tbody.appendChild(row);
	}

	static showMessages(textMessage, clsName) {
		const div = document.createElement("div");
		div.className = `alert alert-${clsName}`;
		div.appendChild(document.createTextNode(textMessage));
		const formSection = document.querySelector(".form-section");
		const form = document.querySelector("form");
		formSection.insertBefore(div, form);

		setTimeout(() => {
			document.querySelector(".alert").remove();
		}, 4000);
	}

	static deleteEmployee(element) {
		if (element.classList.contains("delete")) {
			const confirm = window.confirm("Are You Sure ? ");
			if (confirm) {
				EmployeeUi.element.parentElement.parentElement.remove();
				EmployeeUi.showMessages("Employee Deleted Successfully", "warning");
			}
		}
	}

	static updateEmployee(element, updatedEmployee) {
		if (element.classList.contains("update")) {
			if (confirm) {
				element.parentElement.parentElement.remove();
				EmployeeUi.addEmployeeIntoTable(updatedEmployee);
				EmployeeUi.showMessages("Employee updated Successfully", "warning");
			}
		}
	}
}

const form = document.querySelector("#my-form");
form.addEventListener("submit", function (event) {
	event.preventDefault();
	const myForm = document.querySelector("#my-form");

	const formData = new FormData(myForm);

	const employeeData = {};
	formData.forEach((value, key) => {
		employeeData[key] = value;
	});

	console.log(employeeData);

	if (
		!employeeData.name ||
		!employeeData.salary ||
		!employeeData.position ||
		!employeeData.task
	) {
		//alert("All Input Are Required !")
		EmployeeUi.showMessages("All Inputs Are Required", "danger");
	} else if (employeeData.salary < 1800) {
		//alert("Price Must be at least 800 L.E ")
		EmployeeUi.showMessages("Price Must be at least 1800 L.E ", "danger");
	} else {
		// Take An Object from Employee
		const EmployeeObj = new Employee(...Object.values(employeeData));
		// Add Employee Into Table
		EmployeeUi.addEmployeeIntoTable(EmployeeObj);
		// Reset Inputs
		myForm.reset();
		// Show Success Message
		EmployeeUi.showMessages("Employee Added Successfully", "success");
	}
});

// Delete Employee
document.querySelector("tbody").addEventListener("click", (event) => {
	console.log(event.target);
	EmployeeUi.deleteEmployee(event.target);
});
// update Employee
// document.querySelector("tbody").addEventListener("click", (event) => {
// 	console.log(event.target);

// 	EmployeeUi.updateEmployee(event.target,);
// });
