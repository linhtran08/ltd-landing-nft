import React, { FunctionComponent } from "react";
import styles from "../styles/Global";
import assets from "../assets";

interface OwnProps {}

type Props = OwnProps;

const Features: FunctionComponent<Props> = (props) => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology, React
            Native.
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText={"React Native"} />
          <FeatureCard iconUrl={assets.javascript} iconText={"Javascript"} />
        </div>
      </div>
    </div>
  );
};

export default Features;

const FeatureCard: FunctionComponent<{ iconUrl: string; iconText: string }> = ({
  iconUrl,
  iconText,
}) => {
  return (
    <div className={`${styles.featureCard}`}>
      <img src={iconUrl} alt={iconText} className={styles.featureImg} />
      <p className={styles.featureText}>{iconText}</p>
    </div>
  );
};
