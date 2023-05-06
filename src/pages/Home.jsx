

import '../app.css'
import otakus from '/Otakus.png'
import buscador from '/Buscador de cep.png'
import svg from '/home.png'
import TypingEffect from '../components/TypingEffect'
import insta from '/instagram.png'
import whats from '/whatsapp.png'
import Projetos from './projetos'

function scrollToProjects() {
    const projectsSection = document.querySelector('#me');
    const sectionPosition = projectsSection.offsetTop;
    let currentPosition = window.pageYOffset;
  
    const scrollInterval = setInterval(() => {
      if (currentPosition >= sectionPosition) {
        clearInterval(scrollInterval);
        return;
      }
      currentPosition += 30;
      window.scrollTo(0, currentPosition);
    }, 16);
  }


function Home(){
    return(
        <>
         <div className="container-home page">
            <div className='cabecalho'>
                <ul className='itens'>
                    <li ><a className='iten' href="#home">Home</a></li>
                    <li ><a className='iten' href="#me">About</a></li>
                    <li ><a className='iten' href="#projects"> My Projects</a></li>
                    <li><a href="https://www.instagram.com/snook.ofc69/"><img className='icon' src={insta} alt="" /></a></li>
                    <li><a href="https://wa.me/5585996427480"><img className='icon' src={whats} alt="" /></a></li>
                </ul>
            </div>

            <section id='home'>
            <h2 className='title'>Home</h2>
            <div className='home'>
                <TypingEffect  text='Bem Vindos.' time='100'/>
                <img className='imghome' src={svg} alt="" />
            </div></section>
            


            <section id='me'><h2 className='title' >About Me</h2></section>
            
            <div  className='about-me'>
                <img className='foto' src="https://github.com/dev-br18.png" alt="" />
                <p className='description'>Sou um estudante dedicado em busca de uma oportunidade de ingressar na área de programação. Apaixonado por tecnologia e fascinado pelo mundo da programação, busco constantemente aprimorar minhas habilidades em linguagens como [<strong className='destaque'>Html</strong>,<strong className='destaque'>Css3</strong>,<strong className='destaque'>Javascrispt</strong>,<strong className='destaque'>React</strong> ], além de me manter atualizado sobre as últimas tendências do mercado.

                Durante meu tempo livre, gosto de participar de projetos open source e experimentar novas tecnologias. Acredito que o trabalho em equipe é fundamental para o sucesso de qualquer projeto e estou sempre buscando oportunidades para colaborar com outros desenvolvedores.

                Meu objetivo é construir uma carreira sólida na área de programação, contribuindo para projetos desafiadores e empolgantes. Se você está procurando um desenvolvedor entusiasmado e comprometido, estou pronto para aprender e crescer com você.</p>
            </div>

            <h2 className='title' id='projects'>My Projects</h2>
            <div className='myProjects'>
                <Projetos/>
            </div>
         </div>
        </>
    )
}

export default Home;