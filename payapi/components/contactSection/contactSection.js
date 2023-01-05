import styles from "./contactSection.module.scss";
import Form from "../elements/form/form";
import { FadeInWhenVisibleLeft, FadeInWhenVisibleRight } from "../utils";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.heading}>
        <h1 className="header3Large">
          Submit a help request and we'll get in touch shortly.
        </h1>
      </div>
      <section className={styles.formClients}>
        <FadeInWhenVisibleLeft>
          <form className={styles.formSection}>
            <input
              className="form_input"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="form_input"
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input
              className="form_input"
              type="text"
              id="company"
              name="company"
              placeholder="Company Name"
              required
            />
            <input
              className="form_input"
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
            />
            <textarea
              className="form_input"
              type="text"
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <label className="form-wrapper-check">
              <input
                className="form_checkbox"
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <span className="form_checkbox-label">
                <img src="./checkmark.svg" alt="checkmark" />
              </span>
              Stay up-to-date with company announcements and updates to our API
            </label>
            <button className="secondaryDark">Submit</button>
          </form>
        </FadeInWhenVisibleLeft>
        <section className={styles.clients}>
          <h2 className="header4">
            Join the thousans of innovators already building with us
          </h2>
          <div className={styles.clientsGrid}>
            <img src="./shared/desktop/tesla.svg" alt="tesla" />
            <img src="./shared/desktop/microsoft.svg" alt="microsoft" />
            <img src="./shared/desktop/hewlett-packard.svg" alt="hewlett" />
            <img src="./shared/desktop/oracle.svg" alt="oracle" />
            <img src="./shared/desktop/google.svg" alt="google" />
            <img src="./shared/desktop/nvidia.svg" alt="nvidia" />
          </div>
        </section>
      </section>
      <Form />
    </section>
  );
}
