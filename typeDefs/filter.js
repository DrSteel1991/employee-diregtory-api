const { gql } = require('apollo-server-express');

module.exports = gql`

    enum Operation {
        LIKE
        EQ
    }

    input FilterInput {
        op: Operation!
        value: String!
        field: String!
    }
`;
