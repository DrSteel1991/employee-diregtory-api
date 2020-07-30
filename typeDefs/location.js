const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query{
        locations(first: Int, after: Int): LocationConnection
        location(id: Int!): Location
    }

    type Location {
        id: Int!
        name: String!
    }

    type LocationConnection {
        totalCount: Int
        pageInfo: PageInfo
        edges:[LocationEdge]
    }

    type LocationEdge {
        cursor: Int
        node: Employee
    }
`;