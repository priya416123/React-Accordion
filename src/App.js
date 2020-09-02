import React,{ useState} from 'react';
import './App.css';
import Header from './Header';
import FAQ from './FAQ';

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: 'How many programmers does it take to screw in a lightbulb?',
      answer: 'None. We don\'t address hardware issues.',
      open: false
    },
    {
      question: 'Who is the most awesome person?',
      answer: 'You. The viewer.',
      open: false
    },
    {
      question: 'How many questions does it take to make a successful FAQ page?',
      answer: 'This many.',
      open: false
    }
  ])

  const toggleFAQ = index =>{
    setfaqs(faqs.map((faq,i)=>{
      if(i===index){
        faq.open = !faq.open
      }else{
        faq.open = false
      }
      return faq;
    }))
  }
  return (
    <div className="App">
      <Header/>
      <div className="faqs">
        {faqs.map((faq,i)=>{
          return(
           <FAQ key ={i} faq={faq} index={i} toggleFAQ= {toggleFAQ}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
