const obj = {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"};

for(o in obj) {
    console.log(o);
}

// implement forEach method

const _ = {};

_.each = function(list, callback){

    //check if list is array or object

    if(Array.isArray(list)){

        //here the list is an array
        for(let i = 0; i < list.length; i++) {
            callback(list[i],i,list);
        }

    }else{

        //here the array is an object
        for(let obj in list) {
            callback(list[obj],obj,list);
        }
    }
}