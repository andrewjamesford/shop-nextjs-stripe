import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/layout";

export default function Canceled() {
  return (
    <>
      <Head>
        <title>Order Canceled</title>
        <meta name="description" content="Products" />
      </Head>
      <Layout>
        <h1>Order canceled</h1>
        <p>Your order has been canceled.</p>
        <Link href="/">Return to products</Link>
      </Layout>
    </>
  );
}
