import Layout from "@/components/Layout";
import Subtitulo from "@/components/Subtitulo";

export default function Eventos(){

    return(

        <Layout paginaMarcada="eventos" Titulo="Eventos PET">
            
            <span>Objetivos gerais e diretrizes dos encontros do PET realizados em escala nacional e regional.</span>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

            <Subtitulo valor="Palestras / Mesas Redondas / Diálogos" />
            <p>
            Têm como finalidade dialogar com a comunidade PETiana os principais temas relacionados ao programa e à educação de modo objetivo e agradável. As palestras ou mesas redondas são organizadas em um local com grande capacidade para o público participante, normalmente sendo realizadas em teatros e auditório, para acolhimento de todos/as os/as envolvidos/as.
            </p>

            <div className="flex md:gap-40 flex-col md:flex-row">
                <div className="flex-1">
                    <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

                    <Subtitulo valor="GDT's" />
                    <p>
                    Têm como objetivo principal reunir, discutir e trabalhar algumas ideias para o aprimoramento do programa, as quais serão enviadas para a Assembleia Final (encontros regionais) ou Geral (encontro nacional) em forma de encaminhamento (discutidas e votadas, registradas na ata e no relatório do encontro) e de sugestões (registradas no relatório do encontro).
                    </p>
                </div>

                <div className="flex-1">
                    <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

                    <Subtitulo valor="Oficinas / Minicursos" />
                    <p>
                    As oficinas e os minicursos têm como objetivo participar da construção do indivíduo PETiano, seja de uma forma mais lúdica e criativa, como nas oficinas, onde o participante colabora em atividades propostas, ou em apresentações com propostas mais delimitadas, como nos casos dos minicursos.
                    </p>
                </div>
            </div>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

            <Subtitulo valor="Assembleia Final ou Assembleia Geral" />
            <p>
            As Assembleias Final e Geral reúnem todos os participantes do evento, sendo o fórum de deliberação de todos eles. Desse modo, devido à sua longa duração e à grande quantidade de participantes, a logística se faz extremamente importante, devendo priorizar o conforto dos participantes para evitar deslocamentos desnecessários.
            </p>

            <div className="flex md:gap-40 flex-col md:flex-row">
                <div className="flex-1">
                    <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

                    <Subtitulo valor="Apresentação de trabalhos" />
                    <p>
                    Tem como finalidade a busca por uma interação dos PETianos com o desenvolvimento de pesquisa. Neste espaço, apresentam-se os artigos relacionados a uma análise que o PET proporcionou para a sociedade acadêmica e civil. Devido à sua importância, é necessária a presença de um professor tutor para avaliar e comentar sobre os artigos apresentados de forma oral ou por meio de banners.
                    </p>
                </div>

                <div className="flex-1">
                    <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

                    <Subtitulo valor="Encontro de PETianos" />
                    <p>
                    O encontro tem como objetivo expandir o diálogo entre tutores e discentes sobre assuntos relacionados ao programa e à educação. Sugere-se que a mesa seja composta por cinco ou seis integrantes com responsabilidades predefinidas. Sugere-se também que, em ambos os encontros, haja um regimento que organize a estrutura da assembleia, o qual deverá ser apresentado pela mesa, lido e votado no início do encontro.
                    </p>
                </div>
            </div>

            <hr className="h-0.5 bg-yellow-400 w-full my-10"/>

            <Subtitulo valor="Encontro de interlocutores e membros do CLAA" />
            <p>
            Além do espaço reservado para o encontro de PETianos - tutores e discentes, indica-se que se tenha um espaço para diálogo entre membros do CLAA e interlocutores da IES, a fim de compartilhar experiências, criar diretrizes conjuntamente e construir novos saberes para as práticas PETianas. Aconselha-se que a Comissão Organizadora faça convite aos interlocutores dos encontros regionais e nacionais, indicando também a importância da presença de membros do CLAA.
            </p>
        </Layout>
    )
}