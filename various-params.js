// for a given string tell me whether it has even number of characters or not

function evenSizedString(str){
    const strSize = str.length;
    if(strSize%2===0){
        return true;
    }else{
        return false;
    }
}

evenSizedString('Sikder');

// function e boolean, string, number, array, null, undefined, regular objects, even a funtion can be pass inside the function parameter