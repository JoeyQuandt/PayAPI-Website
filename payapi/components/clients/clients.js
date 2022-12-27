import styles from "./clients.module.scss";
import Image from "next/image";

export default function Clients() {
  return (
    <section id="clients" className={styles.clients}>
      <div className={styles.clientsLogo}>
        <img src="./home/clients/tesla.svg" alt="tesla" />
        <img src="./home/clients/microsoft.svg" alt="microsoft" />
        <img src="./home/clients/hewlett.svg" alt="hewlett packard" />
        <img src="./home/clients/oracle.svg" alt="oracle" />
        <img src="./home/clients/google.svg" alt="google" />
        <img src="./home/clients/nvidia.svg" alt="nvidia" />
      </div>
      <div className={styles.clientsText}>
        <h2 className="header2">Who we worked with</h2>
        <p>
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
        <button className="secondaryLight">About Us</button>
      </div>
    </section>
  );
}
