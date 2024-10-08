import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import {  contactPageActionUncontrolled, ContactPageUncontrolled } from './ContactPageFormUncontrolled';
import { ThankYouPage } from './ThankYouPage';
import { Home } from './Home';
import {  ContactPageControlled } from './ContactPageFormWithState';
import { ContactPageWithReactHookForm } from './ContactPageWithReactHookForm';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/contactFormControlled',
    element: <ContactPageControlled />,
  },
  {
    path: '/contactFormUncontrolled',
    element: <ContactPageUncontrolled />,
    action: contactPageActionUncontrolled,
  },
  {
    path: '/contactFormWithReactHookForm',
    element: <ContactPageWithReactHookForm />
  },
  {
    path: '/thank-you/:name',
    element: <ThankYouPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
