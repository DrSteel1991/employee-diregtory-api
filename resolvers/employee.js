const { employees, departments } = require('../constants');
const { applyFilter, returnConnection } = require('./helpers');

module.exports = {
    Query: {
        employees: (_, { filter, first = 50, after = 0 }) => {
            try {
                if (filter) {
                    filteredArray = applyFilter(employees, filter)
                    return returnConnection(filteredArray, first, after)
                }
                return returnConnection(employees, first, after)
            } catch (error) {
                throw new Error(error)
            }
        },
        employee: (_, { id }) => employees.find(employee => employee.id === id),
    },
    Mutation: {
        addEmployee: (_, {input }) => {
            try {
                const employee = {...input, id: employees.length + 1}
                employees.push(employee)
                return employee
            } catch (error) {
                throw new Error(error)
            }
        },
        updateEmployee: (_, { input }) => {
            try {
                const index = employees.findIndex(x => x.id === input.id)
                var employee = employees.filter(x => x.id === input.id)
                console.log(index)
                const keys = Object.keys(input)
                keys.forEach(element => {
                    employee[0][element] = input[element];
                })
                return employees[index]
            } catch (error) {
                throw new Error(error)
            }
        },
        deleteEmployee: (_, { id }) => { 
            try {
                employees.filter((employee) => {
                    return employee.id !== id;
                });
                return `Employee with id ${id} has been deleted`
            } catch (error) {
                throw new Error(error)
            }
        },
    },
    Employee: {
        department: ({ dep_id }) => departments.find(department => department.id === dep_id)
    }
}