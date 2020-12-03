import axios from 'axios'

export default async function Verifica_Login(email,pass){

  console.log("-------------------------"+ email + pass)
   const response = await axios.post('http://localhost:3333/login',{"email":email,"pass":pass}).then(results => {

             

      if(Object.keys(results.data)[0] == "Erro"){

            return false;

      }

      if(results.data[0].email === email){
   
        return {"validacao":true,"User":results.data};
      }

       return null;

     })


    return response

 }


