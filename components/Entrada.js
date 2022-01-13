import Link from 'next/link';
import Image from 'next/image';
import {formatearFecha } from '../helpers';
import style from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
    const {titulo, resumen,imagen,published_at,id } = entrada
    console.log(imagen.url)

    return (
        <article>
            
            <Image priority='true' layout="responsive" width={800} height={600} src={imagen.url} alt = {`imagen blog ${titulo}`}/>
            <div className={style.contenido}>
                <h3>{titulo}</h3>
                <p className={style.fecha}>{formatearFecha(published_at)}</p>
                <p className={style.resumen}>{resumen}</p>
                <Link href={`/blog/${id}`}>
                   <a className={style.enlace}>Leer entrada</a> 
                </Link>
            </div>
        </article>
    )
}

export default Entrada;