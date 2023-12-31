import { BarChartBig, Calendar, Facebook, Instagram, Share2 } from "lucide-react"
import logo from "../assets/odonto-digital-logo.png"
import lucia from "../assets/lucia.png"
import dash from "../assets/dash.png"
import thumb from "../assets/thumb.png"
import bosch from "../assets/bosch.png"
import whats from "../assets/whats.png"
import odontocompany from "../assets/odontocompany.png"
import odontoexcelence from "../assets/odontoexcelence.png"
import redeorto from "../assets/redeorto.png"
import coife from "../assets/coife.png"
import orthodontic from "../assets/orthodontic.png"
import { AnimatedTexts } from "../components/benefits-animation"
import { Helmet } from "react-helmet";


export function Home() {
    return (
        <>

            <div className="justify-center text-center p-2 text-lg bg-red-600">
                Vá até o final da página para receber uma <span className="font-bold bg-yellow-400 text-red-950 px-1">consultoria gratúita.</span>
            </div>
            <main className="max-w-[100vw] min-h-screen bg-gradient-to-tr from-blue-950 via-black to-blue-950 py-8 px-3 bg-cover antialiased" >
                <header className="flex flex-1 justify-center">
                    <img width={150} src={logo} />
                </header>
                <div className="fixed bottom-8 right-6 z-50">
                    <a
                        href="https://api.whatsapp.com/send?phone=5547992479009&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20processo%20de%20capta%C3%A7%C3%A3o%20de%20clientes%20pra%20fechar%20pacientes%20novos%20todos%20os%20dias."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img width={70} src={whats} alt="WhatsApp" />
                    </a>
                </div>

                <div className="text-3xl text-center my-4 font-light">Garantimos <span className="font-bold text-blue-500">preencher</span> todos os <span className="font-bold">seus horários</span> com seu <span className="font-bold text-blue-500">serviço mais lucrativo</span>.</div>

                {/* <div className="flex text-xl justify-center items-center px-6 gap-2 mb-6">
                <Calendar className="w-14 h-14" />
                <span className="w-auto">Agenda cheia <span className="text-blue-600 font-bold">todos os dias</span></span>
            </div> */}

                {/* <div className="px-4 my-10">
                    <a href="https://api.whatsapp.com/send?phone=5547992479009&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20processo%20de%20capta%C3%A7%C3%A3o%20de%20clientes%20pra%20fechar%20pacientes%20novos%20todos%20os%20dias.">
                        <button className="bg-blue-500 p-4 text-2xl font-bold rounded-lg">QUERO AUMENTAR MEU FATURAMENTO</button>
                    </a>
                </div> */}

                <div className="mt-8  flex flex-col items-center gap-8 px-4">
                    <h2 className="text-2xl font-normal">Nossos <span className="text-blue-500">resultados:</span></h2>


                    <div className="flex items-center gap-2 backdrop-blur-[120px] rounded-lg p-2 ">
                        <img width={100} src={lucia} alt="" />
                        <div className="text-3xl font-light flex flex-col">
                            <div>Lúcia</div>
                            <div className="font-bold">Alves</div>
                            {/* <span className="text-lg text-blue-500">CRO 29384-9</span> */}
                            <span className="text-lg text-gray-300">Itajaí, Santa Catarina</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-2xl font-bold">
                        <span className="text-gray-400 font-normal">Saiu de:</span>
                        <div>2 Protocolos/mês</div>
                        <div className="text-gray-500 text-4xl">R$30.000,00</div>
                    </div>

                    <div className="flex flex-col items-center text-2xl font-bold">
                        <span className="text-gray-400 font-normal">Para</span>
                        <div>12 Protocolos/mês</div>
                        <div className="text-blue-500 text-5xl">R$100.000,00</div>
                    </div>

                    <AnimatedTexts />


                </div>

                <div className="border-[8px] rounded-lg border-blue-950 mb-6 mx-8">
                    <div dangerouslySetInnerHTML={{ __html: '<div id="vid_6570d1a827d3540009f7bde3" style="position:relative;width:100%;padding: 176.47058823529412% 0 0;"><img id="thumb_6570d1a827d3540009f7bde3" src="https://images.converteai.net/20fc57a9-9d12-47a2-b1f8-a9836bc4c0e0/players/6570d1a827d3540009f7bde3/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_6570d1a827d3540009f7bde3" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div>' }} />
                    <Helmet>
                        <script type="text/javascript" id="scr_6570d1a827d3540009f7bde3">var s=document.createElement("script");s.src="https://scripts.converteai.net/20fc57a9-9d12-47a2-b1f8-a9836bc4c0e0/players/6570d1a827d3540009f7bde3/player.js",s.async=!0,document.head.appendChild(s);</script>
                    </Helmet>
                </div>

                <div className="flex flex-col items-center my-14 gap-8">
                    <h2 className="text-2xl font-normal text-center">Como obtemos esse <span className="text-blue-500 font-semibold">resultado?</span></h2>

                    <div className=" flex flex-col items-center px-10 text-center">
                        <div className="flex gap-4">
                            <Instagram className="w-16 h-16 mb-4" />
                            {/* <Share2 className="w-16 h-16 mb-4" /> */}
                        </div>
                        <div className="text-2xl">Implementação de</div>
                        <div className="text-blue-500 font-bold text-4xl">Tráfego Pago</div>
                        <span className="text-gray-300 text-lg mt-4">Usamos estruturas de <span className="text-blue-500">campanhas validadas</span> para captação de possíveis pacientes qualificados.</span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col items-center justify-center text-center bg-white text-gray-600 p-2">
                            <span>Investimento em anúncios</span>
                            <div className="font-bold text-3xl">R$889,24</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center justify-center text-center bg-blue-500 p-4">
                                <span>Custo por lead</span>
                                <div className="font-bold text-3xl">R$9,46</div>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center bg-white text-gray-600 p-2">
                                <span>Leads totais</span>
                                <div className="font-bold text-2xl">94</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center bg-blue-500  p-2">
                            <span>Retorno</span>
                            <div className="font-bold text-3xl">R$87,410,93</div>
                        </div>

                    </div>

                    <span className="text-5xl">+</span>

                    <div className=" flex flex-col items-center px-10 text-center">
                        <BarChartBig className="w-20 h-20 mb-4" />
                        <div className="text-2xl">Implementação de</div>
                        <div className="text-blue-500 font-bold text-4xl">Data Analytcs</div>
                        <span className="text-gray-300 text-lg mt-4">Através das <span className="text-blue-500">métricas </span>coletadas, conseguimos analisar falhas e melhorias para tomar decisões <span className="text-blue-500">assertivas</span>. </span>
                    </div>

                    <div className="flex flex-col gap-4 px-6">
                        <img src={dash} alt="" />

                    </div>
                </div>

                <div className="flex flex-col gap-8 my-14">
                    <h2 className="text-2xl text-center flex flex-col font-thin">Outras empresas <span className="font-normal">satisfeitas:</span></h2>

                    <div className="grid grid-cols-2 gap-6 px-6 justify-center items-center my-6">
                        <img width={140} src={bosch} alt="" />
                        <img width={140} src={odontocompany} alt="" />
                        <img width={140} src={odontoexcelence} alt="" />
                        <img width={150} src={redeorto} alt="" />
                        <img width={140} src={orthodontic} alt="" />
                        <img width={140} src={coife} alt="" />
                    </div>

                </div>

                <div className="flex flex-col gap-6 text-center px-4">
                    <div className="flex flex-1 justify-center">
                        <img width={150} src={logo} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="text-2xl flex flex-col"><span className="font-bold text-blue-500">Clique no botão abaixo</span> e nós te ajudaremos a</div>

                        <div className="text-4xl font-bold">Alcançar esse <span className="text-blue-500">resultado</span></div>

                        <span>(Reunião gratúita e sem compromisso)</span>
                    </div>

                    <a href="https://api.whatsapp.com/send?phone=5547992479009&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20processo%20de%20capta%C3%A7%C3%A3o%20de%20clientes%20pra%20fechar%20pacientes%20novos%20todos%20os%20dias.">
                        <button className="bg-blue-500 p-4 text-2xl font-bold rounded-lg">AGENDAR CONSULTORIA GRATÚITA</button>
                    </a>
                </div>

                <footer className="text-center py-2 mt-20">
                    <p className="">
                        &copy; 2023 OdontoDigital. <p className="text-gray-400">Todos os direitos reservados.</p>
                    </p>
                </footer>

            </main >
        </>
    )
}