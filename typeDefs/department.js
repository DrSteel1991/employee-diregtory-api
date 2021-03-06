const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query{
        departments(filter: FilterInput, first: Int, after: Int): DepartmentConnection
        department(id: Int!): Department
    }

    type Department {
        id: Int!
        name: String!
        employees(filter: FilterInput, first: Int, after: Int): EmployeeConnection
    }

    type DepartmentConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges:[DepartmentEdge]
    }

    type DepartmentEdge {
        cursor: Int
        node: Department
    }
`;