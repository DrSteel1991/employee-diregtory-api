const { departments, employees } = require('../constants');
const { applyFilter, returnConnection } = require('./helpers');

module.exports = {
    Query: {
        departments: (_, { filter, first = 50, after = 0 }) => {
            if (filter) {
                filteredArray = applyFilter(departments, filter)
                return returnConnection(filteredArray, first, after)
            }
            return returnConnection(departments, first, after)	
        },
        department: (_, { id }) => departments.find(department => department.id === id)
    },
    Department: {
        employees: ({ id }, {filter, first = 50, after = 0}) => {
            const filtertedEmployees = employees.filter(employee => employee.dep_id === id);
            if (filter) {
                filteredArray = applyFilter(filtertedEmployees, filter)
                return returnConnection(filteredArray, first, after)
            }
            return returnConnection(filtertedEmployees, first, after)
        }
    }
}