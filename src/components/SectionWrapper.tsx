import React, { FunctionComponent } from "react";
import styles from "../styles/Global";
import Button from "./Button";
import assets from "../assets";

interface OwnProps {
  title: string;
  description: string;
  showBtn: boolean;
  mockupImg: string;
  banner: string;
  reverse?: boolean;
}

type Props = OwnProps;

const SectionWrapper: FunctionComponent<Props> = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      } ${banner}`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full md:w-3/4`}
      >
        <div
          className={`${styles.descDiv} ${
            reverse ? "fadeRightMini" : "fadeLeftMini"
          } ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`${styles.h1Text} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText} ${
              reverse ? styles.blackText : styles.whiteText
            }`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link={
                "https://expo.dev/@linhtran08/ltd-app?serviceType=classic&distribution=expo-go"
              }
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`${styles.sectionImg} ${
              reverse ? "fadeRightMini" : "fadeLeftMini"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
