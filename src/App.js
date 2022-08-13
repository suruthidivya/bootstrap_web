
import './App.css';
import {Navbars, LearnBtn} from './components';
import {Container, Row} from 'react-bootstrap';


function App() {
const learn_sbt = () => alert('learn');

  return (
    <>
      <Navbars />
      <section>
     <Container>
      <div className='banner'>
        <h1>Hello, World!</h1>
        <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
        <p><LearnBtn id="learn_btn" className="btn_learn" value={"Learn more »"} onClick = {learn_sbt}/></p>
      </div>
     </Container>
     </section>
     <section>
      <Container>
        <Row>
          <div class="bodytext">
            <h1>Heading</h1>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <p><LearnBtn id="view_details" className="view_details" value={"View Details »"}/></p>
          </div>
          <div class="bodytext">
            <h1>Heading</h1>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <p><LearnBtn id="view_details" className="view_details" value={"View Details »"}/></p>
          </div>
          <div class="bodytext">
            <h1>Heading</h1>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            <p><LearnBtn id="view_details" className="view_details" value={"View Details »"}/></p>
          </div>
          </Row>
          <hr/>
      </Container>
     </section>
     <Container>
     <div class="container">
          <p style={{color:"#333"}}>&copy;  Company 2022</p>    
      </div>
     </Container>
    </>
  );
}

export default App;
