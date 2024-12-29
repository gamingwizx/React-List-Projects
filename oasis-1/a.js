const totalPages = 10;
const currentPage = 1;
const visibleRange = 5;

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

console.log(createPaginationSystem(totalPages, 1, visibleRange))
console.log(createPaginationSystem(totalPages, 4, visibleRange))
console.log(createPaginationSystem(totalPages, 6, visibleRange))
console.log(createPaginationSystem(totalPages, 8, visibleRange))
console.log(createPaginationSystem(totalPages, 9, visibleRange))
console.log(createPaginationSystem(totalPages, 10, visibleRange))