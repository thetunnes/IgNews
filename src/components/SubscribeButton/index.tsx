import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";

import styles from "./styles.module.scss";

export function SubscribeButton() {
  const [session] = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    if (session.activeSubscription) {
      router.push("/posts");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJS();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert("Error: " + err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
