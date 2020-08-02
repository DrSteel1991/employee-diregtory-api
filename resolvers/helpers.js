module.exports.applyFilter = (arr, filter) => {
    const field = filter.field;
    const value = filter.value;
    if (filter.op === 'EQ') {
        return arr.filter(o => o[field] === value);
    }
    return arr.find(o => o[field] === value);
} 

module.exports.returnConnection = (arr, first, after) => {
    arr = arr.sort((a, b) => b.id - a.id )
    const totalCount = arr.length
    let edges = []
    let lastCursor = null
    let pageInfo = {}
    if (totalCount > 0) {
        edges = arr.slice(after, after + first).map(m => ({
            cursor: m.id,
            node: { ...m }
        }))
        if (edges.length > 0) {
            lastCursor = edges[edges.length - 1].node.id
        }
        pageInfo = {
            lastCursor,
            hasNextPage: totalCount > first + after
        }
    }
    return {
        totalCount,
        pageInfo,
        edges
    }	
}