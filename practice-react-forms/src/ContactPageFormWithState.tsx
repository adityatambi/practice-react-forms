import { FormEvent, useState } from 'react';
import { Form, redirect, useNavigate } from 'react-router-dom';

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPageControlled() {
  const [contact, setContact] = useState<Contact>({ name: '', email: '', reason: '', notes: '' });
  const fieldStyle = 'flex flex-col mb-2';
  const navigate = useNavigate();
  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submitted details :',contact);
    navigate(`/thank-you/${contact.name}`);
  }
  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>
      <Form method="post" onSubmit={handleSubmit}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            // autoComplete='off'
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select
            id="reason"
            value={contact.reason}
            onChange={(e) => setContact({ ...contact, reason: e.target.value })}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea
            id="notes"
            value={contact.notes}
            onChange={(e) => setContact({ ...contact, notes: e.target.value })}
          />
        </div>
        <div>
          <button type="submit" className="mt-2 px-6 font-semibold bg-black text-white">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}