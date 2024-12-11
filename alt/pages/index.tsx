import styles from "../styles/Home.module.scss";
import Clients from "./components/clients/clients";
import SectionContainer from "./components/sectionContainer/sectionContainer";
import Slider from "./components/slider/slider";
import MidSection from "./components/midSection/midSection";
import TopSection from "./components/topSection/topSection";
import Menu from "./components/menu/menu";
import Hero from "./components/hero/hero";
import Block from "./components/block/block";
import block1 from "../images/block1.svg";
import block2 from "../images/block2.svg";
import block3 from "../images/block3.svg";
import block4 from "../images/block4.svg";
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
          <Clients />{" "}
        </div>

        {/* <TopSection /> */}

        {/* <div className={styles.contentFloat}>
          <div className={styles.contentLeft}>
            <div className={styles.contentFloatTitle}>
              {DataText.Index.indexTitle2}
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.contentFloatText}>
              {DataText.Index.indexText}
            </div>
          </div>
        </div> */}

        {/* <MidSection />
        <Slider />
        <SectionContainer />
 
        */}
      </div>
    </div>
  );
}
