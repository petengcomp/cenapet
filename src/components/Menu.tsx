import Link from "next/link"
import { IconeMenu } from "./Icones"
import { useState } from "react"

const paginas = [

    {
        label: 'Início',
        url: '/',
        value: 'inicio'
    },
    {
        label: 'Diretoria',
        url: '/diretoria',
        value: 'diretoria'
    },
    {
        label: 'Documentos',
        url: '/documentos',
        value: 'documentos'
    },
    {
        label: 'Grupos',
        url: '/grupos',
        value: 'grupos'
    },
    {
        label: 'Eventos',
        url: '/eventos',
        value: 'eventos'
    },
    {
        label: 'FAQ',
        url: '/faq',
        value: 'faq'
    },
]

interface MenuProps{

    paginaMarcada: string
}

export default function Menu(props: MenuProps){

    function renderizarPaginas(){

        return paginas.map(pagina => (

            <li 
                key={pagina.url} 
                className={`
                    list-none
                    p-5 text-sm lg:text-xl
                    animate-slide lg:animate-none
                    ${pagina.value === props.paginaMarcada ? 'text-blue-500 underline' : ''}
                `}>


                <Link href={pagina.url}>
                    <span className="hover:underline cursor-pointer">
                        {pagina.label}
                    </span>
                </Link>
            </li>
            
        ))
    }

    const [visivel, setVisivel] = useState(false)

    return(

        <nav className="sticky top-0 bg-white z-50 flex flex-col border-b border-b-gray-300 w-full mb-5">

            <div className="flex py-7 w-full md:w-[90%] justify-center m-auto">
                <div className="flex-1 flex items-center pl-12">
                    <Link href="/">
                        <img 
                            src="logos/logo_cinza.png" alt="" 
                            className="flex w-[111.75px] lg:w-[223.5px] h-[29.25px] lg:h-[58.5px]"
                        />
                    </Link>
                </div>

                <div className="hidden flex-1 lg:flex items-center justify-end">
                    
                    {renderizarPaginas()}
                </div>

                <div className="flex flex-1 lg:hidden items-center justify-end pr-12 cursor-pointer" onClick={() => setVisivel(!visivel)}>
                    {IconeMenu}
                </div>
            </div>

            <div className={`${visivel ? 'flex lg:hidden' : 'hidden'} flex-1 flex-col pl-8`}>
                    
                    {renderizarPaginas()}
            </div>

        </nav>
    )
}