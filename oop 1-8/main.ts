// class Circle {
// 	private radius: number;
// 	private color: string;

// 	constructor(radius:number) {
// 		this.radius = radius;
// 		this.color = "red";
// 	}

// 	public get Radius(): number {
// 		return this.radius;
// 	}

// 	public getArea(): number {
// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// }

class Circle {
	private radius: number;

	constructor(radius: number) {
		this.radius = radius;
	}

	public get Radius(): number {
		return this.radius;
	}

	public set Radius(radius: number) {
		this.radius = radius;
	}

	public getArea(): number {
		return Math.PI * Math.pow(this.radius, 2);
	}
	public getCircumference(): number {
		return 2 * Math.PI * this.radius;
	}

	public toString() {
		return `Circle[radius= ${this.radius}]`;
	}
}

class Rectangle {
	private length: number;
	private width: number;

	constructor(length: number, width: number) {
		this.length = length;
		this.width = width;
	}

	public get Length(): number {
		return this.length;
	}

	public set Length(length: number) {
		this.length = length;
	}

	public get Width(): number {
		return this.width;
	}

	public set Width(width: number) {
		this.width = width;
	}

	public getArea(): number {
		return this.length * this.width;
	}
	public getPerimeter(): number {
		return 2 * (this.width * this.length);
	}

	public toString() {
		return `Rectangle[length= ${this.length},width= ${this.width}]`;
	}
}

class Employee {
	private id: number;
	private firstName: string;
	private lastName: string;
	private salary: number;

	constructor(id: number, firstName: string, lastName: string, salary: number) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.salary = salary;
	}

	public get Id(): number {
		return this.id;
	}

	public get FirstName(): string {
		return this.firstName;
	}
	public get LastName(): string {
		return this.lastName;
	}
	public getName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	public get Salary(): number {
		return this.salary;
	}
	public set Salary(salary: number) {
		this.salary = salary;
	}

	public getAnnualSalary(): number {
		return this.salary * 12;
	}
	public raiseSalary(percent: number): number {
		return (this.salary += (this.salary * percent) / 100);
	}

	public toString() {
		return `Employee[id= ${this.id},name= ${this.getName},salary=${this.Salary}]`;
	}
}

class InvoiceItem {
	private id: string;
	private desc: string;
	private qty: number;
	private unitPrice: number;

	constructor(id: string, desc: string, qty: number, unitPrice: number) {
		this.id = id;
		this.desc = desc;
		this.qty = qty;
		this.unitPrice = unitPrice;
	}

	public get Id(): string {
		return this.id;
	}
	public get Desc(): string {
		return this.desc;
	}
	public get Qty(): number {
		return this.qty;
	}
	public set Qty(qty: number) {
		this.qty = qty;
	}
	public get UnitPrice(): number {
		return this.unitPrice;
	}
	public set UnitPrice(unitPrice: number) {
		this.unitPrice = unitPrice;
	}

	public getTotal(): number {
		return this.unitPrice * this.qty;
	}

	public toString() {
		return `InvoiceItem[id= ${this.id},dec= ${this.desc},qty=${this.qty},unitPrice=${this.unitPrice}]`;
	}
}

class Account {
  private id: string;
  private name: string;
  private balance: number = 0;


  constructor(id: string, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;

  }

  public getId(): string {
      return this.id;
  }

  public getName(): string {
      return this.name;
  }

  public getBalance(): number {
      return this.balance;
  }

  public credit(amount: number): number {
      this.balance += amount;
      return this.balance;
  }

  public debit(amount: number): number {
      if (amount <= this.balance) {
          this.balance -= amount;
      } else {
          console.log("Amount exceeded balance");
      }
      return this.balance;
  }

  public transferTo(another: Account, amount: number): number {
      if (amount <= this.balance) {
          this.balance -= amount;
          another.credit(amount);
      } else {
          console.log("Amount exceeded balance");
      }
      return this.balance;
  }

  public toString(): string {
      return `Account[id=${this.id},name=${this.name},balance=${this.balance}]`;
  }
}

class DateClass {
  private day: number;
  private month: number;
  private year: number;

  constructor(day: number, month: number, year: number) {
      this.day = day;
      this.month = month;
      this.year = year;
  }

  public getDay(): number {
      return this.day;
  }

  public getMonth(): number {
      return this.month;
  }

  public getYear(): number {
      return this.year;
  }

  public setDay(day: number): void {
      this.day = day;
  }

  public setMonth(month: number): void {
      this.month = month;
  }

  public setYear(year: number): void {
      this.year = year;
  }

  public setDate(day: number, month: number, year: number): void {
      this.day = day;
      this.month = month;
      this.year = year;
  }

  public toString(): string {
      const pad = (num: number): string => num.toString().padStart(2, '0');
      return `${pad(this.day)}/${pad(this.month)}/${this.year}`;
  }
}


class Time {
  private hour: number;
  private minute: number;
  private second: number;

  constructor(hour: number, minute: number, second: number) {
      this.hour = hour;
      this.minute = minute;
      this.second = second;
  }

  public getHour(): number {
      return this.hour;
  }

  public getMinute(): number {
      return this.minute;
  }

  public getSecond(): number {
      return this.second;
  }

  public setHour(hour: number): void {
      this.hour = hour;
  }

  public setMinute(minute: number): void {
      this.minute = minute;
  }

  public setSecond(second: number): void {
      this.second = second;
  }

  public setTime(hour: number, minute: number, second: number): void {
      this.hour = hour;
      this.minute = minute;
      this.second = second;
  }

  public toString(): string {
      const pad = (num: number): string => num.toString().padStart(2, '0');
      return `${pad(this.hour)}:${pad(this.minute)}:${pad(this.second)}`;
  }

  public nextSecond(): Time {
      this.second++;
      if (this.second === 60) {
          this.second = 0;
          this.minute++;
          if (this.minute === 60) {
              this.minute = 0;
              this.hour++;
              if (this.hour === 24) {
                  this.hour = 0;
              }
          }
      }
      return this;
  }

  public previousSecond(): Time {
      this.second--;
      if (this.second === -1) {
          this.second = 59;
          this.minute--;
          if (this.minute === -1) {
              this.minute = 59;
              this.hour--;
              if (this.hour === -1) {
                  this.hour = 23;
              }
          }
      }
      return this;
  }
}
