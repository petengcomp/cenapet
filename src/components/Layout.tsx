import localFont from "next/font/local"
import Menu from "./Menu"
import Titulo from "./Titulo"

const ufes = localFont({
    src: [
      {
        path: "../../public/fonts/UfesSans-Thin.ttf",
        weight: "100",
        style: "normal",
      },
      {
        path: "../../public/fonts/UfesSans-Thin.ttf",
        weight: "200",
        style: "normal",
      },
      {
        path: "../../public/fonts/UfesSans-Light.ttf",
        weight: "300",
        style: "normal",
      },
      {
        path: "../../public/fonts/UfesSans-Regular.ttf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../../public/fonts/UfesSans-Medium.ttf",
        weight: "500",
        style: "normal",
      },
      {
        path: "../../public/fonts/UfesSans-SemiBold.ttf",
        weight: "600",
        style: "normal",
      },
      {
        path: "../../public/fonts/UfesSans-Bold.ttf",
        weight: "700",
        style: "normal",
      },
      {
        path: "../../public/fonts/UfesSans-ExtraBold.ttf",
        weight: "800",
        style: "normal",
      },
      {
        path: "../../public/fonts/UfesSans-ExtraBold.ttf",
        weight: "900",
        style: "normal",
      },
      {
        path: "../../public/fonts/UfesSans-ThinItalic.ttf",
        weight: "100",
        style: "italic",
      },
      {
        path: "../../public/fonts/UfesSans-LightItalic.ttf",
        weight: "300",
        style: "italic",
      },
      {
        path: "../../public/fonts/UfesSans-Italic.ttf",
        weight: "400",
        style: "italic",
      },
    ],
})

interface LayoutProps {

    children: any
    paginaMarcada: string
    Titulo: string
}

export default function Layout(props: LayoutProps){

    return (

        <div className={`${ufes.className} flex flex-col items-center`}>

            <Menu paginaMarcada={props.paginaMarcada}/>
            <div className="md:w-[90%] w-full ml-8">
              <Titulo valor={props.Titulo}/>
              {props.children}
            </div>
        </div>
    )
}