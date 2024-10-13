export default function Footer(){
    return(
        <footer className="bg-[#606060] py-8 w-full">
            {/*computador*/}
            <div className="hidden md:flex justify-between py-8 h-[160px] w-[80%] mx-auto">
                <div className="flex justify-start" >
                    <img src="logos/logo_branco.png" alt="logo"
                    className="h-[56px] w-[216px]"/>
                </div>

                <div className="flex-col items-center">
                    <div className="flex justify-center">
                        <a href="mailto:diretoria.cenapet@gmail.com" target="__blank">
                            <img src="imagens/Vector.png" alt="email"
                            className="h-[17px] w-[21px]" />
                        </a>
                        <h1 className="ml-2 mt-[-3px] text-[#D6D6D6] font-bold">diretoria.cenapet@gmail.com</h1>
                    </div>
                    <div className="flex justify-start mt-6">
                        <a href="https://www.facebook.com/ComissaoExecutivadoPET"target="__blank">
                            <img src="imagens/Facebook.png" alt="facebook" className="inline-block hover:invert rounded-[35px]"/>
                        </a>
                        <a href="https://www.youtube.com/@cenapet3753"target="__blank">
                        <img src="imagens/Youtube.png" alt="youtube" className="ml-2 inline-block hover:invert rounded-[35px]"/>
                        </a>
                        <a href="https://www.instagram.com/cenapet.diretoria/"target="__blank">
                            <img src="imagens/Instagram.png" alt="instagram" className="ml-2 inline-block hover:invert rounded-[35px]"/>
                        </a>
                    </div>
                </div>
            </div>
            {/*Telefone*/}
            <div className="md:hidden flex flex-col items-center justify-center mb-8">
                <div>
                    <img src="logos/logo_branco.png" alt="logo"
                    className="h-[56px] w-[216px] mb-3"/>
                </div>
                <div className="flex items-center mt-4">
                    <a href="mailto:diretoria.cenapet@gmail.com" target="__blank">
                        <img src="imagens/Vector.png" alt="email"
                        className="h-[17px] w-[21px]" />
                    </a>
                    <h1 className="ml-2 mt-[-3px] text-[#D6D6D6] font-bold">diretoria.cenapet@gmail.com</h1>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                    <a href="https://www.facebook.com/ComissaoExecutivadoPET"target="__blank">
                        <img src="imagens/Facebook.png" alt="facebook" className="inline-block hover:invert rounded-[35px]"/>
                    </a>
                    <a href="https://www.youtube.com/@cenapet3753"target="__blank">
                        <img src="imagens/Youtube.png" alt="youtube" className="inline-block hover:invert rounded-[35px]"/>
                    </a>
                    <a href="https://www.instagram.com/cenapet.diretoria/"target="__blank">
                        <img src="imagens/Instagram.png" alt="instagram" className="inline-block hover:invert rounded-[35px]"/>
                    </a>
                </div>
            </div>

            <div className="h-[1px] w-[80%] bg-[#D6D6D6] mx-auto"></div>
            <div>
                <p className="text-center text-sm text-[#D6D6D6] mt-4 font-bold">Created by PET Engenharia da Computação UFES ・ 2024 ・All rights reserved</p>
            </div>
        </footer>
    )
}