const { departments, employees } = require('../constants');

module.exports = {
    Query: {
        departments: (_, { first = 50, after = 0 }) => {
            const index = departments.map(m => m.id).indexOf(after) + 1
            const totalCount = departments.length	
            const edges = departments.slice(index, index + first).map(m => ({
                cursor: m.id,
                node: { ...m }
            }))
            const lastCursor = edges[edges.length - 1].node.id
            const pageInfo = {
                lastCursor,
                hasNextPage: totalCount + first > lastCursor + first
            }
            
            return {
                totalCount,
                pageInfo,
                edges
            }	
        },
        department: (_, { id }) => departments.find(department => department.id === id)
    },
    Department: {
        employees: ({ id }, {first = 50, after = 0}) => {
            const filtertedEmployees = employees.filter(employee => employee.dep_id === id);
            console.log(id);
            const index = filtertedEmployees.map(m => m.id).indexOf(after) + 1
            const totalCount = filtertedEmployees.length	
            const edges = filtertedEmployees.slice(index, index + first).map(m => ({
                cursor: m.id,
                node: { ...m }
            }))
            const lastCursor = edges[edges.length - 1].node.id
            const pageInfo = {
                lastCursor,
                hasNextPage: totalCount + first > lastCursor + first
            }
            
            return {
                totalCount,
                pageInfo,
                edges
            }	
        }
    }
}