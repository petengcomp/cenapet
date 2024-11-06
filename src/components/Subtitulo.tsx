interface SubtituloProps{

    valor: string
}

export default function Subtitulo(props: SubtituloProps){

    return(

        <h1 className="text-3xl sm:text-4xl font-bold mb-10">
            {props.valor}
        </h1>
    )
}