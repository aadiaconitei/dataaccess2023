 interface BasicUser {
    id: number,
}
 interface User extends BasicUser {
  nume: string,
  prenume: string,
  datanastere:Date, //string
  email:string,
  telefon: string,
  poza?:string,
  dataadaugare?:Date,
  actiune?:string
}
 interface UserWithDetails extends BasicUser, User{
  userId: number,
  user: User,
  
}
export {BasicUser ,User ,UserWithDetails}