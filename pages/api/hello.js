// import {subscribe} from '../index'
export default async function handler(req, res) {
    const email = req.body.email
    // try{
  res.status(200).json({ text: email })
  // res = await fetch('./api/hello',{
  //   method:'post',
  //   headers:{
  //     'Content-Type' :"application/json"
  //   },
  //   body: JSON.stringify({
  //     email: email
  //   })
  // })
  // if(res.status === 200){
   
  // }else{
  //   alert("sorry, something went wrong")
  // }
  //   }catch(err){

  //   }
}
