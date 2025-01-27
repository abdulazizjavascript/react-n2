// import AboutPage from "../pages/AboutPage";
// import ContactPage from "../pages/ContactPage";
// import HomePage from "../pages/HomePage";
// import LoginPage from "../pages/LoginPage";
// import MemberPage from "../pages/MemberPage";
// import PostsPage from "../pages/PostsPage";
// import RegisterPage from "../pages/RegisterPage";
// import TeamPage from "../pages/TeamPage";
// import BakhodirPage from '../pages/BakhodirPage'

import { lazy } from "react";

const AboutPage = lazy( () => import( "../pages/AboutPage" ) );
const ContactPage = lazy( () => import( "../pages/ContactPage" ) );
const HomePage = lazy( () => import( "../pages/HomePage" ) );
const LoginPage = lazy( () => import( "../pages/LoginPage" ) );
const MemberPage = lazy( () => import( "../pages/MemberPage" ) );
const PostsPage = lazy( () => import( "../pages/PostsPage" ) );
const RegisterPage = lazy( () => import( "../pages/RegisterPage" ) );
const TeamPage = lazy( () => import( "../pages/TeamPage" ) );
const AbdulazizPage = lazy( () => import( "../pages/AbdulazizPage" ) );
const BakhodirPage = lazy( () => import( "'../pages/BakhodirPage" ) );
const ArslonPage = lazy( () => import( "'../pages/ArslonPage" ) );

const pages = [
  {
    url: "",
    page: HomePage,
    name: "Home"
  },
  {
    url: "about",
    page: AboutPage,
    name: "About"
  },
  {
    url: "contact",
    page: ContactPage,
    name: "Contact"
  },
  {
    url: "team",
    page: TeamPage,
    name: "Team"
  },
  {
    url: "team/:memberId",
    page: MemberPage,
  },
  {
    url: "auth/login",
    page: LoginPage,
    name: "Login"
  },
  {
    url: "auth/register",
    page: RegisterPage,
    name: "Register"
  },
  {
    url: "posts",
    page: PostsPage,
    name: "Posts"
  },
  {
    url: "abdulaziz",
    page: AbdulazizPage,
    name: "Abdulaziz"
  },
  {
    url: "posts",
    page: BakhodirPage,
    name: "Posts"
  },
  {
    url: "arslon",
    page: ArslonPage,
    name: "Arslon"
  },
]

export { pages }