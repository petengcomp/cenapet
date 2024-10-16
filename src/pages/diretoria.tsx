import Documento from "@/components/Documento";
import Layout from "@/components/Layout";
import Subtitulo from "@/components/Subtitulo";
import { docsDiretoria } from "@/core/Dados";

export default function Diretoria(){

    function renderizaDocs(){

        return docsDiretoria.map(doc => {
            return <Documento key={doc.href} valor={doc}/>
        })
    }

    return(

        <Layout paginaMarcada="diretoria" Titulo="Diretoria CENAPET">
            
            <p>
            Eleita bienalmente e é composta por um Presidente, um VicePresidente (ambos docentes) e oito Diretores (docentes e discentes) com atribuições específicas, sendo que a composição dessa diretoria envolve dois representantes, um docente e um discente, de cada região do PET do Brasil
            </p>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

            <Subtitulo valor="Membros"/>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>
            <Subtitulo valor="Documentos"/>
            <div className="flex gap-8 lg:gap-40 flex-col lg:flex-row">
                {renderizaDocs()}
            </div>
        </Layout>
    )
}