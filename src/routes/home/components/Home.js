import About from './About';
import Toggle from './Toggle';

function Home() {
  return (
    <div className="Home">
        <Toggle />
        <section class="two-column">
            <About />
            <div id="col-2">
                <img id="landing-image" src="https://64.media.tumblr.com/9bd6597395a2ee9395ca361103986e9d/tumblr_n37bva6bGA1rqkjmno1_500.gifv" alt="Logo"/>
            </div>
        </section>
    </div>
  );
}

export default Home;