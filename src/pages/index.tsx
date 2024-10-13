import Layout from "@/components/Layout";

export default function Home() {

  return (

    <Layout paginaMarcada="inicio" Titulo="CENAPET">
      
      <p>
        A Comissão Executiva Nacional do Programa de Educação Tutorial (CENAPET) corresponde à entidade representativa dos grupos PET e visa defender os interesses e filosofia do Programa de Educação Tutorial intercambiando a comunicação com órgãos superiores como o Ministério da Educação (MEC). 
      </p>

      <p>
        A CENAPET é composta por tutores e discentes petianos e foi fundada em 2006 durante o Encontro Nacional de Grupos PET (ENAPET) ocorrido em Florianópolis, Santa Catarina. Entretanto, embora somente em 2006 seu estatuto e regimento tenha sido aprovado, desde 1998 um grupo formado por tutores e estudantes petianos reunia-se de forma informal para lutar pela manutenção do programa. 
      </p>

      <p className="md:mb-44">
        A comissão é uma entidade sem fins lucrativos e os seus membros não recebem auxílio financeiro. Ademais, não possui sede fixa, sendo portanto determinada pela localidade de residência do Presidente. 
      </p> 
    </Layout>
  )
}
