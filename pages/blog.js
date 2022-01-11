import Layout from "../components/Layout";
import { useEffect } from "react";

const Blog = () => {

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'http://localhost:1337/blogs';
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            console.log(resultado);
        }
        consultarAPI();
    },[])
    return(
        <Layout 
        pagina="Blog"
        >
            <h1>Desde Blog</h1>    
        </Layout>
    );
}
//probando rama dg-ramaSec

export async function getServerSideProps() {
    
}
export default Blog;