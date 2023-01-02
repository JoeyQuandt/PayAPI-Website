import styles from "./pricing.module.scss";

export default function PricingCard(props) {
  const benefits = props.benefitsList;
  const fullBenefits = [
    "Transactions",
    "Auth",
    "Identity",
    "Investments",
    "Assets",
    "Liabilities",
    "Income",
  ];

  const benefitsElements = fullBenefits.map((benefit) => {
    return benefits.includes(benefit) ? (
      <li>
        <img src="./mark.svg" />
        {benefit}
      </li>
    ) : (
      <li className={`${styles.fadedList} faded`}>{benefit}</li>
    );
  });

  return (
    <div className={styles.PricingCard}>
      <h2 className="header4">{props.title}</h2>
      <p>{props.description}</p>
      <h3 className="header1Small">${props.price}</h3>
      <ul className={styles.Benefits}>
        <span className={styles.line}></span>
        {benefitsElements}
        <span className={styles.line}></span>
      </ul>
      <button className="secondaryDark">Request Acces</button>
    </div>
  );
}
