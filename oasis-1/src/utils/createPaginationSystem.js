const createPaginationSystem = (totalPages, currentPage, visibleRange) => {
    const actualCurrentPage = currentPage > (totalPages - Math.floor(visibleRange / 2)) ? (totalPages - Math.floor(visibleRange / 2)) : currentPage  
    const startRange = Math.max(1, actualCurrentPage - Math.floor(visibleRange / 2))
    const endRange = Math.min(totalPages, startRange + visibleRange - 1)
    let pageRange = []
    for (var i = startRange; i <= endRange; i++) {
        pageRange.push(i)
    }

    return pageRange
}

export default createPaginationSystem