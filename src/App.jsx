
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Accounts from './pages/Accounts';
import CreditCards from './pages/CreditCards';
import Loans from './pages/Loans';
import Deposits from './pages/Deposits';
import Calculators from './pages/Calculators';
import OpenAccount from './pages/OpenAccount';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';
import ApplyCard from './pages/ApplyCard';
import ApplyLoan from './pages/ApplyLoan';
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/rates" element={<Deposits />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/open-account" element={<OpenAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/apply-card" element={<ApplyCard />} />
        <Route path="/apply-loan" element={<ApplyLoan />} />
        
        <Route
          path="*"
          element={
            <div style={{ padding: '100px', textAlign: 'center' }}>
              <h1>Coming Soon</h1>
              <p>This NovaBank page is under development.</p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
