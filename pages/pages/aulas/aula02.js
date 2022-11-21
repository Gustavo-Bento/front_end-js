import Link from 'next/link'
import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'

export default function aula02(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 02" />
        <title>Aula 02 - Seletores CSS 3</title>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <header>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
              <ul className="navbar-nav container">
                <li className="nav-item m-1">
                  <Link className="navbar-brand" href="http://microcamp.com">
                    <img src="/logo.jpg" style={{width: '60px'}} alt="Logo Microcamp" className={[styleEstilo.arredondar]} />
                  </Link>
                </li>
                <li className="nav-item text-white m-2">
                  <h4 style={{textAlign: 'center'}}>Aula 02 - Seletores CSS 3</h4>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="row">
        <div className="col-lg-3">
            <div className={styleLista.bgPurple}>
              <div className="p-3">
                <nav className={styleLista.nav}>
                  <ul className="navbar-nav m-1">
                    <li className={styleLista.li}>
                      <div className="nav-item m-1">
                        <Link href="/pages/aulas//aula01">
                          <div className={styleBotao.botaoLista}>
                            Aula 01 - Git com HTML e CSS
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li className={styleLista.li}>
                      <div className="nav-item m-1">
                        <Link href="/pages/aulas//aula02">
                          <div className={styleBotao.botaoLista}>
                            Aula 02 - Seletores CSS 3
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li className={styleLista.li}>
                      <div className="nav-item m-1">
                        <Link href="/pages/aulas//aula03">
                          <div className={styleBotao.botaoLista}>
                            Aula 03 - Introdução ao JavaScript
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li className={styleLista.li}>
                      <div className="nav-item m-1">
                        <Link href="/pages/aulas//aula04">
                          <div className={styleBotao.botaoLista}>
                            Aula 04 - Implementando BootStrap
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li className={styleLista.li}>
                      <div className="nav-item m-1">
                        <Link href="/pages/aulas//aula05">
                          <div className={styleBotao.botaoLista}>
                            Aula 05 - Operadores em JavaScript
                          </div>
                        </Link>
                      </div>
                    </li>
                    <li className={styleLista.li}>
                      <div className="nav-item m-1">
                        <Link href="/pages/aulas//aula06">
                          <div className={styleBotao.botaoLista}>
                            Aula 06 - Portas Lógicas em JavaScript
                          </div>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <article className={styleLista.article}>
            <div className="card m-3">
              <div className="card-body">
              <div className={styleEstilo.cinzaEscuro}>
                <h4 className="text-white p-2 text-center m-3">Seletores CSS 3</h4>
              </div>
                <p>Seletores CSS são usados para "encontrar" (ou selecionar) os elementos HTML que você deseja
                  estilizar.
                </p>
                <p>Podemos dividir os seletores CSS em cinco categorias:</p>
                <ul>
                  <li>Seletores simples (selecione elementos com base no nome, id, classe)</li>
                  <li>Seletores de combinação (selecione elementos com base em um relacionamento específico
                    entre eles)
                  </li>
                  <li>Seletores de pseudo-classe (selecionar elementos com base em um determinado estado)</li>
                  <li>Seletores de pseudo-elementos (selecione e estilize uma parte de um elemento)</li>
                  <li>Seletores de atributo (selecione elementos com base em um atributo ou valor de atributo)
                  </li>
                </ul>
              </div>
            </div>
            <div className={styleEstilo.cinzaEscuro}>
              <h4 className="text-white p-2 text-center m-3">Tipos de Seletores CSS 3</h4>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card m-3">
                  <div className="card-body">
                    <div className={styleEstilo.cinzaClaro}>
                      <p className="p-1 text-center m-3">01 - Seletor de Elemento CSS</p>
                    </div>
                    <p>O seletor de elemento seleciona elementos HTML com base no nome do elemento.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card m-3">
                  <div className="card-body">
                    <div className={styleEstilo.cinzaClaro}>
                      <p className="p-1 text-center m-3">02 - Seletor de Classe CSS</p>
                    </div>
                    <p>O seletor de classe seleciona elementos HTML com um atributo de classe específico.
                    </p>
                    <p>Para selecionar elementos com uma classe específica, escreva um caractere ponto (.),
                      seguido
                      do nome
                      da
                      classe.</p>
                    <p>Você também pode especificar que apenas elementos HTML específicos devem ser afetados
                      por uma
                      classe.
                    </p>
                    <p>Elementos HTML também podem se referir a mais de uma classe.</p>
                  </div>
                </div>
              </div>
            </div>
            </article>
          </div>
        </section>
    <footer className="text-center p-2 bg-dark text-white">
  <p>Desenvolvido por Gustavo Ferreira</p>
</footer>
</div>
);
}