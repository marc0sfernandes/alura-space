import React from 'react'
import favorito from './favorito.png'
import open from './open.png'

export default function Cards(props) {
    return (
        <ul className={props.styles.galeria__cards}>
            {props.fotos.map((foto) => {
                return (
                    <li key={foto.id} className={props.styles.galeria__card}>
                        <img className={props.styles.galeria__imagem} src={foto.imagem} alt={foto.titulo} />
                        <p className={props.styles.galeria__descricao}>{foto.titulo}</p>
                        <div>
                            <p>{foto.creditos}</p>
                            <span>
                                <img src={favorito} alt="Ícone coração de curti" />
                                <img src={open} alt="Ícone de abrir modal" />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
