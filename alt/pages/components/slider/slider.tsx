import styles from "./slider.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
interface Props {}

export default function Slider(props: Props) {
  const slider = {
    title1: "OUR NEW ERA",
    title2: "STARTS HERE.",
    sliderData: [
      {
        date: "2003",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        date: "2004",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        date: "2007",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        date: "2009-10",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        date: "2012",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
      {
        date: "2015",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
      },
    ],
  };
  const responsive = {
    0: { items: 1 },
    700: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 },
  };
  const items = slider.sliderData.map((sliderData, index) => (
    <div className={styles.data} key={index} data-value={index}>
      <div className={styles.dataDate}>{sliderData.date}</div>
      <div className={styles.dataText}>{sliderData.text}</div>
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
      <div className={styles.contentSliderTitle}>{slider.title1}</div>
      <div className={styles.contentSliderTitle}>{slider.title2}</div>
      <hr />
      <div className={styles.contentSlider}>
        <AliceCarousel
          mouseTracking
          items={items}
          disableDotsControls
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
