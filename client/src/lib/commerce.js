import Commerce from '@chec/commerce.js';
require('dotenv').config()
// require('dotenv').config({ path:'../../env.development' })

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
console.log(process.env.REACT_APP_CHEC_PUBLIC_KEY)
console.log(process.env)
console.log(process)