const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query{
        companies(first: Int, after: Int): CompanyConnection
        company(id: Int!): Company
    }

    type Company {
        id: Int!
        name: String!
        website: String!
        locations(first: Int, after: Int): LocationConnection
    }

    type CompanyConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges:[CompanyEdge]
    }

    type CompanyEdge {
        cursor: Int
        node: Company
    }
`;