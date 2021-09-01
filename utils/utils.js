function dataHandle(data) {
    let arr = JSON.parse(data);
    arr  = data.filter(item => {
        return item.parseInt(item.state) === 0
        
    });
    console.log(arr);
    return arr 
}
module.exports = {
    dataHandle
}