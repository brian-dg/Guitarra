import Layout from "../components/Layout";
import Entrada from "../components/Entrada";


const Blog = ({resultado}) => {

    return(
        <Layout 
        pagina="Blog"
        >
            <main className="contenedor">
                <h2 className="heading">Blogs</h2>

                <div>
                    {resultado.map(entrada =>(
                        <Entrada
                            key={entrada.id}
                            entrada = {entrada}
                        />
                    ))}
                </div>
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

    console.log(resultado);

    return {
        props: {

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
