import { firstTheme, secondTheme, thirdTheme } from "./colorThemes.js";

const themes = [
  {
    id: 1,
    title: "Pobierz aplikację",
    icon: "downloadAppIcon.svg",
    mobileImg: "iphoneAppImgMobile.png",
    desktopImg: "iphoneAppImg.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    colorTheme: firstTheme,
  },
  {
    id: 2,
    title: "Porozmawiaj z lekarzem",
    icon: "talkIcon.svg",
    mobileImg: "iphoneTalkImgMobile.png",
    desktopImg: "iphoneTalkImg.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    colorTheme: secondTheme,
  },
  {
    id: 3,
    title: "Otrzymaj receptę",
    icon: "recipeIcon.svg",
    mobileImg: "iphoneRecipeImgMobile.png",
    desktopImg: "iphoneRecipeImg.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    colorTheme: thirdTheme,
  },
];

export default themes;
