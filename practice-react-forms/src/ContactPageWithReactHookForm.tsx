import { FieldError, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from './ValidationError';

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPageWithReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    mode: "onBlur",
    reValidateMode: "onBlur"
  });
  const navigate = useNavigate();
  function onSubmit(contact: Contact) {
    console.log('Submitted Details: ', contact);
    navigate(`/thank-you/${contact.name}`);
  }
  const fieldStyle = 'flex flex-col mb-2';
  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? 'border-red-500' : '';
  }
  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">If you enter your details we'll get back to you as soon as we can.</p>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            // autoComplete='off'
            required
            {...register('name', {
              required: 'You must enter your name',
            })}
            className={getEditorStyle(errors.name)}
          />
          <ValidationError fieldError={errors.name} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            required
            {...register('email', {
              required: 'You must enter your email address',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Entered value does not match email format',
            }}
        )}
            className={getEditorStyle(errors.email)}
          />
          <ValidationError fieldError={errors.email} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Reason you need to contact us</label>
          <select
            id="reason"
            required
            {...register('reason', {
              required: 'You must provide the reason for contacting us',
            })}
            className={getEditorStyle(errors.reason)}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          <ValidationError fieldError={errors.reason} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" {...register('notes')} />
        </div>
        <div>
          <button type="submit" className="mt-2 px-6 font-semibold bg-black text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
