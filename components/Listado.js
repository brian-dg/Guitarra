import Producto from "./Producto";
import styles from '../styles/Listado.module.css';

const Listado = ({guitarras}) => {
    return (

        <div className={styles.listado}> 
            {guitarras.map(producto => (
                <Producto 
                key={producto.url}
                producto={producto}/>
                
            ))}
        </div>
    )
}

export default Listado