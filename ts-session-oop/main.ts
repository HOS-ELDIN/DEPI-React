// class Employee {
// 	private id: number;
// 	private firstName: string;
// 	private lastName: string;
// 	private salary: number;

// 	constructor(id: number, firstName: string, lastName: string, salary: number) {
// 		this.id;
// 		this.firstName;
// 		this.lastName;
// 		this.salary;
// 	}

// 	public get Id(): number {
// 		return this.id;
// 	}

// 	public set Id(id: number) {
// 		this.id = id;
// 	}
// 	public get FirstName(): string {
// 		return this.firstName;
// 	}

// 	public set FirstName(firstName: string) {
// 		this.firstName = firstName;
// 	}
// 	public get LastName(): string {
// 		return this.LastName;
// 	}

// 	public set LastName(lastName: string) {
// 		this.lastName = lastName;
// 	}

// 	public getName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}

// 	public get Salary(): number {
// 		return this.salary;
// 	}

// 	public set Salary(salary: number) {
// 		this.salary = salary;
// 	}

// 	public getAnnualSalary(): number {
// 		return this.Salary * 12;
// 	}

// 	public raiseSalary(percent: number) {
// 		return (this.Salary += this.salary * percent);
// 	}

// 	public toString() {
// 		return `
//     Employee[id= ${this.id}, name= ${this.firstName} ${this.lastName}, salary= ${this.salary}]
//     `;
// 	}
// }

class Person {
	private name: string;
	private address: string;

	constructor(name: string, address: string) {
		this.name = name;
		this.address = address;
	}

	public get Name(): string {
		return this.name;
	}

	public set Name(name: string) {
		this.name = name;
	}

	public get Address(): string {
		return this.address;
	}

	public set Address(address: string) {
		this.address = address;
	}

	public toString() {
		return ` Person[ name= ${this.name}, address= ${this.address}]`;
	}
}

class Student extends Person {
	private program: string;
	private year: number;
	private fee: number;

	constructor(
		name: string,
		address: string,
		program: string,
		year: number,
		fee: number
	) {
		super(name, address);
		this.program = program;
		this.year = year;
		this.fee = fee;
	}

	public get Program(): string {
		return this.program;
	}

	public set Program(program: string) {
		this.program = program;
	}

	public get Year(): number {
		return this.year;
	}

	public set Year(year: number) {
		this.year = year;
	}

	public get Fee(): number {
		return this.fee;
	}

	public set Fee(fee: number) {
		this.fee = fee;
	}

	public toString(): string {
		return `Student [${super.toString}, program= ${this.program}, year=${
			this.year
		}, fee=${this.fee}]`;
	}
}

class Staff extends Person {
	private school: string;
	private pay: number;

	constructor(name: string, address: string, school: string, pay: number) {
		super(name, address);
		this.school = school;
		this.pay = pay;
	}

	public get School(): string {
		return this.school;
	}

	public set School(school: string) {
		this.school = school;
	}

	public get Pay(): number {
		return this.pay;
	}

	public set Pay(pay: number) {
		this.pay = pay;
	}

	public toString(): string {
		return `Staff [${super.toString}, school= ${this.school}, pay=${this.pay}]`;
	}
}
