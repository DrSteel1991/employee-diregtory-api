module.exports.applyFilter = (arr, filter) => {
    let field = filter.field;
    let value = filter.value.toLowerCase();
    if (field === 'dep_id') {
        value = parseInt(value)
        return arr.filter(o => o[field] === value); 
    }
    if (filter.op === 'LIKE') {
        return arr.filter(o => o[field].toLowerCase().includes(value));
    }
    return arr.filter(o => o[field].toLowerCase() === value);
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