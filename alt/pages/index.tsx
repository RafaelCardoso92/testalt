import styles from "../styles/Home.module.scss";
import Clients from "./components/clients/clients";
import Slider from "./components/slider/slider";
import MidSection from "./components/midSection/midSection";
import Testimonials from "./components/testimonials/testimonials";
import Menu from "./components/menu/menu";
import Hero from "./components/hero/hero";
import Block from "./components/block/block";
import block1 from "../images/block1.svg";
import block2 from "../images/block2.svg";
import block3 from "../images/block3.svg";
import block4 from "../images/block4.svg";
import Faq from "./components/faq/faq";
import Team from "./components/team/team";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Menu />
        <Hero />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.blockContainer}>
          <Block
            logo={block1}
            title="IT Services"
            text="Recognizing your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
          />
          <Block
            logo={block2}
            title="Managed Print Services"
            text="Recognizing your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
          />
          <Block
            logo={block3}
            title="Document Management"
            text="Recognizing your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
          />
          <Block
            logo={block4}
            title="Communications"
            text="Recognizing your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them."
          />
        </div>
        <div className={styles.clients}>
          <Clients />
        </div>
        <div className={styles.midSection}>
          <MidSection />
        </div>
        <div className={styles.testimonials}>
          <Testimonials />
          <Slider />
        </div>
        <div className={styles.faq}>
          <Faq />
        </div>
        <div className={styles.team}>
          <Team />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
