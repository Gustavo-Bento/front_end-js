import Link from 'next/link'
import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'
import styleTab from '../../../styles/tabela-clara.module.css'

export default function aula02(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 06" />
        <title>Aula 02 - Seletores CSS 3</title>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <header>
          /**navbar navbar-expand-sm bg-dark navbar-dark */
          <nav className="">
            /**container-fluid */
            <div className="">
              /**navbar-nav container */
              <ul className="">
                /**nav-item */
                <li className="">
                  /**navbar-brand */
                  <Link className="" href="http://microcamp.com">
                    <img src="/logo.jpg" style={{width: '60px'}} alt="Logo Microcamp" className={[styleEstilo.arredondar]} />
                  </Link>
                </li>
                /**nav-item text-white */
                <li className="">
                  <h4>Aula 02 - Seletores CSS 3</h4>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        /**row*/
        <section className="">
          /**col-lg-3 bg-purple*/
          <nav className={styleLista.nav}>
            /**navbar-nav m-3 */
            <ul className="">
              /**nav-item */
              <li className={styleLista.li}>
                <Link href="/pages/aulas//aula01">
                  <div className={styleBotao.botaoLista}>
                    Aula 01 - Git com HTML e CSS
                  </div>
                </Link>
              </li>
              /**nav-item */
              <li className={styleLista.li}>
                <Link href="/pages/aulas//aula02">
                  <div className={styleBotao.botaoLista}>
                    Aula 02 - Seletores CSS 3
                  </div>
                </Link>
              </li>
              /**nav-item */
              <li className={styleLista.li}>
                <Link href="/pages/aulas//aula03">
                  <div className={styleBotao.botaoLista}>
                    Aula 03 - Introdução ao JavaScript
                  </div>
                </Link>
              </li>
              /**nav-item */
              <li className={styleLista.li}>
                <Link href="/pages/aulas//aula04">
                  <div className={styleBotao.botaoLista}>
                    Aula 04 - Implementando BootStrap
                  </div>
                </Link>
              </li>
              /**nav-item */
              <li className={styleLista.li}>
                <Link href="/pages/aulas//aula05">
                  <div className={styleBotao.botaoLista}>
                    Aula 05 - Operadores em JavaScript
                  </div>
                </Link>
              </li>
              /**nav-item */
              <li className={styleLista.li}>
                <Link href="/pages/aulas//aula06">
                  <div className={styleBotao.botaoLista}>
                    Aula 06 - Portas Lógicas em JavaScript
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          /**col-lg-9 */
          <article className={styleLista.article}>

          </article>
        </section>
    <footer className="text-center p-2 bg-dark text-white">
  <p>Desenvolvido por Gustavo Ferreira</p>
</footer>
</div>
);
}