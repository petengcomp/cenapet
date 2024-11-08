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
  const sheet = doc.sheetsByIndex[1]
  const rows = await sheet.getRows()
  const faq = rows.map(row => {
      const categoria = row.get('categoria')
      const pergunta = row.get('pergunta')
      const resposta = row.get('resposta')
      return{
          categoria,
          pergunta,
          resposta
      }
  })
  res.send(faq)
}