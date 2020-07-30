const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query{
        employees(first: Int, after: Int): EmployeeConnection
        employee(id: Int!): Employee
    }

    extend type Mutation {
        addEmployee(input: addEmployeeInput!): Employee
        updateEmployee(input: updateEmployeeInput!): Employee
        deleteEmployee(id: Int!) : String
    }

    input addEmployeeInput {
        name: String!
        email: String!
        jobTitle: String!
        age: Int!
        picture: String  
    }

    input updateEmployeeInput {
        id: Int!
        name: String!
        email: String!
        jobTitle: String!
        age: Int!
        picture: String  
    }

    type Employee {
        id: Int!
        name: String!
        email: String!
        jobTitle: String!
        age: Int!
        picture: String
    }

    type EmployeeConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges:[EmployeeEdge]
    }

    type EmployeeEdge {
        cursor: Int
        node: Employee
    }

    type PageInfo {
        lastCursor: Int
        hasNextPage: Boolean
    }
`;