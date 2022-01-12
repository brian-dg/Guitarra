import Layout from "../components/Layout";


const Blog = ({resultado}) => {

    console.log(resultado)
    return(
        <Layout 
        pagina="Blog"
        >
            <h1>Desde Blog</h1>    
        </Layout>
    );
}
/* Esta funcion construye cada vez qe se dirige a una pagina lo cual genera un uso muy intensivo
Construye una respuesta diferente  cada vez qe va a la api.
export async function getServerSideProps() {
    const url = 'http://localhost:1337/blogs';
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    return {
        props: {
            resultado
        }
    }
}*/

//Usar cuando el contenido es estatico. 
export async function getStaticProps() {
    const url = 'http://localhost:1337/blogs';
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    return {
        props: {
            resultado
        }
    }
}
export default Blog;
