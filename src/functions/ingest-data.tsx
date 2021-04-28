import { Endpoints } from "../constants/api.variables"
import { putItem } from '../services/dynamo.service'
let axios = require('axios')

const records:any = []

export const ingestData = () => {
// rds - pg
  records.forEach((record: { username:string, password:string, signedIn:boolean, cash:number }, idx: number) => {
      axios.post(Endpoints.PG
        ,{
            "id": idx,
            "username": record.username,
            "password": record.password,
            "signedIn": record.signedIn,
            "cash": record.cash
          })
  })

// dynamo
  records.forEach((record: { username:string, password:string, signedIn:boolean, cash:number }, idx:number) => putItem('users', {...record, id:idx.toString()}))

  document.location.reload()
}
