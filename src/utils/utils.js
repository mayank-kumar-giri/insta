export const isEmpty = object => {
  if(object===[] || object==={}) return true;
  else return false;
}

export const isNil = object => {
  if(object===null) return true;
  else return false;
}

export const formatDate = (dateStr, n) => {
  return dateStr.slice(0,n);
}

export default {
  isEmpty,
  isNil,
  formatDate
};