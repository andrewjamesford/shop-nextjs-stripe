import Head from "next/head";
// Import the layout components
import { Layout } from "../components/layout";
import { Products } from "../components/products";
export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products" />
      </Head>
      {/* Add the Layout component to the Home page. */}
      <Layout>
        <Products products={products.data} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/api/products`);
  const products = await res.json();

  // Pass data to the page via props
  return { props: { products } };
}
