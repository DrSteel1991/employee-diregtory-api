const companyTypeDefs = require('./company');
const departmentTypeDefs = require('./department');
const employeeTypeDefs = require('./employee');
const { gql } = require('apollo-server-express');

const  typeDefs = gql`
    type Query {
        _: String
    }

    type Mutation {
        _: String
    }
`;

module.exports = [
    typeDefs,
    companyTypeDefs,
    departmentTypeDefs,
    employeeTypeDefs
]