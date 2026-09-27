
import Hero from '../components/Hero.js';
import NavBar from '../components/NavBar.js';
import ServiceOverview from '../components/ServiceOverview.js'

export default function Home() {
    return(
        <main>
            <Hero>
                <NavBar></NavBar>
            </Hero>

            <ServiceOverview>
                
            </ServiceOverview>
        </main>
    )
}