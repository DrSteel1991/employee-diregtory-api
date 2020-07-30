const { companies, locations } = require('../constants');

module.exports = {
    Query: {
        companies: (_, { first = 50, after = 0 }) => {
            const index = companies.map(m => m.id).indexOf(after) + 1
            const totalCount = companies.length	
            const edges = companies.slice(index, index + first).map(m => ({
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
        company: (_, { id }) => companies.find(company => company.id === id)
    },
    Company: {
        locations: ({ id }, {first = 50, after = 0}) => {
            const filtertedLocations = locations.filter(location => location.companyId = id)
            const index = filtertedLocations.map(m => m.id).indexOf(after) + 1
            const totalCount = filtertedLocations.length	
            const edges = filtertedLocations.slice(index, index + first).map(m => ({
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