import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header'; // Update if needed
import Footer from './components/Footer'; // Update if needed
import Chatbot from './components/chatbot/Chatbot';
import Faq from './components/Faq';
import Help from './components/Help';
import Slider from './components/Slider';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" exact>
              <Slider />
              <div className="chatbot-container">
                <Chatbot />
              </div>
            </Route>

            <Route path="/faq" component={Faq} />
            <Route path="/help" component={Help} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>

  );
};

export default App;
