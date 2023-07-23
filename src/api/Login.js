import { Axios } from "./connection";

export const loginUser = async (UserName, Password) => {
    Axios.post('/User/login' , {UserName, Password})
    .then((response) => {
      console.log(response);//response
      console.log(response.data);//response data
      console.log(response.data.user)
      console.log(response.data.token)
      console.log(response.status);//Status code
      console.log(response.statusText);//OK for 200
      console.log(response.headers);//Header
      
    }, (error) => {
      console.log(error.response);
      
    }
  
  )
      
  }