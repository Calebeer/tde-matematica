
import './App.css';
import Atv4 from './componentes/pages/Atv4';
import Atv1 from './componentes/pages/Atv1';
import Atv2 from './componentes/pages/Atv2'
import Atv3 from './componentes/pages/Atv3'
import Atv5 from './componentes/pages/Atv5';
import Atv6 from './componentes/pages/Atv6';
import Atv7 from './componentes/pages/Atv7';


function App() {
  return (
    <div >

      <div class="folha dobra">
                  <br></br>
                  <p>
                Centro Universitário de Ciências e Tecnologia do Maranhão – UniFacema<br></br>
                Curso: Análise e Desenvolvimento de Sistemas
                DISCIPLINA PRESENCIAL/HÍBRIDA: Matemática Computacional - Noturno 
                Professor: Jeferson 
                <ul class="container" >
                  <li>Alunos:</li>
                  <li>Calebe Apollo Medeiros Moreno da Silva</li>
                  <li>Marcos Apolo Da Silva Milhomem</li>
                  <li>Renan Coelho Medeiros</li>
                </ul>
                </p> 
                  <h5><strong>TRABALHO DISCENTE EFETIVO 1: RELATÓRIO DE RESOLUÇÃO DE EXERCICIOS COM ALGORITMOS E LÓGICA</strong></h5>
                  <Atv1/>                 
                  <Atv2/>
                  <Atv3/>
                  <Atv4/>
                  <Atv5/>
                  <Atv6/>
                  <Atv7/>
               </div>
              

               </div>



  );
}

export default App;