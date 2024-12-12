import styles from "./faq.module.scss";
import Image from "next/image";
import Insight1 from "../../../images/insight1.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";

interface Props {}

export default function Faq(props: Props) {
  const FAQ = {
    faqData: [
      {
        question: "Do you offer 24hr support?",
        text: "Yes we do!",
      },
      {
        question: "Do you sell Xerox printers?",
        text: "Yes we do!",
      },
      {
        question: "Can I upgrade my support package?",
        text: "Yes we do!",
      },
      {
        question: "Do you offer 24hr support?",
        text: "Yes we do!",
      },
      {
        question: "Do you sell Xerox printers?",
        text: "Yes we do!",
      },
      {
        question: "Do you sell Xerox printers?",
        text: "Yes we do!",
      },
      {
        question: "Do you sell Xerox printers?",
        text: "Yes we do!",
      },
      {
        question: "Do you sell Xerox printers?",
        text: "Yes we do!",
      },
      {
        question: "Do you sell Xerox printers?",
        text: "Yes we do!",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.business}>
        <h3 className={styles.title}>The business process problem solvers.</h3>
        <div className={styles.businessText}>
          <p className={styles.left}>
            Recognising your frustrations with your print environment, IT
            services, document management & communications and finding a
            solution to overcome them.
          </p>
          <p className={styles.right}>
            Recognising your frustrations with your print environment, IT
            services, document management & communications and finding a
            solution to overcome them.
          </p>
        </div>
      </div>

      <div className={styles.insights}>
        <div className={styles.insightsWrapper}>
          <h2 className={styles.tile}>Insights & News</h2>
          <div className={styles.top}>
            <Image src={Insight1} alt="" />
            <p className={styles.date}>15/06/2024</p>
            <p className={styles.summary}>
              What is Microsoft Loop and how does it work
            </p>
          </div>
          <div className={styles.divider}>
            <div className={styles.left}>
              <Image src={Insight1} alt="" />
              <p className={styles.date}>15/06/2024</p>
              <p className={styles.summary}>
                Boost productivity within your law firm with xerox technology
              </p>
            </div>
            <div className={styles.right}>
              <Image src={Insight1} alt="" />
              <p className={styles.date}>15/06/2024</p>
              <p className={styles.summary}>
                What is Microsoft Loop and how does it work
              </p>
            </div>
          </div>
        </div>

        <div className={styles.faqWrapper}>
          <div>
            <h2 className={styles.title}>FAQ</h2>
            {FAQ.faqData.map((faq, index) => (
              <div key={index}>
                <hr className={styles.hr} />
                <Accordion
                  sx={{
                    width: { xs: "100%", sm: "600px" },
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <AccordionSummary
                    sx={{
                      padding: "0",
                      margin: "0",
                    }}
                    expandIcon={
                      <AddIcon
                        sx={{
                          fontSize: "13px",
                          color: "white",
                          paddingRight: "13px",
                        }}
                      />
                    }
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <p className={styles.summary}>{faq.question}</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className={styles.summary}>{faq.text}</p>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
            <hr className={styles.hr} />
          </div>
          <a className={styles.allFaq}>View all FAQs</a>
        </div>
      </div>
    </div>
  );
}
