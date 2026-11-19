
import { useState } from 'react';
import { Search, ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/faq.css';

function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ['All', 'Accounts', 'Credit Cards', 'Loans', 'Deposits'];

  const questions = [
    {
      category: 'Accounts',
      question: 'What types of bank accounts does NovaBank offer?',
      answer: 'Our portfolio demonstration includes Savings, Current, Salary and Premium Savings account options.',
    },
    {
      category: 'Accounts',
      question: 'What documents are generally required to open a bank account?',
      answer: 'Real banks commonly request identity proof, address proof, photographs and other documents depending on their requirements and applicable regulations.',
    },
    {
      category: 'Accounts',
      question: 'Can I open an account online?',
      answer: 'This demo website provides an interactive account-opening form. It does not create a real bank account or process applications.',
    },
    {
      category: 'Credit Cards',
      question: 'What types of credit cards are available?',
      answer: 'The NovaBank demo showcases Classic, Platinum, Travel and Cashback credit card concepts.',
    },
    {
      category: 'Credit Cards',
      question: 'How does a credit card billing cycle work?',
      answer: 'A billing cycle is the period during which card transactions are recorded. The statement summarizes transactions and shows the payment due date.',
    },
    {
      category: 'Credit Cards',
      question: 'What is a credit score?',
      answer: 'A credit score is a numerical indicator of credit history and repayment behaviour. Lenders may use it when evaluating applications.',
    },
    {
      category: 'Loans',
      question: 'What types of loans does NovaBank demonstrate?',
      answer: 'The demo includes Personal Loans, Home Loans, Vehicle Loans and Education Loans.',
    },
    {
      category: 'Loans',
      question: 'How is loan EMI calculated?',
      answer: 'EMI depends on the principal amount, interest rate and repayment period. You can explore the calculation using our Financial Calculators page.',
    },
    {
      category: 'Loans',
      question: 'Can I repay my loan early?',
      answer: 'Early repayment rules depend on the lender, loan agreement and applicable terms. Always check the actual lender’s conditions.',
    },
    {
      category: 'Deposits',
      question: 'What is a Fixed Deposit?',
      answer: 'A Fixed Deposit allows money to be invested for a selected period at an agreed interest rate.',
    },
    {
      category: 'Deposits',
      question: 'What is a Recurring Deposit?',
      answer: 'A Recurring Deposit allows you to deposit a fixed amount regularly over a chosen period and earn interest.',
    },
    {
      category: 'Deposits',
      question: 'How can I calculate deposit returns?',
      answer: 'Use the NovaBank FD and RD calculators to explore estimated returns using sample interest rates.',
    },
  ];

  const filteredQuestions = questions.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;

    const searchText = search.toLowerCase();

    const matchesSearch =
      item.question.toLowerCase().includes(searchText) ||
      item.answer.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="faq-page">

      <section className="faq-hero">
        <span>NOVABANK HELP CENTER</span>
        <h1>Frequently Asked <strong>Questions</strong></h1>
        <p>
          Find answers to common questions about our demonstration
          banking services.
        </p>

        <div className="faq-search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search your question..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpenIndex(null);
            }}
          />
        </div>
      </section>

      <section className="faq-container">

        <div className="faq-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? 'active' : ''
              }
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="faq-list">

          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item, index) => (
              <div
                className={`faq-item ${
                  openIndex === index ? 'open' : ''
                }`}
                key={item.question}
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
                  }
                >
                  <span>{item.question}</span>

                  <ChevronDown
                    size={20}
                    className="faq-chevron"
                  />
                </button>

                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="faq-empty">
              <Search size={35} />
              <h3>No questions found</h3>
              <p>Try another search or select a different category.</p>
            </div>
          )}

        </div>

        <div className="faq-contact-box">
          <MessageCircle size={30} />

          <div>
            <h3>Still Have Questions?</h3>
            <p>
              Visit our Contact Us page to explore the support form.
            </p>
          </div>

          <Link to="/contact">Contact Us →</Link>
        </div>

      </section>

      <p className="faq-disclaimer">
        NovaBank is a fictional portfolio demonstration.
        Information here is educational and not an actual banking offer.
      </p>

    </div>
  );
}

export default FAQ;
