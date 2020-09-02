import React from 'react'

function FAQ({faq,index,toggleFAQ}) {

    const toggleFAQchild = () =>{
        toggleFAQ(index)
    }
    return (
        <div className={"faq " + (faq.open? 'open': '')}
             onClick={toggleFAQchild}
            >
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default FAQ
