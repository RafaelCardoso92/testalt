import styles from "./slider.module.scss";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import sliderImg from "../../../images/slider.png";
interface Props {}

export default function Slider(props: Props) {
  const slider = {
    title1: "OUR NEW ERA",
    title2: "STARTS HERE.",
    sliderData: [
      {
        name: "Paul Johnson, Director",
        place: "Nottingham Forest Football Club",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: sliderImg,
      },
      {
        name: "Paul Johnson, Director",
        place: "Nottingham Forest Football Club",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: sliderImg,
      },
      {
        name: "Paul Johnson, Director",
        place: "Nottingham Forest Football Club",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: sliderImg,
      },
      {
        name: "Paul Johnson, Director",
        place: "Nottingham Forest Football Club",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: sliderImg,
      },
      {
        name: "Paul Johnson, Director",
        place: "Nottingham Forest Football Club",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
        img: sliderImg,
      },
    ],
  };
  const responsive = {
    0: { items: 1 },
  };
  const items = slider.sliderData.map((sliderData, index) => (
    <div className={styles.data} key={index} data-value={index}>
      <div className={styles.dataImg}>
        <Image src={sliderData.img} alt="test" />
      </div>
      <div className={styles.dataWrapper}>
        <div className={styles.dataText}>{sliderData.text}</div>
        <div className={styles.dataDate}>{sliderData.name}</div>
        <div className={styles.dataDate}>{sliderData.place}</div>
      </div>
    </div>
  ));
  const renderNextButton = () => {
    return <div className={styles.Rightbutton} />;
  };

  const renderPrevButton = () => {
    return <div className={styles.Leftbutton} />;
  };
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.contentSlider}>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="responsive"
          keyboardNavigation={true}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </div>
    </div>
  );
}
