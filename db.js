import { Pool } from "pg";

const pool = new Pool({
   user : 'postgres' ,
   host : "localhost" ,
   database : "crud-db",
   password : "12345",
   port : 5432
})

export default pool

