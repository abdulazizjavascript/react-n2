// import AboutPage from "../pages/AboutPage";
// import ContactPage from "../pages/ContactPage";
// import HomePage from "../pages/HomePage";
// import LoginPage from "../pages/LoginPage";
// import MemberPage from "../pages/MemberPage";
// import PostsPage from "../pages/PostsPage";
// import RegisterPage from "../pages/RegisterPage";
// import TeamPage from "../pages/TeamPage";

import { lazy } from "react";
// import BakhodirPage from '../pages/BakhodirPage'

const AboutPage = lazy( () => import( "../pages/AboutPage" ) );
const ContactPage = lazy( () => import( "../pages/ContactPage" ) );
const HomePage = lazy( () => import( "../pages/HomePage" ) );
const LoginPage = lazy( () => import( "../pages/LoginPage" ) );
const MemberPage = lazy( () => import( "../pages/MemberPage" ) );
const PostsPage = lazy( () => import( "../pages/PostsPage" ) );
const RegisterPage = lazy( () => import( "../pages/RegisterPage" ) );
const TeamPage = lazy( () => import( "../pages/TeamPage" ) );
const BakhodirPage = lazy( () => import( "'../pages/BakhodirPage" ) );

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
    url: "posts",
    page: BakhodirPage,
    name: "Posts"
  },
]

export { pages }