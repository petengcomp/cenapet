import Layout from "@/components/Layout";
import MapaInterativo from "@/components/MapaInterativo";

export default function Home() {

  return (

    <Layout paginaMarcada="grupos" Titulo="Grupos PET">

        <div>
          <p>
          Os grupos PET (Programa de Educação Tutorial) são iniciativas que promovem a formação complementar de estudantes universitários, buscando integrar ensino, pesquisa e extensão. Criados pelo Ministério da Educação no Brasil, esses grupos têm como objetivo proporcionar um ambiente de aprendizagem colaborativa, onde os alunos podem desenvolver habilidades práticas e teóricas em diversas áreas do conhecimento. Através de projetos, atividades e oficinas, os participantes não apenas aprofundam seus conhecimentos acadêmicos, mas também contribuem para a solução de problemas sociais e comunitários, fortalecendo o vínculo entre a universidade e a sociedade. Além disso, os grupos PET incentivam a formação de lideranças, a troca de experiências e o desenvolvimento de soft skills essenciais para o mercado de trabalho. Em um mundo cada vez mais interconectado, a atuação em um grupo PET se torna uma valiosa oportunidade para o crescimento pessoal e profissional dos estudantes.
          </p>

          <hr className="h-0.5 bg-yellow-400 w-full mt-10"/>
        </div>

        <div>
            <MapaInterativo/>
        </div>
    </Layout>
  )
}