import { insertUser } from './src/db/schema/user'

insertUser({
  fullName: 'Leenus Darnal',
  phone: '123456789',
}).then((result) => console.log(result))
