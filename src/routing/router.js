import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import pages from '../pages';
import Navbar from './Navbar';
import loaders from './loaders';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function NavbarWrapper() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    errorElement: <pages.ErrorPage />,
    children: [
      {
        path: '/',
        element: <pages.LandingPage />,
        loader: loaders.landingPageLoader,
      },
      {
        path: '/mawwal',
        element: <pages.MawwalPage />,
        loader: loaders.mawwalMainLoader,
      },
      {
        path: '/mawwal/:category',
        element: <pages.MawwalListPage />,
        loader: loaders.mawwalLoader,
      },
      {
        path: '/mawwal/:category/:id',
        element: <pages.MawwalShowPage />,
        loader: loaders.mawwalShowLoader,
      },
      {
        path: '/journalism',
        element: <pages.JournalismPage />,
        loader: loaders.journalismPageLoader,
      },
      {
        path: '/journalism/aak/:category',
        element: <pages.AakPage />,
        loader: loaders.aakLoader,
      },
      {
        path: '/journalism/:publisher',
        element: <pages.PublisherPage />,
        loader: loaders.publisherPageLoader,
      },
      {
        path: '/journalism/:publisher/:category/:id',
        element: <pages.ArticlePage />,
        loader: loaders.articlePageLoader,
      },
      {
        path: '/publications',
        element: <pages.PublicationsPage />,
        loader: loaders.publicationsLoader,
      },
      {
        path: '/publications/:name',
        element: <pages.PublicationPage />,
        loader: loaders.publicationLoader,
      },
      {
        path: '/theatre',
        element: <pages.TheatrePage />,
        loader: loaders.playsLoader,
      },
      {
        path: '/theatre/:key',
        element: <pages.PlayPage />,
        loader: loaders.playLoader,
      },
      {
        path: '/interviews',
        element: <pages.InterviewsPage />,
        loader: loaders.interviewsLoader,
      },
      {
        path: '/photography',
        element: <pages.PhotographyPage />,
        loader: loaders.photographyLoader,
      },
      {
        path: '/photography/:category',
        element: <pages.PhotographyCategoryPage />,
        loader: loaders.photographyCategoryLoader,
      },
      {
        path: '/photography/:category/:id',
        element: <pages.PhotoPage />,
        loader: loaders.photoLoader,
      },
      {
        path: '/contact-us',
        element: <pages.ContactUs />,
      },
      {
        path: '/contact-us-success',
        element: <pages.ContactSuccess />,
      },
      {
        path: '/contact-us-error',
        element: <pages.ContactError />,
      },
    ],
  },
]);

export default router;
