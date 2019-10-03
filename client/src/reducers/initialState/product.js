export default {
	list: immutable.fromJS([]), 
    brandId: '', 
    pagination: immutable.fromJS({
        startPage: 1, 
        totalPages: 1, 
        visiblePages: 5, 
        limit: 10, 
    }), 
}