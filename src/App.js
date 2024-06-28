import React, { Suspense } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import HomePage from './pages/HomePage';
// import ContactPage from './pages/ContactPage';
// import AboutPage from './pages/AboutPage';
// import TeamPage from './pages/TeamPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import MemberPage from './pages/MemberPage';

import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import Loading from './components/Loading';

import { pages } from './constants/pages';

// const router = createBrowserRouter( [
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <HomePage />
//       },
//       {
//         path: 'contact',
//         element: <ContactPage />
//       },
//       {
//         path: 'about',
//         element: <AboutPage />
//       },
//       {
//         path: 'team',
//         children: [
//           {
//             path: '',
//             element: <TeamPage />,
//           },
//           {
//             path: ':memberId',
//             element: <MemberPage />
//           }
//         ]
//       },
//       {
//         path: 'auth',
//         children: [
//           {
//             path: 'register',
//             element: <RegisterPage />
//           },
//           {
//             path: 'login',
//             element: <LoginPage />
//           },
//         ]
//       },

//       {
//         path: '*',
//         element: <NotFoundPage />
//       },
//     ]
//   }
// ] )

// const App = () => {
//   return <RouterProvider router={router} />
// }

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Layout />}>
//           {/* <Route path='' element={<HomePage />} /> */}
//           <Route index element={<HomePage />} />
//           <Route path='contact' element={<ContactPage />} />
//           <Route path='about' element={<AboutPage />} />

//           {/* <Route path='team' element={<TeamPage />} /> */}
//           {/* <Route path='team/:memberId' element={<MemberPage />} /> */}
//           <Route path='team'>
//             <Route index element={<TeamPage />} />
//             <Route path=':memberId' element={<MemberPage />} />
//           </Route>

//           {/* <Route path='auth/login' element={<LoginPage />} /> */}
//           {/* <Route path='auth/register' element={<RegisterPage />} /> */}
//           <Route path='auth'>
//             <Route path='login' element={<LoginPage />} />
//             <Route path='register' element={<RegisterPage />} />
//           </Route>
//         </Route>
//         <Route path='*' element={<NotFoundPage />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {
              pages.map( ( { url, page: Page } ) => <Route key={url} path={url} element={<Page />} /> )
            }
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App