import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/layout";

export default function Success() {
  return (
    <>
      <Head>
        <title>Order Success</title>
        <meta name="description" content="Products" />
      </Head>
      <Layout>
        <h1>Order Success</h1>
        <p>Thanks for ordering.</p>

        <Link href="/">Return to products</Link>
      </Layout>
    </>
  );
}
