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
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;600&display=swap" rel="stylesheet"/>
        </Head>
        
        <Header/>
            {children}
            
        <Footer/>
            
    </div>
    );
}


export default Layout;