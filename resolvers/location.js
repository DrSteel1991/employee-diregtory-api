const { locations } = require('../constants');

module.exports = {
    Query: {
        locations: (_, { first = 50, after = 0 }) => {
            const index = locations.map(m => m.id).indexOf(after) + 1
            const totalCount = locations.length	
            const edges = locations.slice(index, index + first).map(m => ({
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
        location: (_, { id }) => locations.find(location => location.id === id)
    }
}