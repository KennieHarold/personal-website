import fileTypeNode from "@iconify/icons-vscode-icons/file-type-node";
import firebaseIcon from "@iconify/icons-logos/firebase";
import reactIcon from "@iconify/icons-logos/react";
import fileTypeCss from "@iconify/icons-vscode-icons/file-type-css";
import pythonIcon from "@iconify/icons-logos/python";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import mongodbIcon from "@iconify/icons-simple-icons/mongodb";
import ethereum from "@iconify/icons-logos/ethereum";
import fileTypeLightSolidity from "@iconify/icons-vscode-icons/file-type-light-solidity";
import hardhatIcon from "@iconify/icons-logos/hardhat-icon";

const skillItems = [
  {
    key: "skill-react",
    icon: reactIcon,
    name: "React / React Native",
    styles: {
      marginRight: 15,
    },
  },
  {
    key: "skill-node",
    icon: fileTypeNode,
    name: "Node.js",
    styles: {
      marginRight: 15,
    },
  },
  {
    key: "skill-mongodb",
    icon: mongodbIcon,
    name: "MongoDB",
    styles: {
      marginRight: 7,
      color: "#0FA24C",
    },
  },
  {
    key: "skill-firebase",
    icon: firebaseIcon,
    name: "Firebase",
    styles: {
      marginRight: 20,
    },
  },
  {
    key: "skill-css",
    icon: fileTypeCss,
    name: "CSS",
    styles: {
      marginRight: 15,
    },
  },
  {
    key: "skill-typescriptIcon",
    icon: typescriptIcon,
    name: "Typescript",
    styles: {
      marginRight: 20,
    },
  },
  {
    key: "skill-python",
    icon: pythonIcon,
    name: "Python",
    styles: {
      marginRight: 20,
    },
  },
  {
    key: "skill-ethereum",
    icon: ethereum,
    name: "Ethereum",
    styles: {
      marginRight: 15,
    },
  },
  {
    key: "skill-solidity",
    icon: fileTypeLightSolidity,
    name: "Solidity",
    styles: {
      marginRight: 15,
    },
  },
  {
    key: "skill-hardhat",
    icon: hardhatIcon,
    name: "Hardhat",
    styles: {
      marginRight: 15,
    },
  },
];

export default skillItems;
