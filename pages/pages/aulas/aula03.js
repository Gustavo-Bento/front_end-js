import Link from 'next/link'
import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'

export default function aula03(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 03" />
        <title>Aula 03 - Introdução ao JavaScript</title>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <script src="../../../js/operadores-artimeticos.js"></script>
        <script src="../../../js/bootstrap/program.js"></script>
        <header>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
              <ul className="navbar-nav container">
                <li className="nav-item">
                  <Link className="navbar-brand" href="http://microcamp.com">
                    <img src="/logo.jpg" style={{width: '60px'}} alt="Logo Microcamp" className={[styleEstilo.arredondar]} />
                  </Link>
                </li>
                <li className="nav-item text-white">
                  <h4 style="text-align:center">Aula 03 - Introdução ao JavaScript</h4>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="row">
        <div className="col-lg-3">
            <div className={styleLista.bgPurple}>
              <nav className={styleLista.nav}>
                <ul className="navbar-nav m-3">
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
                      <Link href="/pages/aulas//aula01">
                        <div className={styleBotao.botaoLista}>
                          Aula 01 - Git com HTML e CSS
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
                      <Link href="/pages/aulas//aula02">
                        <div className={styleBotao.botaoLista}>
                          Aula 02 - Seletores CSS 3
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
                      <Link href="/pages/aulas//aula03">
                        <div className={styleBotao.botaoLista}>
                          Aula 03 - Introdução ao JavaScript
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
                      <Link href="/pages/aulas//aula04">
                        <div className={styleBotao.botaoLista}>
                          Aula 04 - Implementando BootStrap
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
                      <Link href="/pages/aulas//aula05">
                        <div className={styleBotao.botaoLista}>
                          Aula 05 - Operadores em JavaScript
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li className={styleLista.li}>
                    <div className="nav-item m-3">
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
          <div className="col-lg-9">
            <article className={styleLista.article}>
              <i className="fa fa-brands fa-js" />
              <h3 className="text-white p-2 text-center m-3">
                <div className={styleEstilo.cinzaEscuro}>
                  Exemplo de Alteração em JavaScript
                </div>
              </h3>
          <div className="mx-auto d-block m-3">
            <div className="card m-3">
              <div className="card-body">
                <p id="altera">O vídeo fornece uma maneira poderosa de ajudá-lo a provar seu argumento. Ao
                  clicar em Vídeo
                  Online, você pode colar o código de inserção do vídeo que deseja adicionar. Você também pode
                  digitar uma
                  palavra-chave para pesquisar online o vídeo mais adequado ao seu documento. Para dar ao
                  documento uma
                  aparência profissional, o Word fornece designs de cabeçalho, rodapé, folha de rosto e caixa
                  de texto que
                  se complementam entre si. Por exemplo, você pode adicionar uma folha de rosto, um cabeçalho
                  e uma barra
                  lateral correspondentes.</p>
              </div>
            </div>
          </div>
          <div className="text-center m-3">
            <a className={styleBotao.botao} href="#" onclick="document.getElementById(&quot;altera&quot;).innerHTML = &quot;Olá Mundo! Em JavaScript 👍&quot;">OK</a>
          </div>
          <h3 className="text-center text-white p-2 m-3">
            <div className={styleEstilo.cinzaEscuro}>
              Operadores Aritiméticos JavaScript
            </div>
          </h3>
          <div className="row m-3">
            <div className="col-lg-6">
              <div className="p-2 mt-3 bg-white m-3">
                <p className=" p-2 m-3">
                  <div className={styleEstilo.cinzaClaro}>
                  01 - Realizando Adição com Javascript
                  </div>
                </p>
                <div className="card m-3">
                  <div className="card-body">
                    <p className>Exemplo de uma adição de 2 + 2 = <strong id="resultado-adicao">Mostrando o
                        resultado...
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a className={styleBotao.botao} id="confirmado-adicao" href="#" onclick="adicao()">Resultado</a>
                </div>
              </div>
              <div className="p-2 mt-3 bg-white m-3">
                <p className=" p-2 m-3">
                  <div className={styleEstilo.cinzaClaro}>
                  02 - Realizando Subtração com Javascript
                  </div>
                </p>
                <div className="card m-3">
                  <div className="card-body">
                    <p className>Exemplo de uma subtração de 4 - 2 = <strong id="resultado-subtracao">Mostrando o
                        resultado...
                      </strong></p>
                  </div>
                </div>
                <div className="text-center">
                  <a className={styleBotao.botao} id="confirmado-subtracao" href="#" onclick="subtracao()">Resultado</a>
                </div>
              </div>
              <div className="p-2 mt-3 bg-white m-3">
                <p className=" p-2 m-3">
                  <div className={styleEstilo.cinzaClaro}>
                  03 - Realizando Multiplicação com Javascript
                  </div>
                </p>
                <div className="card m-3">
                  <div className="card-body">
                    <p className>Exemplo de uma multiplicação de 3 * 3 = <strong id="resultado-multiplicacao">Mostrando o resultado...
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a className={styleBotao.botao} id="confirmado-multiplicacao" href="#" onclick="multiplicacao()">Resultado</a>
                </div>
              </div>
              <div className="p-2 mt-2 bg-white m-3">
                <p className=" p-2 m-3">
                  <div className={styleEstilo.cinzaClaro}>
                  04 - Realizando Divisão com Javascript
                  </div>
                </p>
                <div className="card m-3">
                  <div className="card-body">
                    <p className>Exemplo de uma divisão de 8 / 2 = <strong id="resultado-divisao">Mostrando o
                        resultado...
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a className={styleBotao.botao} id="confirmado-divisao" href="#" onclick="divisao()">Resultado</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-2 mt-3 bg-white m-3">
                <p className=" p-2 m-3">
                  <div className={styleEstilo.cinzaClaro}>
                  05 - Realizando Exponênciação com Javascript
                  </div>
                </p>
                <div className="card m-3">
                  <div className="card-body">
                    <p className>Exemplo de uma exponênciação de 2 ** 3 = <strong id="resultado-expo">Mostrando o
                        resultado...
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a className={styleBotao.botao} id="confirmado-expo" href="#" onclick="exponenciacao()">Resultado</a>
                </div>
              </div>
              <div className="p-2 mt-3 bg-white m-3">
                <p className=" p-2 m-3">
                  <div className={styleEstilo.cinzaClaro}>
                  06 - Realizando Resto com Javascript
                  </div>
                </p>
                <p className="cinza-claro p-2 m-3"></p>
                <div className="card m-3">
                  <div className="card-body">
                    <p className>Exemplo de um resto de 5 / 2 = <strong id="resultado-modo">Mostrando o
                        resultado...
                      </strong></p>
                  </div>
                </div>
                <div className="text-center">
                  <a className={styleBotao.botao} id="confirmado-modo" href="#" onclick="resto()">Resultado</a>
                </div>
              </div>
              <div className="p-2 mt-3 bg-white m-3">
                <p className=" p-2 m-3">
                  <div className={styleEstilo.cinzaClaro}>
                  07 - Realizando Incrementação com Javascript
                  </div>
                </p>
                <div className="card m-3">
                  <div className="card-body">
                    <p className>Exemplo de uma incrementação de 5 = <strong id="resultado-inc">Mostrando o
                        resultado...
                      </strong></p>
                  </div>
                </div>
                <div className="text-center">
                  <a className={styleBotao.botao} id="confirmado-inc" href="#" onclick="incrementacao()">Resultado</a>
                </div>
              </div>
              <div className="p-2 mt-3 bg-white m-3">
              <p className=" p-2 m-3">
                  <div className={styleEstilo.cinzaClaro}>
                  08 - Realizando Decrementação com Javascript
                  </div>
                </p>
                <div className="card m-3">
                  <div className="card-body">
                    <p className>Exemplo de uma decrementação de 5 = <strong id="resultado-dec">Mostrando o
                        resultado...
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a className={styleBotao.botao} id="confirmado-dec" href="#" onclick="decrementacao()">Resultado</a>
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