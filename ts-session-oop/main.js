// class Employee {
// 	private id: number;
// 	private firstName: string;
// 	private lastName: string;
// 	private salary: number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, address) {
        this.name = name;
        this.address = address;
    }
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Address", {
        get: function () {
            return this.address;
        },
        set: function (address) {
            this.address = address;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.toString = function () {
        return " Person[ name= ".concat(this.name, ", address= ").concat(this.address, "]");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, address, program, year, fee) {
        var _this = _super.call(this, name, address) || this;
        _this.program = program;
        _this.year = year;
        _this.fee = fee;
        return _this;
    }
    Object.defineProperty(Student.prototype, "Program", {
        get: function () {
            return this.program;
        },
        set: function (program) {
            this.program = program;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Year", {
        get: function () {
            return this.year;
        },
        set: function (year) {
            this.year = year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "Fee", {
        get: function () {
            return this.fee;
        },
        set: function (fee) {
            this.fee = fee;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.toString = function () {
        return "Student [".concat(_super.prototype.toString, ", program= ").concat(this.program, ", year=").concat(this.year, ", fee=").concat(this.fee, "]");
    };
    return Student;
}(Person));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, address, school, pay) {
        var _this = _super.call(this, name, address) || this;
        _this.school = school;
        _this.pay = pay;
        return _this;
    }
    Object.defineProperty(Staff.prototype, "School", {
        get: function () {
            return this.school;
        },
        set: function (school) {
            this.school = school;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "Pay", {
        get: function () {
            return this.pay;
        },
        set: function (pay) {
            this.pay = pay;
        },
        enumerable: false,
        configurable: true
    });
    Staff.prototype.toString = function () {
        return "Staff [".concat(_super.prototype.toString, ", school= ").concat(this.school, ", pay=").concat(this.pay, "]");
    };
    return Staff;
}(Person));
