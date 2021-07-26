const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2);
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num1) =>{
    return function(num2){
        return num1* num2
    }
};

const fareDoubler = (fare) =>{
    return fare * 2
};

const fareTripler = (fare) => {
    return fare * 3;
};

const selectDifferentDrivers = (driversArray, func)=> {
    return func(driversArray);
};
