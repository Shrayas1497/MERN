import axios from 'axios';

const url='';
export const authenticateSignup= async(user)=>{
    
    try{
    return  await axios.post(`${url}/signup`,user)
} 
catch(error){
console.log('error calling signup api');
}
}

export const authenticateLogin =async(user)=>{
    try{
        return await axios.post(`${url}/login`,user)
    }catch(error){
        console.log('error while calling login api',error)
    }
}


 
export const payUsingPaytm = async (data)=>{
try{
  let response= await axios.post(`${url}/payment`,data);
    return response.data;
}
catch(error){
 console.log('error  while calling  paytm api',error);   
}
}