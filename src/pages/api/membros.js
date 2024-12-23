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
  const sheet = doc.sheetsByIndex[5]
  const rows = await sheet.getRows()
  const membros = rows.map(row => {
      const nome = row.get('nome')
      const cargo = row.get('cargo')
      const grupo = row.get('grupo')
      const ies = row.get('ies')
      const foto = row.get('foto')
      return{
          nome,
          cargo,
          grupo,
          ies,
          foto
      }
  })
  res.send(membros)
}