









// in here, i used default value of functions parameter. because, to get suggestion from code editor what kind of value i have to pass as parameter of these functions.

// get Meter from killometer
const killometerToMeter = (km=0) => typeof km === 'number' && km>-1?km*1000:null;



//get total amount of products
const budgetCalculator = (clock=0, phone=0, laptop=0) => typeof clock==='number' && clock>-1 && typeof phone==='number' && phone>-1 && typeof laptop==='number' && laptop>-1?(clock*50)+(phone*100)+(laptop*500):null;


//get total hotel cost
function hotelCost(day=0){
    if(typeof day==='number' && day>0){
        if(day<=10)return day*100;
        else if(day<=20)return (10*100)+(day-10)*80;
        else return day*50;
    }else return null;
}



// get friend by biggest name from an array
function megaFriend(friendArr=[]){
    if(Array.isArray(friendArr) && friendArr.length>0){
        let maxLengthName = '';
        friendArr.forEach(name => {
            if(maxLengthName.length<name.length){
                maxLengthName = name;
            }
        })
        return maxLengthName;
    }else return null;
}



// console.log(killometerToMeter(3));
// console.log(budgetCalculator(3, 2, 3));
// console.log(hotelCost(17));
// console.log(megaFriend(['mahim', 'Javed Jarif', 'ayat']));













