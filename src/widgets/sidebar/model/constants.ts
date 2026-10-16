import cash from "./../../../assets/svg/sidebar/cash.svg";
import exit from "./../../../assets/svg/sidebar/exit.svg";
import home from "./../../../assets/svg/sidebar/home.svg";
import profile from "./../../../assets/svg/sidebar/profile.svg";
import setting from "./../../../assets/svg/sidebar/setting.svg";

export const NAV_ITEMS = [
  { href: "/", label: "Home", icon: home },
  { href: "/statement", label: "Statement", icon: cash },
  { href: "/profile", label: "Profile", icon: profile },
  { href: "/setting", label: "Setting", icon: setting },
  { href: "/logout", label: "Logout", icon: exit },
];
