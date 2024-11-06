interface TituloProps{

    valor: string
}

export default function Titulo(props: TituloProps){

    return(
        <div className="flex flex-col justify-start mb-8 mt-20">
            <div className="w-12 h-1 bg-[#FBD720] mb-4"></div>
            <h1 className="mt-2 text-4xl sm:text-5xl text-[#606060] font-bold">
        {props.valor}
    </h1></div>
        
    )
}