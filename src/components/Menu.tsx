import Link from "next/link"
import { IconeMenu } from "./Icones"
import { useState } from "react"
import { motion } from "framer-motion"

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

    const [hoverLink, setHoverLink] = useState(props.paginaMarcada)

    const [visivel, setVisivel] = useState(false)

    return(

        <div className="sticky top-0 bg-white z-50 flex flex-col border-b border-b-gray-300 w-full mb-5">

            <div className="flex py-7 w-full md:w-[90%] justify-center m-auto">
                <div className="flex-1 flex items-center pl-12">
                    <Link href="/">
                        <img 
                            src="logos/logo_cinza.png" alt="" 
                            className="flex w-[111.75px] lg:w-[223.5px] h-[29.25px] lg:h-[58.5px]"
                        />
                    </Link>
                </div>

                <nav className="hidden flex-1 lg:flex items-center justify-end py-2">
                    
                    {
                        paginas.map(pagina => {
                            return(
                
                                <Link 
                                    key={pagina.url} 
                                    className={`
                                        relative
                                        list-none
                                        px-5 py-2 text-sm lg:text-xl
                                        ${pagina.value === props.paginaMarcada ? 'text-blue-500' : ''}
                                        duration-300 ease-in
                                    `}
                                    href={pagina.url}
                                    onMouseOver={() => setHoverLink(pagina.value)}
                                    onMouseLeave={() => setHoverLink(props.paginaMarcada)}
                                    >
                                    <span className="cursor-pointer">
                                        {pagina.label}
                                    </span>
                
                                    {
                                        pagina.value === hoverLink && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 h-full bg-green-800/20 rounded-full -z-10"
                                                layoutId="navbar"
                                                aria-hidden="true"
                                                style={{
                                                    width: "100%"
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    bounce: 0.25,
                                                    stiffness: 100,
                                                    damping: 5,
                                                    duration: 0.8
                                                }}
                                            ></motion.div>
                                        )
                                    }
                                </Link>
                        )})
                    }
                </nav>

                <div className="flex flex-1 lg:hidden items-center justify-end pr-12 cursor-pointer" onClick={() => setVisivel(!visivel)}>
                    {IconeMenu}
                </div>
            </div>

            <div className={`${visivel ? 'flex lg:hidden' : 'hidden'} flex-1 flex-col pl-8`}>
                    
                    {
                        paginas.map(pagina => {
                            return(
                
                                <Link 
                                    key={pagina.url} 
                                    className={`
                                        list-none
                                        p-5 text-sm lg:text-xl
                                        animate-slide
                                        ${pagina.value === props.paginaMarcada ? 'text-blue-500 underline' : ''}
                                        duration-300 ease-in
                                    `}
                                    href={pagina.url}
                                    onMouseOver={() => setHoverLink(pagina.value)}
                                    onMouseLeave={() => setHoverLink(props.paginaMarcada)}
                                    >
                                    <span className="hover:underline cursor-pointer">
                                        {pagina.label}
                                    </span>
                                </Link>
                        )})
                    }
            </div>

        </div>
    )
}