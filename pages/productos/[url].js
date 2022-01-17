import Image from "next/image";
import Layout from '../../components/Layout';
import styles from '../../styles/Producto.module.css';

const Guitarra = ({guitarra}) => {
    const {descripcion,imagen,nombre,precio,url}  = guitarra[0]
    return(
    <Layout
        pagina={`${nombre}`}
    >
        <div className={styles.productos}>
            <Image layout="responsive" height={350} width={180} src={imagen.url} alt= {`Imagen Producto:  ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>

                <form className={styles.formulario}>
                    <label>Cantidad:</label>

                    <select>
                        <option value="">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input
                        type="submit"
                        value="Agregar al carrito"
                    />
                </form>                
            </div>
        </div>
    </Layout>
    )
}

export async function getServerSideProps({query: {url}}) {
  
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra);
    const guitarra = await respuesta.json();

    console.log(guitarra)
    return {
        props: {
            guitarra
        }
    }
}
export default Guitarra;