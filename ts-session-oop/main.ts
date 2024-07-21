class Employee {
	private id: number;
	private firstName: string;
	private lastName: string;
	private salary: number;

	constructor(id: number, firstName: string, lastName: string, salary: number) {
		this.id;
		this.firstName;
		this.lastName;
		this.salary;
	}
  

	public get Id(): number {
		return this.id;
	}

	public set Id(id: number) {
		this.id = id;
	}
	public get FirstName(): string {
		return this.firstName;
	}

	public set FirstName(firstName: string) {
		this.firstName = firstName;
	}
	public get LastName(): string {
		return this.LastName;
	}

	public set LastName(lastName: string) {
		this.lastName = lastName;
	}

	public getName() {
		return `${this.firstName} ${this.lastName}`;
	}

	public get Salary(): number {
		return this.salary;
	}

	public set Salary(salary: number) {
		this.salary = salary;
	}

	public getAnnualSalary(): number {
		return this.Salary * 12;
	}

	public raiseSalary(percent: number) {
		return (this.Salary += this.salary * percent);
	}

	public toString() {
		return `
    Employee[id= ${this.id}, name= ${this.firstName} ${this.lastName}, salary= ${this.salary}]
    `;
	}
}
