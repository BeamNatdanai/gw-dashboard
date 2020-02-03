
export const isEmpty = (obj) =>  {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} 

export const  check_is_english = (str) => {
    return /^[A-Za-z\d]+$/.test(str);
}

export const subLengthString = (dataStr,length) => {

   if(dataStr !== null){
        if(dataStr.length > length){
            return dataStr.substring(0,length)+"..."
        }else{
            return dataStr.substring(0,length)
        }
   }
   
}

export const formatDataFocusDate = (_date) => {
    return _date.substring(0,10)
}

export const getDataNow = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    return today = yyyy + '-' + mm + '-' + dd ;
}

export const getDataAndTimeNow = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();


    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 
    return today = yyyy + '-' + mm + '-' + dd +' '+hours+':'+minutes+':'+seconds ;
}

export const decimal = (_number,_dec) => {
    let dec = _number.toFixed(_dec)
    return parseInt(dec)
}