import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from 'google-auth-library';

export default async function Grupospet(req, res){

    const serviceAccountAuth = new JWT({
        email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    }) 

    const doc = new GoogleSpreadsheet('1QG9Pkw-Ms6D7QLlWymoHcDKc9-cxUKA5tB3HyLrjAJ8', serviceAccountAuth)

    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()

    const grupos = rows.map(row => {

        const nome = row.get('nome')
        const uf = row.get('uf')
        const ies = row.get('ies')
        const link = row.get('link')

        return{
            nome,
            uf,
            ies,
            link
        }
    })

    res.send(grupos)
}