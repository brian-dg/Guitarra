import Link from "next/link";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children,pagina}) => {
    return(
    <div>
        <Head>
            <title>Guitarra {pagina}</title>
            <meta name="description" content="Sitio web de ventana" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header/>
            {children}
            
        <Footer/>
            
    </div>
    );
}


export default Layout;