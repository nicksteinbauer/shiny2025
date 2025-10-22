import {useState, useCallback} from 'react';

import * as emailjs from 'emailjs-com';
import {Button, Form, Label, Input, FormGroup, FormFeedback} from 'reactstrap';
import {isEmail} from 'validator';
import Recaptcha from 'react-recaptcha';
import Swal from 'sweetalert2';

const US_STATES = [
  
  { code: 'OH', name: 'Ohio' }
];

const initialData = {
  firstname: '',
  email: '',
  message: '',
  streetaddress: '',
  city: '',
  state: '', // <-- add state
};

export default function ContactForm() {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isVerified, setIsVerified] = useState(false);

  const recaptchaLoaded = useCallback(() => {
    console.log('Captcha successfully Loaded');
  }, []);

  const verifyCallback = useCallback((response) => {
    if (response) setIsVerified(true);
  }, []);

  const handleChange = useCallback((e) => {
    const {name, value} = e.target;
    setData((d) => ({ ...d, [name]: value }));
    setErrors((err) => ({ ...err, [name]: '' }));
  }, []);

  const validate = useCallback(() => {
    const err = {};
    if (!data.firstname?.trim()) err.firstname = 'First Name required';

    if (!data.phone?.trim()) err.phone = 'Phone required';

    if (!data.email?.trim()) {
      err.email = 'Email required';
    } else if (!isEmail(data.email)) {
      err.email = 'Email must be valid';
    }


    if (!data.message?.trim()) err.message = 'Message required';
    return err;
  }, [data]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const err = validate();

    if (Object.keys(err).length === 0 && isVerified) {
      try {
        await emailjs.sendForm('webnicksteinbauer', 'shinycontact', e.target, 'user_vOc0ylPHeC2nCdyLQJAiW');
        setData(initialData);
        setIsVerified(true);
        Swal.fire({ title: 'Email Successfully Sent to Shiny Windows', icon: 'success' });
      } catch (sendErr) {
        Swal.fire({ title: 'Failed to send email', text: 'Please try again.', icon: 'error' });
      }
    } else {
      setErrors(err);
    }
  }, [isVerified, validate]);

  return (
    <div id="contact-form" className="contact-form">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="line">
          <div className="full">
            <Label className="text-muted" htmlFor="firstname">Name</Label>
            <Input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Name"
              value={data.firstname}
              invalid={!!errors.firstname}
              onChange={handleChange}
            />
            <FormFeedback>{errors.firstname}</FormFeedback>
          </div>
        </FormGroup>

        <FormGroup className="line flex-sm gap10 justify">
          <div className="full">
            <Label className="text-muted" htmlFor="phone">Phone</Label>
            <Input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={data.phone}
              invalid={!!errors.phone}
              onChange={handleChange}
            />
            <FormFeedback>{errors.phone}</FormFeedback>
          </div>
          <div className="full">
            <Label className="text-muted" htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={data.email}
              invalid={!!errors.email}
              onChange={handleChange}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </div>
        </FormGroup>

        <FormGroup className="line">
          <Label className="text-muted" htmlFor="streetaddress">Street Address</Label>
          <Input
            type="text"
            id="streetaddress"
            name="streetaddress"
            placeholder="Address"
            value={data.streetaddress}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="line flex-sm gap10 justify">
          <div className="full">
            <Label className="text-muted" htmlFor="city">City</Label>
            <Input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={data.city}
              onChange={handleChange}
            />
          </div>

          <div className="full">
            <Label className="text-muted" htmlFor="state">State</Label>
            <Input
              type="select"
              id="state"
              name="state"
              placeholder="State"
              value={data.state}
              onChange={handleChange}
            >
              <option value="">Select a state…</option>
              {US_STATES.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </Input>
          </div>

          <div className="full">
            <Label className="text-muted" htmlFor="zip">Zip Code</Label>
            <Input
              type="text"
              id="zip"
              name="zip"
              placeholder="Zip"
              value={data.zip}
              onChange={handleChange}
            />
          </div>
        </FormGroup>

        


        <FormGroup className="line">
          <Label className="text-muted" htmlFor="message">Message</Label>
          <Input
            type="textarea"
            id="message"
            name="message"
            placeholder="Message"
            value={data.message}
            invalid={!!errors.message}
            onChange={handleChange}
          />
          <FormFeedback>{errors.message}</FormFeedback>
        </FormGroup>

        <FormGroup className="line">
          <Recaptcha
            sitekey="6LdPaukfAAAAAKLclBIJkpgBtqjCk6EsdtIjMUKe"
            render="explicit"
            onloadCallback={recaptchaLoaded}
            verifyCallback={verifyCallback}
          />
          <FormFeedback className={isVerified === false ? 'feedback-active' : 'feedback-inactive'}>
            Confirm that you are human.
          </FormFeedback>
        </FormGroup>

        <FormGroup className="line">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}
