import './painel.css'
import axios from '../axios.jsx';

function Painel(){

  function handleSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
  
    const form = event.target; // Pega a referência para o formulário
    const formData = {
      id: form.elements.id.value,
      name: form.elements.name.value,
      img: form.elements.img.value,
      link: form.elements.link.value

    }; // Cria um objeto FormData com os valores dos campos do formulário
  
    axios.post('/api/formulario', formData)
      .then(response => {
        console.log(formData)
        console.log(form)
        console.log('Dados enviados com sucesso!');
        console.log(response.data); // Imprime a resposta do servidor no console
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
      });
  }
    return(
        <>
        <div className='containerForm'>
            <form className='cardForm'  onSubmit={handleSubmit}>

                <label  className='labels' htmlFor="name" >Nome do projeto</label>
                <input className='inputs' name='name'  type="text" />

                <label  className='labels' htmlFor="id" >id do projeto</label>
                <input className='inputs' name='id'  type="text" />


                <label className='labels' htmlFor="img">imagem do projeto</label>
                <input  name="img"className='inputs' type="text" />

                <label className='labels' htmlFor="link">Link do projeto</label>
                <input  name="link"className='inputs' type="text" />

                <button type='submit' className='buttonForm'>Adicionar projeto</button>
            </form>
        </div>
            
        </>
    )
}

export default Painel;