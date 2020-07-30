const { companies, departments } = require('../constants');
const { applyFilter, returnConnection } = require('./helpers');

module.exports = {
    Query: {
        companies: (_, { filter, first = 50, after = 0 }) => {
            if (filter) {
                filteredArray = applyFilter(companies, filter)
                return returnConnection(filteredArray, first, after)
            }
            return returnConnection(companies, first, after)	
        },
        company: (_, { id }) => companies.find(company => company.id === id)
    },
    Company: {
        departments: ({ id }, {filter, first = 50, after = 0}) => {
            const filtertedDepartments = departments.filter(department => department.company_id === id)
            if (filter) {
                filteredArray = applyFilter(filtertedDepartments, filter)
                return returnConnection(filteredArray, first, after)
            }
            return returnConnection(filtertedDepartments, first, after)	
        }
    }
}