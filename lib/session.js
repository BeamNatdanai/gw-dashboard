const prototype = {
  name:"gw",
}

export default prototype

export const setItem = function (key,value){
  sessionStorage.setItem(key,JSON.stringify(value));
};

export const getItem = function (key){
  const _data = sessionStorage.getItem(key);
  return JSON.parse(_data);
}

export const removeItem = function (key){
  sessionStorage.removeItem(key);
}

export const clear = function(){
  sessionStorage.clear();
}

