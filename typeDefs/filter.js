const { gql } = require('apollo-server-express');

module.exports = gql`

    enum Operation {
        EQ
        NE
    }

    input FilterInput {
        op: Operation!
        value: String!
        field: String!
    }
`;
