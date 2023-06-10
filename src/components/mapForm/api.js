import data from './db.json'

export function getCords(zip) {
    if(zip in data){
      let res = data[zip]
      return res;
    }
}