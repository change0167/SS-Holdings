import { useState } from 'react'
import './Fqa.css'
import { faqData, type FaqDataItem } from "./faqData.ts";



type FaqItem = FaqDataItem & {
  open: boolean;
};

function FAQs() {
   const [faq, setFaq] = useState<FaqItem[]>(
    faqData.map((item) => ({ ...item, open: false }))
  );

  const toggleFaq = (index: number) => {
    setFaq((prev) =>
      prev.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : false,
      }))
    );
  };
  return (
   <section id="faqs" className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          </p>
        </div>

        {/* FAQ list */}
        <div className="faq-list">
          {faq.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{item.question}</span>
                <span className={`arrow ${item.open ? "open" : ""}`}>
                  ▼
                </span>
              </button>

              {item.open && (
                <div className="faq-answer">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.answer,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="faq-footer">
          Didn’t find the answer you are looking for?{" "}
          <a href="#contact-us">Contact our support</a>
        </p>
      </div>
    </section>

  )
}

export default FAQs


