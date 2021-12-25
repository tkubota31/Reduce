//extractValue
function extractValue(arr , key){
    return arr.reduce(function(accum, nextValue){
        accum.push(nextValue[key]);
    },[]);
}

//vowelCount
function vowelCount(str){
    let vowels = "aeiou";
    let newStr = str.split('').toUpperCase();
    return newStr.reduce(function(acc, nextValue){
        if(vowels.indexOf(nextValue) !== -1)){
            if(acc[nextValue]){
                acc[nextValue]++;
            } else{
                acc[nextValue = 1;]
            }
        }
        return acc;
    }, {});
}

//addKeyAndValue
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next){
        acc[key] = value;
        return acc;
    },arr);
}

//partition
function partition(arr,callback){
    arr.reduce(function(accum,next){
        if (callback(next)){
            accum[0].push(next);
        } else {
            accum[1].push(next);
        }
        return accum;
    }, [[],[]]);
}
