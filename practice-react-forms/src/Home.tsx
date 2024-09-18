import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col py-10 max-w-mc mx-auto">
        <h2 className="text-xl font-bold text-slate-600">
          <Link to={`contactFormUncontrolled`} className="hover:underline block mb-2">
            Contact Form Uncontrolled
          </Link>
          <Link to={`contactFormControlled`} className="hover:underline block">
            Contact Form With State
          </Link>
        </h2>
      </div>
    </div>
  );
}
