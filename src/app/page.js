import Hero from './components/Hero';
import Category from './components/Category';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Hero className="pb-4"/>
      <Category/>
      <Footer/>
    </div>
  );
}
