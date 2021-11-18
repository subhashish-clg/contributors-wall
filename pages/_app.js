import "../styles/index.css";
import Head from "next/head";

const App = ({ Component, props }) => {
  return (
    <>
      <Head>
        <title>Contributors wall</title>
      </Head>
      <Component {...props} />
    </>
  );
};

export default App;
