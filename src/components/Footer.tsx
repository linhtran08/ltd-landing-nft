import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = (props) => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://ltd-porfolio.vercell.app" className="hover:underline">
          Ltd™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
