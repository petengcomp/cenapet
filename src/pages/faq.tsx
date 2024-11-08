import Layout from "@/components/Layout";
import PerguntaFaq from "@/components/PerguntaFaq";
import FaqModel from "@/core/FaqModel";
import { useEffect, useState } from "react";

export async function getStaticProps(){

    const response = await fetch("https://cenapet.vercel.app/api/faq");
    const listaFaq: any[] = await response.json();
  
    return{
      props:{
        listaFaq
      },
      revalidate: 300
    }
}

export default function Faq(props: any){

    const [perguntas, setPerguntas] = useState<FaqModel[]>([])
    const [categorias, setCategorias] = useState<string[]>([])
    const [selecionada, setSelecionada] = useState('Todas')

    useEffect(() => {

        const listaModel: FaqModel[] = []
        const listaCategorias: string[] = ['Todas']

        for(let i = 0; i < props.listaFaq.length; i++){

            const item = props.listaFaq[i]

            const elemento = new FaqModel(item.categoria, item.pergunta, item.resposta);
            listaModel.push(elemento)

            if(!listaCategorias.includes(item.categoria)){
                listaCategorias.push(item.categoria)
            }
        }
        setPerguntas(listaModel)
        setCategorias(listaCategorias)
    }, [])

    return(

        <Layout paginaMarcada="faq" Titulo="FAQ">

            <span>Perguntas frequentes.</span>

            <hr className='h-0.5 bg-yellow-400 w-full my-10'/>

            <div className="flex flex-col md:flex-row">

                <div className="flex flex-col justify-center items-center pb-4 px-4 md:border-r-2 border-blue-500">

                    <h1 className="text-xl font-bold mb-4">Selecione uma categoria</h1>

                    <div className="flex flex-col gap-3 text-lg">

                        {
                                
                            categorias.map(categoria => (

                                <button className={`
                                    hover:scale-105 duration-500
                                    ${selecionada === categoria ? 'border-b-2 border-blue-500' : ''}
                                `} key={categoria} onClick={() => setSelecionada(categoria)}>
                                    {categoria}
                                </button>
                            ))   
                        }
                    </div>
                </div>

                
                <div className="flex flex-col md:w-[80%] items-center">

                    {               
                        selecionada === 'Todas' ? (
                            
                            perguntas.map(pergunta => (

                                <PerguntaFaq key={pergunta.pergunta} valor={pergunta} />
                            ))
                        ) : (
                            
                            perguntas.map(pergunta => (

                                selecionada === pergunta.categoria ? (
                                    <PerguntaFaq key={pergunta.pergunta} valor={pergunta} />
                                ) : false
                            ))
                        ) 
                    }
                </div>
            </div>
            
        </Layout>
    )
}