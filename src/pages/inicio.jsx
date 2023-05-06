
import TypingEffect from '../components/TypingEffect'
import '../app.css'
import ButtonEffect from '../components/ButtonEffect';

function Inicio(){
    return(
        <>
           <div className='container'>
                <TypingEffect text='Olá, bem vindos ao meu portfolio. 🤓🌎 ' time='100'/>
                <div className='button-start'>
                    <ButtonEffect txt='START' endereco='/home'/>
                </div>
                
           </div>
        </>
    )
}

export default Inicio;