import './style.css'

export default function Livro({titulo, autor, ano}){
    return(
        <div>
            <h1 className='title'>Titulo: {titulo}</h1>
            <p className='author'>Autor: {autor}</p>
            <p className='year'>Ano de lançamento: {ano}</p>
        </div>
    )
}