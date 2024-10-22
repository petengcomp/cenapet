import Layout from "@/components/Layout";

export default function Home() {

  return (

    <Layout paginaMarcada="inicio" Titulo="CENAPET">
      
      <p>
      A Comissão Executiva Nacional do Programa de Educação Tutorial (CENAPET) corresponde à entidade representativa dos grupos do Programa de Educação Tutorial (PET) e visa defender os interesses da Comunidade PETiana e a filosofia do Programa, intercambiando a comunicação com órgãos superiores como o Ministério da Educação (MEC) e Fundo Nacional de Desenvolvimento da Educação (FNDE), bem como com o Conselho Superior e a Comissão de Avaliação do PET restabelecidas em 2024 após mais de 10 anos inativadas. 
      </p>

      <p>
      A CENAPET é composta por 10 tutores e 10 discentes petianos (5 titulares e 5 suplentes de cada) e foi fundada em 2006 durante o Encontro Nacional de Grupos PET (ENAPET) ocorrido em Florianópolis, Santa Catarina. Entretanto, embora somente em 2006 seu estatuto e regimento tenha sido aprovado, desde 1998 um grupo formado por tutores e estudantes petianos reunia-se de forma informal para lutar pela manutenção do programa.  
      </p>

      <p>A comissão é uma entidade sem fins lucrativos e os seus membros não recebem auxílio financeiro.</p>

      <div className="flex flex-col items-center w-full">

        <div className="flex flex-col justify-center items-center mt-10 md:w-[80%] w-[90%]">

          <img className="w-full" src="imagens/Mobilização MEC.png" alt="" />
          <span className="text-[12px]">Manifestação da Comunidade PETiana em 2017 em virtude, principalmente, de atrasos recorrentes no pagamento de bolsas e desvalorização.</span>
        </div>
      </div>
 
    </Layout>
  )
}
