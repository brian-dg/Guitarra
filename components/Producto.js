import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Producto.module.css';

const Producto = ({producto}) => {
    const {descripcion,imagen,nombre,precio,url} = producto
    return(
        <div className={styles.productos}>
            <Image layout="responsive" height={350} width={180} src={imagen.url} alt= {`Imagen Producto:  ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/productos/${url}`}>
                    <a className={styles.enlace}>Ver Producto</a>
                </Link>
            </div>
        </div>
    )
}

export default Producto;