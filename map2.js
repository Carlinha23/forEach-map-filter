//function doubleValues(arr){
    //return arr.map(function(value){
        //returnvalue **2;
    //});
    
//}


function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val * 2);
    });
    return newArr;
  }

function onlyEvenValues(arr){
  let newArr = [];
   arr.forEach(function(val){
    if(val % 2 === 0) {
      newArr.push(val);
    }
  });

  return newArr;
}

function showFirstAndLast(arr){
  let newArr = [];
  arr.forEach(function(w) {
    newArr.push(w[0] + w[w.length -1]);
  });
  return newArr;

    
}

function addKeyAndValue(arr,key,value){
  arr.forEach(function(val){
    val[key]= value
  });
  return arr;
    
}


function doubleValuesWithMap(arr) {
  return arr.map(function(val){
    return val * 2;
  });
}

function valTimesIndex(arr){
  return arr.map(function(val, ind){
    return val * ind
  });
}


function extractKey(arr, key){
  return arr.map(function(val){
    return val[key];
  });
}

    
function extractFullName(arr){
  return arr.map(function(val){
    return val.first + " " + val.last;
  });
    
}

function filterByValue(arr, key) {
  return arr.filter(function(val){
    return val [key] !== undefined;
  });

}

function find(arr, searchValue) {
  return arr.filter(function(val){
    return val === searchValue;
  })[0];

}

function findInObj(arr, key, searchValue) {
  return arr.filter(function(val){
    return val [key] === searchValue;
  })[0];
}

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function(val){
      return vowels.indexOf(val) === -1;
    })
    .join("");

}

function doubleOddNumbers(arr){
  return arr
    .filter(function(val){
      return val % 2 !== 0;
    })
    .map(function(val){
      return val * 2;
    });
  }
    