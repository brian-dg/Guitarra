import Layout from "../components/Layout";
import ListadoBlog from '../components/ListadoBlog';

const Blog = ({entradas}) => {
 
    return(
        <Layout 
        pagina="Blog"
        >
            <main className="contenedor">
                <ListadoBlog
                entradas = {entradas}
                />
            </main>  
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
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    return {
        props: {
            entradas
        }
    }
}
export default Blog;
