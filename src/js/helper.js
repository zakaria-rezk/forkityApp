import { TimeOUT } from "./views/config";

const timeout = function (s) {
  return  new Promise((_, reject) => {
    setTimeout(function () {
      reject('request took more than expected');
    }, s * 1000);
  });
};
export const fetchPro = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TimeOUT)]);
  
    const data = await res.json();
    if (!res.ok) throw new Error('conat load reecipt');

    return data;
  } catch (err) {
    throw err;
  }
};
