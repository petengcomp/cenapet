This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Documentação

Este projeto foi desenvolvido utilizando Next.js, integrado com tecnologias como <a href="https://www.typescriptlang.org/">TypeScript</a> e <a href="https://tailwindcss.com/">TailwindCSS</a>. Na primeira linha desta documentação, é possível encontrar mais informações sobre o Next.js.
O projeto funciona corretamente na versão 20 do Node.js que pode ser instalado em https://nodejs.org/en/download.

<br>

Para rodar o projeto no modo de desenvolvimento, utilizando o npm:

```bash
npm run dev
```
Após rodar este comando, é possível acessar o projeto no modo de desenvolvimento em <a>http://localhost:3000</a>

<br>

O deploy do site foi feito na Vercel, e atualmente está sob responsabilidade do PET Engenharia de Computação da UFES. O site está hospedado na <a href="https://aws.amazon.com/pt/route53/">Amazon Route 53</a> e as informações do domínio estão no <a href="https://registro.br/">registro.br</a>. As informações de acesso à AWS Route 53 e ao registro.br estão com a diretoria do Cenapet.

<br>

Os documentos e as informações do site estão guardadas em um drive, cujo acesso deve ser solicitado à diretoria do Cenapet. Para consumir as informações das planilhas que estão nesse drive, foi utilizada a API do <a href="https://www.npmjs.com/package/google-spreadsheet">google-spreadsheet</a>. Para utilização da API é necessário criar as credenciais necessárias no Google Cloud.

<br>

## Orientações para alterações nas planilhas

Com o acesso ao drive da diretoria do Cenapet, é possível adicionar documentos, novos grupos PET, atualizar os membros da diretoria e adicionar perguntas ao FAQ, por meio da alteração das planilhas, localizadas em ./Base de Dados. Segue as orientações para alterações de cada planilha.

- Grupos
  - Não deixar os campos nome, uf e ies vazios;
  - Escrever a sigla do Estado conforme o padrão adotado na planilha (Ex.: ES, RJ, BA, etc.);
  - O nome da universidade deve ser escrito da mesma forma que já está na planilha, caso ela já esteja presente;
  - Se a universidade for "Ufes", será reconhecida como mesma universidade "UFES", "ufes", "UfEs", etc. Porém não será recongecido "Universidade Federal do Espírito Santo". Mantenha a sigla.
- FAQ
  - Não deixe campos vazios;
  - Mesmas categorias devem ser escritas da mesma forma;
  - Evite criar muitas categorias, tente agrupar o máximo possível.
- Documentos
  - Não deixe campos vazios;
  - Para adicionar um documento: faça o upload no drive em ./Documentos, deixe o acesso para "Qualquer pessoa com o link" como **leitor**, e copie o link de compartilhamento na coluna "link" da planilha.
- Diretrizes
  - Não deixe campos vazios;
  - Para adicionar um documento: faça o upload no drive em ./Eventos do PET/Diretrizes para eventos, deixe o acesso para "Qualquer pessoa com o link" como **leitor**, e copie o link de compartilhamento na coluna "link" da planilha.
- Enapet
  - Não deixar os campos edicao, local e data vazios;
  - O campo ata não é obrigatório;
  - Para adicionar uma ata: faça o upload no drive em ./Eventos do PET/atas dos encontros nacionais, deixe o acesso para "Qualquer pessoa com o link" como **leitor**, e copie o link de compartilhamento na coluna "link" da planilha.
- Membros
  - Não deixe campos vazios;
  - Mantenha a ordem dos cargos como está.
