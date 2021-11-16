const getTotal = (arr) => {
    const array = []
    arr.map(e => array.push(e._id.price * e.cantidad))
    return array.reduce((a ,c ) => a + c)
}

module.exports = getTotal