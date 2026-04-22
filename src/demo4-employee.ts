export class Employee {
    private _id: number;
    private _name: string;
    private _salary: number;
    private _performance: string;
    private static _companyName: string;

    constructor(id: number, name: string, salary: number, performance: string) {
        this._id = id;
        this._name = name;
        this._salary = salary;
        this._performance = performance
    }

    public printEmployeeDetails(): void {
        console.log(this._id);
        console.log(this._name);
        console.log(this._salary);
        console.log(this._performance);
        console.log(Employee._companyName)

    }

    public static printCompanyName(): void {
        console.log(Employee._companyName)
    }

    //setter
    public static setCompanyName(companyName: string): void {
        Employee._companyName = companyName;
    }

    //getter
    public static getCompanyName(): string {
        return Employee._companyName;
    }

    public setName(name: string): void {
        this._name = name;
    }

    public async getHelloFromEmployee(): Promise<string> {
        return new Promise<string>(function (resolve) {
            resolve("connect to db and takes 10 mins and return")
        })
    }

    public static getEmployeeInstance(): Employee {
        let emp: Employee = new Employee(0, "", 0, "");
        return emp;
    }
}


