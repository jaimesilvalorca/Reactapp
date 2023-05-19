import './App.css'
import Menu from './components/Menu/Menu'
import Titulo from './components/Titulo/Titulo'


//Titulo({titulo:'soy titulo de app',subtitulo:'Soy subtitutlo de app'}) =><Titulo />

function App() {
  let count = 1
  let titulo = 'Soy titulo de App'
  let subtitulo='Soy subtitulo de app'
  return (
    <>
    {/*Elemento*/}
    {/*{Menu()}*/}
    <Titulo titulo={titulo} subtitulo={subtitulo} />
    {/*todo lo que inserta como key value se inserta como objetoo*/}
    <Menu/>
    <section>
      <lavel>
        click:{count}
      </lavel>
    </section>
    <section>
    <Titulo titulo='Soy titulo de Form' subtitulo='Soy subtitulo de Form'/>
      <form>
        <input type="text" placeholder='Ingrese un nombre' />
      </form>
    </section>
    </>
  )
}

export default App
