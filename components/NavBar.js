export default function NavBar(){
    return(
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-2 py-4">

            {/*Left side logo in hero*/}
            <div>
                <img
                    src="onamiRameWhiteLogo.png"
                    alt="Nombre de la clínica"
                    className="h-15 w-auto"
                />
            </div>

            {/*Nav Bar right section here*/}
            <div className="text-white font-bold rounded-lg text-lg flex items-center gap-6 pr-4">
                <span>614-369-86-43</span>
                /
                    <div>
                        <a 
                            href="#agendar">
                            Agendar Cita en Línea
                        </a>
                    </div>

            </div>
        </nav>
    )
}