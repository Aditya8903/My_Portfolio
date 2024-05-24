import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'; // Import CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setShowSuccessMessage(true); 
          setTimeout(() => setShowSuccessMessage(false), 5000); // Hide success message after 5 seconds
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className={styles.section}>
      <div className={styles.topHeader}>
        <h1>Contact Information</h1>
        <span>I would love to hear from you!</span>
      </div>
      <div className={styles.contactForm}>
        <div className={styles.row}>
          <div className={styles.col}>
            <form ref={form} onSubmit={sendEmail} className={styles.formControl}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                className={styles.inputField}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                className={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Message</label>
              <textarea
                name="message"
                className={styles.textArea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className={styles.formButton}>
                <input type="submit" value="Send" className={styles.btn} />
              </div>
            </form>
          </div>
          <div className={styles.col + ' ' + styles.contactInfo}>
  <h2>Find Me</h2>
  <p>
    <FontAwesomeIcon icon={faPhone} /> (+91) 9572934398
  </p>
  <p>
    <FontAwesomeIcon icon={faEnvelope} /> aditya892003@gmail.com
  </p>
</div>

        </div>
      </div>
      {showSuccessMessage && <div className={styles.successMessage}>Message sent successfully!</div>}
    </section>
  );
}

export default Contact;
