import { SiFacebook, SiGithub } from "@icons-pack/react-simple-icons";
import { Code2, Layers, Rocket } from "lucide-react";

export const MenuNavbar = [
  {
    id: 1,
    name: "Beranda",
    href: "/",
  },
  {
    id: 2,
    name: "Proyek",
    href: "/proyek",
  },
  {
    id: 3,
    name: "Blog",
    href: "/blog",
  },
  {
    id: 4,
    name: "Kontak",
    href: "/kontak",
  },
];

export const SocialMediaIcon = [
  {
    icon: SiGithub,
    href: "#",
  },
  {
    icon: SiFacebook,
    href: "#",
  },
];

export const TechStack = [
  {
    name: "ReactJS",
  },
  {
    name: "React Router V7",
  },
  {
    name: "TailwindCSS",
  },
  {
    name: "GO",
  },
  {
    name: "Fiber",
  },
  {
    name: "MySQL",
  },
  {
    name: "Git",
  },
  {
    name: "Github",
  },
  {
    name: "Gitlab",
  },
];

export const CardAbout = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Terbiasa menulis kode dengan rapih agar mudah dikembangkan.",
  },
  {
    icon: Layers,
    title: "Problem Solver",
    description:
      "Terbiasa mencari solusi efisien dan logis dalam pengembangan aplikasi.",
  },
  {
    icon: Rocket,
    title: "Growth Mindset",
    description: "Selalu belajar dan beradaptasi dengan teknologi baru.",
  },
];
