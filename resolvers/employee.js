const { employees } = require('../constants');

module.exports = {
    Query: {
        employees: (_, { first = 50, after = 0 }) => {
            const index = employees.map(m => m.id).indexOf(after) + 1
            const totalCount = employees.length	
            const edges = employees.slice(index, index + first).map(m => ({
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
        employee: (_, { id }) => employees.find(employee => employee.id === id),
    },
    Mutation: {
        addEmployee: (_, {input }) => {
            const employee = {...input, id: employees.length + 1};
            employees.push(employee);
            return employee;
        },
        updateEmployee: (_, { input }) => {
            const employee = employees.findIndex(x => x.id === input.id);
            employees[employee] = input;
            return employees[employee];
        },
        deleteEmployee: (_, { id }) => {
            employees.filter((employee) => {
                return employee.id !== id;
            });
            return `Employee with id ${id} has been deleted`;
        },
    }
}