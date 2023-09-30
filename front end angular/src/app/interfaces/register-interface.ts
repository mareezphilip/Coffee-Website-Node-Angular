export interface RegisterInterface {
    email:string,
    password:string,
    fName:string,
    lName:string,
    countryCode:string,
    phone:string,
    gender:string,
     dOfBirth?:Date ,
     addresses :{
      addrType:string,
      addrDetails :string
    }
}

   

