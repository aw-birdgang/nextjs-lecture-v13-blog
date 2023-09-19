import NavBar from "@/components/NavBar";

function App({ Component, pageProps }) {
    console.log('App ender')
  return (
    <>
        <header>
            <NavBar />
        </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
