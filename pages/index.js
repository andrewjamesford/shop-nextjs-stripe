import Head from "next/head";
// Import the layout components
import { Layout } from "../components/layout";
export default function Home() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products" />
      </Head>
      {/* Add the Layout component to the Home page. */}
      <Layout></Layout>
    </>
  );
}
