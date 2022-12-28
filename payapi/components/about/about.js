import styles from "./about.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.article}>
        <img src="./home/desktop/test1.svg" alt="code" />
        <div className={styles.articleText}>
          <h2 className="header3Large">Easy to implement</h2>
          <p>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
      <div className={styles.article}>
        <img src="./home/desktop/test.svg" alt="code" />
        <div className={styles.articleText}>
          <h2 className="header3Large">Simple UI & UX</h2>
          <p>
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </div>
      <div className={styles.benefits}>
        <div className={styles.article}>
          <img
            className="logo"
            src="./home/desktop/icon-personal-finances.svg"
            alt="code"
          />
          <div className={styles.articleText}>
            <h2 className="header3Large">Personal Finances</h2>
            <p>
              Consolidate financial data from multiple sources and categorize
              transactions up to 2 years of history. Analyze reports to
              reconcile activities in your account.
            </p>
          </div>
        </div>
        <div className={styles.article}>
          <img
            className="logo"
            src="./home/desktop/icon-banking-and-coverage.svg"
            alt="code"
          />
          <div className={styles.articleText}>
            <h2 className="header3Large">Banking & Coverage</h2>
            <p>
              With our platform, you can speed up account onboarding and support
              ongoing payments for checking, savings, credit card, and brokerage
              accounts.
            </p>
          </div>
        </div>
        <div className={styles.article}>
          <img
            className="logo"
            src="./home/desktop/icon-consumer-payments.svg"
            alt="code"
          />
          <div className={styles.articleText}>
            <h2 className="header3Large">Consumer Payment</h2>
            <p>
              It’s easier to set up secure bank payments with us through a flow
              designed with the user experience in mind. Customers could
              instantly authenticate their account.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.demoForm}>
        <h2 className="header3Large">Ready to start?</h2>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
          ></input>
          <button className="primary">Schedule a Demo</button>
        </form>
      </div>
    </section>
  );
}
