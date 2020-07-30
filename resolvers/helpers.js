module.exports.applyFilter = (arr, filter) => {
    const field = filter.field;
    const value = filter.value;
    if (filter.op === 'EQ') {
        return arr.filter(o => o[field] === value);
    }
    return arr.find(o => o[field] === value);
} 

module.exports.returnConnection = (arr, first, after) => {
    const index = arr.map(m => m.id).indexOf(after) + 1
    const totalCount = arr.length	
    const edges = arr.slice(index, index + first).map(m => ({
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