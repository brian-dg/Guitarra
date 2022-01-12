import Link from 'next/link';
import Image from 'next/image';
import {formatearFecha } from '../helpers'
const Entrada = ({entrada}) => {
    const {titulo, resumen,imagen,published_at,id } = entrada
    console.log(imagen.url)

    return (
        <article>
            
            <Image layout="responsive" width={800} height={600} src={imagen.url} alt = {`imagen blog ${titulo}`}/>
            <div>
                <h1>{titulo}</h1>
                <p>{formatearFecha(published_at)}</p>
                <p>{resumen}</p>
                <Link href={`/blog/${id}`}>
                    Leer entrada
                </Link>
            </div>
        </article>
    )
}

export default Entrada;