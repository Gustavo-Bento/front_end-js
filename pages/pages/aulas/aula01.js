import Link from 'next/link'
import styleEstilo from '../../../styles/estilo.module.css'
import styleBotao from '../../../styles/botao.module.css'
import styleLista from '../../../styles/lista.module.css'
import styleBoot from 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'
import styleTab from '../../../styles/tabela-clara.module.css'

export default function aula01(){
    return(
        <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prof Gustavo Ferreira" />
        <meta name="descripion" content="Página de introdução ao Desenvolviemento web - Aula 06" />
        <title>Aula 01 - Git com HTML e CSS</title>
        <link rel="icon" href="/icon.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <header>
          
          <nav className={[styleBoot.navbar, styleBoot.navbar-expand-sm, styleBoot.bg-dark, styleBoot.navbar-dark].join(" ")}>
    
            <div className={styleBoot.container-fluid}>
      
              <ul className={[styleBoot.navbar-nav, styleBoot.container].join(" ")}>
      
                <li className={styleBoot.nav-item} >
          
                  <Link className={styleBoot.navbar-brand} href="http://microcamp.com">
                    <img src="/logo.jpg" style={{width: '60px'}} alt="Logo Microcamp" className={[styleEstilo.arredondar]} />
                  </Link>
                </li>
        
                <li className={[styleBoot.nav-item, styleBoot.text-white].join(" ")}>
                  <h4>Aula 01 - Git com HTML e CSS</h4>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className={styleBoot.row}>

          <nav className={[styleLista.nav,styleBoot.col-lg-3, bg-purple].join(" ")}>
  
            <ul className={[styleBoot.navbar-nav, styleBoot.m-3].join(" ")}>
    
              <li className={[styleLista.li, styleBoot.nav-item].join(" ")}>
                <Link href="/pages/aulas//aula01">
                  <div className={styleBotao.botaoLista}>
                    Aula 01 - Git com HTML e CSS
                  </div>
                </Link>
              </li>
      
              <li className={[styleLista.li, styleBoot.nav-item].join(" ")}>
                <Link href="/pages/aulas//aula02">
                  <div className={styleBotao.botaoLista}>
                    Aula 02 - Seletores CSS 3
                  </div>
                </Link>
              </li>
      
              <li className={[styleLista.li, styleBoot.nav-item].join(" ")}>
                <Link href="/pages/aulas//aula03">
                  <div className={styleBotao.botaoLista}>
                    Aula 03 - Introdução ao JavaScript
                  </div>
                </Link>
              </li>
      
              <li className={[styleLista.li, styleBoot.nav-item].join(" ")}>
                <Link href="/pages/aulas//aula04">
                  <div className={styleBotao.botaoLista}>
                    Aula 04 - Implementando BootStrap
                  </div>
                </Link>
              </li>
      
              <li className={[styleLista.li, styleBoot.nav-item].join(" ")}>
                <Link href="/pages/aulas//aula05">
                  <div className={styleBotao.botaoLista}>
                    Aula 05 - Operadores em JavaScript
                  </div>
                </Link>
              </li>
      
              <li className={[styleLista.li, styleBoot.nav-item].join(" ")}>
                <Link href="/pages/aulas//aula06">
                  <div className={styleBotao.botaoLista}>
                    Aula 06 - Portas Lógicas em JavaScript
                  </div>
                </Link>
              </li>
            </ul>
          </nav>

          <article className={[styleLista.article, styleBoot.col-lg-9].join(" ")}>

          </article>
        </section>
    <footer className={[styleBoot.text-center, styleBoot.p-2, styleBoot.bg-dark, styleBoot.text-white].join(" ")}>
  <p>Desenvolvido por Gustavo Ferreira</p>
</footer>
</div>
);
}