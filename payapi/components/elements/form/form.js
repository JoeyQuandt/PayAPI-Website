import styles from "./form.module.scss";

export default function Form() {
  return (
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
  );
}
