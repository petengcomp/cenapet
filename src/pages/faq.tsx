import Layout from "@/components/Layout";

// export async function getStaticProps(){

//     const response = await fetch("https://cenapet.vercel.app/api/faq");
//     const listaFaq: any[] = await response.json();
  
//     return{
//       props:{
//         listaFaq
//       },
//       revalidate: 300
//     }
// }

export default function Faq(){

    return(

        <Layout paginaMarcada="faq" Titulo="FAQ">
            Teste
        </Layout>
    )
}