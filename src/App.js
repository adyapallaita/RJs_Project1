
import './App.css';
import Header_nav from './componets/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Leftimagecontainer from './componets/Leftcontainer';
import Rightpara from './componets/Rightcontainer';
import Midpara from './componets/Midparabig';
import Card_section from './componets/Cardsection';
import Footer from './componets/Footer';
import Form_test from './componets/Form';
import './assets/css/main.css'
import LeftFrom from './componets/LeftForm';




function App() {
  return (
   <>
  
   <div>
    <Header_nav/>
   </div>
   <div>
    <div className='container'>
      <div className='row'>
      <div className='col-md-6'>
      <Leftimagecontainer/>
      </div>
      <div className='col-md-6'>
      <Rightpara/>
      </div>
      </div>
      
    </div>
    <Midpara/>
    <Card_section/>
    <section className='form_section'>
    <div className='container '>
    <div className='row'>
    <div className='col-md-6 '>
    <LeftFrom/>
    </div>
    <div className='col-md-6 form_custom'>
    <Form_test/>
    </div>
    </div>
    </div>
    </section>
    <Footer/>
   </div>
   </>
  );
}

export default App;
