var IndexCompressor = {};
IndexCompressor.compress = function(data){
    var map = [];
    var newData = [];
    var keys = Object.keys(data[0]);
    data.forEach(function(row, rowIndex){
        var newRow = [];
        var index;
        for(var key in row){
            if(key == '_id' || typeof row[key] != 'string'){
                newRow.push(row[key]);
                continue;
            }
            if((index = map.indexOf(row[key])) && index != -1){
                newRow.push(''+index);
            }else{
                map.push(data[rowIndex][key]);
                newRow.push(''+(map.length-1));
            }
        }
        newData.push(newRow)
    });
    return {
        data : newData,
        map : map,
        keys : keys
    };
};
IndexCompressor.inflate = function(data){
    var newData = [];
    data.data.forEach(function(row, rowIndex){
        var newRow = {};
        data.keys.forEach(function(key, index){
            if(key === '_id' || typeof row[index] != 'string' || isNaN(parseInt(row[index]))){
                console.log(row[index], key === '_id', typeof row[index] != 'string', isNaN(parseInt(row[key])));
                newRow[key] = row[index];
            }else{
                newRow[key] = data.map[row[index]];
            }
        });
        newData.push(newRow);
    });
    return newData;
};
module.exports = IndexCompressor;