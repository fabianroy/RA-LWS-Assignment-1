import './App.css'
import Banner from './components/Banner';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Trial from './components/Trial';

function App() {

    return (
        <>
            <header>
                <nav>
                    <Navbar />
                </nav>
                <Banner />
            </header>

            <main>
                <section>
                    <Services />
                    <Testimonial />
                    <Pricing />
                    <FAQ />
                    <Trial />
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default App;