import React, { FunctionComponent } from "react";
import styles from "../styles/Global";

interface OwnProps {
  assetUrl: string;
  link: string;
}

type Props = OwnProps;

const Button: FunctionComponent<Props> = ({ assetUrl, link }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      <div className={"flex flex-col justify-start ml-4"}>
        <p className={`${styles.btnText} text-xs font-normal`}>View it on</p>
        <p className={`${styles.btnText} text-sm font-bold`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
