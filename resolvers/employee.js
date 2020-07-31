const { employees, departments } = require('../constants');
const { applyFilter, returnConnection } = require('./helpers');

module.exports = {
    Query: {
        employees: (_, { filter, first = 50, after = 0 }) => {
            if (filter) {
                filteredArray = applyFilter(employees, filter)
                return returnConnection(filteredArray, first, after)
            }
            return returnConnection(employees, first, after)
        },
        employee: (_, { id }) => employees.find(employee => employee.id === id),
    },
    Mutation: {
        addEmployee: (_, {input }) => {
            const employee = {...input, id: employees.length + 1}
            employees.push(employee)
            return employee
        },
        updateEmployee: (_, { input }) => {
            const index = employees.findIndex(x => x.id === input.id)
            var employee = employees.filter(x => x.id === input.id)
            console.log(index)
            const keys = Object.keys(input)
            keys.forEach(element => {
                employee[0][element] = input[element];
            })
            return employees[index]
        },
        deleteEmployee: (_, { id }) => {
            employees.filter((employee) => {
                return employee.id !== id;
            });
            return `Employee with id ${id} has been deleted`
        },
    },
    Employee: {
        department: ({ dep_id }) => departments.find(department => department.id === dep_id)
    }
}