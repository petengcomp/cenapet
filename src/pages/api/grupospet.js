import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from 'google-auth-library';

let cachedGrupos = null;
const FETCH_INTERVAL = 5 * 60 * 1000; // 5 minutos (em milissegundos)

async function fetchDataFromSpreadsheet() {
  const serviceAccountAuth = new JWT({
    email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet('1QG9Pkw-Ms6D7QLlWymoHcDKc9-cxUKA5tB3HyLrjAJ8', serviceAccountAuth);

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();

  const grupos = rows.map(row => ({
    nome: row.get('nome'),
    uf: row.get('uf'),
    ies: row.get('ies'),
    link: row.get('link')
  }));

  cachedGrupos = grupos;
  console.log("Dados atualizados da planilha");
}

// Inicia a primeira atualização assim que o servidor começa
fetchDataFromSpreadsheet();

setInterval(fetchDataFromSpreadsheet, FETCH_INTERVAL);

export default function Grupospet(req, res) {
  
  if (!cachedGrupos) {
    res.status(503).send({ error: 'Dados ainda não estão prontos, tente novamente mais tarde.' });
  } else {
    res.send(cachedGrupos);
  }
}