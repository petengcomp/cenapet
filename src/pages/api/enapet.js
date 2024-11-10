import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from 'google-auth-library';

export default async function FaqAPI(req, res){
  const serviceAccountAuth = new JWT({
      email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  }) 
  const doc = new GoogleSpreadsheet('1QG9Pkw-Ms6D7QLlWymoHcDKc9-cxUKA5tB3HyLrjAJ8', serviceAccountAuth)
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[4]
  const rows = await sheet.getRows()
  const edicoes = rows.map(row => {
      const edicao = row.get('edicao')
      const local = row.get('local')
      const data = row.get('data')
      const ata = row.get('ata')
      return{
          edicao,
          local,
          data,
          ata
      }
  })
  res.send(edicoes)
}