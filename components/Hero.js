import BookingButton from '../components/BookingButton.js';
import SocialProof from '../components/SocialProof.js';

export default function Hero({ children }) {
    return <div>
        <section
            className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('onamiRameHero.jpeg')" }}>
                
                {/*Dark Overlay here*/}
                <div className="absolute inset-0 bg-black/60 z-0"></div>

                {/*Here's the NavBar component*/}
                {children}

                {/*Text content here */}
            <div className="relative flex flex-col items-center justify-center text-center min-h-screen items-center justify-center">
                <h1 className="m-0 text-5xl leading-normal font-bold text-white">
                    ¿Dolor Dental <span className="text-blue-400 font-extrabold">Severo</span>?<br />
                    Te Atendemos <span className="text-blue-400 font-extrabold">de Inmediato</span>, <span className="text-blue-400 font-extrabold">24/7</span>
                </h1>

                <h2 className="m-0 text-2xl leading-relaxed font-bold text-white">
                    No Esperes a que el Dolor Empeore.<br />
                    Recibe Atención Dental Cuando Más la Necesitas.
                </h2>

                {/*Buttons inside the Hero*/}
                <div className="m-8 flex flex-col sm:flex-row gap-4">
                    <BookingButton></BookingButton>
                </div>

                {/*Social Proof goes here*/}
                <div>
                    <SocialProof></SocialProof>
                </div>
            </div>

        </section>
    </div>;
}