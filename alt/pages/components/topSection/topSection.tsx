import styles from "./topSection.module.scss";

interface Props {}
export default function TopSection(props: Props) {
  const topSection = {
    topText:
      "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.”",
    title: "Lorem Ipsum",
    text1:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    text2:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    iframe: {
      src: "https://www.youtube.com/embed/IKZHHeGbMpk",
      title: "GardX Team BMW Q&A at Thruxton",
    },
    videoCaption: " Video Caption",
  };
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentTop}>{topSection.topText}</div>
      <div className={styles.contentWrap}>
        <div className={styles.contentLeft}>
          <div className={styles.verticalWrap}>
            <div className={styles.contentVideo}>
              <iframe
                width="100%"
                height="100%"
                src={topSection.iframe.src}
                title={topSection.iframe.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className={styles.contentCaption}>
              <span>{topSection.videoCaption}</span>
            </div>
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.verticalWrap}>
            <div className={styles.contentFloatTitle}>{topSection.title}</div>
            <div className={styles.contentFloatText}>{topSection.text1}</div>
            <div className={styles.contentFloatText}>{topSection.text2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
