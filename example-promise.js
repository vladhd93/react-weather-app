//function getTempCallback(location,callback){
//    callback(undefined,78);
//    callback('city not found');
//}
//
//getTempCallback('philadelphia',function(err,temp){
//    if(err){
//        console.log('error',err);
//    } else{
//        console.log('success',temp);
//    }
//});

//function getTempPromise(location){
//    return new Promise(function(resolve,reject){
//        setTimeout(function(){
//            resolve(11);
//            reject('city not found');
//        },1000);
//
//    });
//}
//
//getTempPromise('philladelphia').
//    then(function(temp){
//        console.log('promise success',temp);
//    },function(error){
//        console.log('promise error',err);
//    });


//Challenge area


//function addPromise(a,b){
//    return new Promise((resolve,reject)=>{
//        if( typeof a === 'number' && typeof b === 'number'){
//            var sum = a + b;
//            resolve(sum);
//        } else{
//            reject('a or === NaN');
//        }
//
//
//    });
//}
//
//
//addPromise(1,3).then((sum)=>{
//    console.log(sum);
//},(error)=>{
//    console.log(error);
//});


//function addPromise(a,b){
//    return new Promise(function(resolve,reject){
//        if(typeof a === 'number' && typeof b === 'number'){
//            let sum = a + b;
//            resolve(sum);
//        } else{
//            reject('a and b need to be numbers');
//        }
//    });
//}
//
//addPromise(2,3).then(function(sum){
//    console.log('succes',sum);
//},function(err){
//    console.log('error');
//});
//
//
//
//addPromise(1,9).then(function(sum){
//    console.log('this shouldnt show');
//},function(error){
//    console.log('this should appear',error);
//});
































