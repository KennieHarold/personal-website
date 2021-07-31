import appIcon from '@iconify/icons-ls/app';
import fileTypeNode from "@iconify/icons-vscode-icons/file-type-node";
import firebaseIcon from "@iconify/icons-logos/firebase";
import reactIcon from "@iconify/icons-logos/react";
import reduxIcon from "@iconify/icons-logos/redux";
import laptopCode from '@iconify/icons-fa-solid/laptop-code';
import fileTypeHtml from '@iconify/icons-vscode-icons/file-type-html';
import nginxIcon from '@iconify/icons-logos/nginx';
import fileTypeCss from '@iconify/icons-vscode-icons/file-type-css';
import designIcon from '@iconify/icons-whh/design';
import figmaIcon from '@iconify/icons-logos/figma';
import fileTypePhotoshop from '@iconify/icons-vscode-icons/file-type-photoshop';
import adobeXd from '@iconify/icons-file-icons/adobe-xd';
import pencilIcon from '@iconify/icons-fxemoji/pencil';
import brushIcon from '@iconify/icons-fa-solid/brush';
import seleniumIcon from '@iconify/icons-logos/selenium';
import pythonIcon from '@iconify/icons-logos/python';
import googlesheetsIcon from '@iconify/icons-simple-icons/googlesheets';

const skillItems = [
  {
    key: "skillItem-mobileAppDevelopment",
    title: "Mobile App Development",
    rate: 80,
    titleIcon: appIcon,
    toolsList: [
      {
        key: "mobileAppDevelopment-tool-firebase",
        icon: firebaseIcon,
        name: "Firebase",
      },
      {
        key: "mobileAppDevelopment-tool-redux",
        icon: reduxIcon,
        name: "Redux",
      },
      {
        key: "mobileAppDevelopment-tool-node",
        icon: fileTypeNode,
        name: "Node",
      },
      {
        key: "mobileAppDevelopment-tool-react",
        icon: reactIcon,
        name: "React Native",
      },
    ],
  },
  {
    key: "skillItem-webDevelopment",
    title: "Web Development",
    rate: 75,
    titleIcon: laptopCode,
    toolsList: [
      {
        key: "webDevelopment-tool-react",
        icon: reactIcon,
        name: "React",
      },
      {
        key: "webDevelopment-tool-html",
        icon: fileTypeHtml,
        name: "HTML",
      },
      {
        key: "webDevelopment-tool-nginx",
        icon: nginxIcon,
        name: "Nginx",
      },
      {
        key: "webDevelopment-tool-node",
        icon: fileTypeNode,
        name: "Node",
      },
      {
        key: "webDevelopment-tool-css",
        icon: fileTypeCss,
        name: "CSS",
      },
      // {
      //   key: "webDevelopment-tool-linode",
      //   icon: linodeIcon,
      //   name: "Linode",
      // },
    ],
  },
  {
    key: "skillItem-designing",
    title: "Designing",
    rate: 50,
    titleIcon: designIcon,
    toolsList: [
      {
        key: "designing-tool-figma",
        icon: figmaIcon,
        name: "Figma",
      },
      {
        key: "designing-tool-ps",
        icon: fileTypePhotoshop,
        name: "Adobe Photoshop",
      },
      {
        key: "designing-tool-xd",
        icon: adobeXd,
        name: "Adobe XD",
      },
      {
        key: "designing-tool-pencil",
        icon: pencilIcon,
        name: "Paper and Pencil",
      },
    ],
  },
  {
    key: "skillItem-webScraping",
    title: "Web Scraping",
    rate: 55,
    titleIcon: brushIcon,
    toolsList: [
      {
        key: "webScraping-tool-selenium",
        icon: seleniumIcon,
        name: "Selenium",
      },
      {
        key: "webScraping-tool-python",
        icon: pythonIcon,
        name: "Python",
      },
      {
        key: "webScraping-tool-gspread",
        icon: googlesheetsIcon,
        name: "Gspread",
      },
    ],
  },
];

export default skillItems;