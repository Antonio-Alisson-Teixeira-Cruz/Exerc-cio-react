import Livro from "./components/Livro";

export default function App() {
  return (
    <>
    <div className="livro">
      <Livro 
        titulo='A volta dos que não foram.'
        autor='Maquiavel'
        ano='1596'
      />
    </div>

    <div className="livro">
      <Livro 
        titulo='A curva reta.'
        autor='Lázarus'
        ano='2025'
      />
    </div>

    <div className="livro">
      <Livro 
        titulo='A ordem na tormenta.'
        autor='Seu Bit'
        ano='540'
      />
    </div>
    </>
  )
}