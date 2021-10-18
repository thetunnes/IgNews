# Projeto IgNews desenvolvido em aula no curso <img align="center" alt="Ignite" height="60" width="60" src="https://raw.githubusercontent.com/tavareshenrique/ignite-reactjs/a11afefe824866f24dd3f9e1cc6e6e9530376ad1/%40assets/img/logo.svg"/> 

![Home do IgNews](Home-IgNews.png)

## Propósito do Projeto
O IgNews é um Blog de Noticias sobre a tecnologia React


## 📖 Tecnologias utilizadas

* NextJS
* Stripe
* TypeScript
* Handless CMS (Prismic.io)
* FaunaDB
* SaaS
* SASS
* Axios
* Next-Auth

### <img width="60"  height="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Logo NextJS" />
Com a utilização do NextJS o nosso site deixa de renderizar tudo pelo browser, e começa a funcionar através de um back-end (no caso do NextJS ele utiliza o NodeJS).
O NextJS nos permite várias coisas, melhor funcionamento de diretórios, criação de páginas estáticas (GetStaticProps), criação de páginas pelo servidor (GetServerSideProps), webhooks, fácil consumo de API de terceiros e milhões de outras praticidades, porém o maior motivo para se utilizar o NextJS é a renderização do App via Back-End, algo que melhora até o trabalho dos motores de buscas para achar e divulgar seu site.

### <img width="70" height="60" src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" />
O Stripe é uma infraestrutura de pagamentos (uma das mais utilizadas atualmente) e com fácil implementação, no nosso projeto criamos uma assinatura mensal onde após fazer a assinatura e ter o cartão aprovado o usuário tem total acesso ao nosso portal de notícias. Dá para fazer vários pagamentos com Stripe (Cartão / ApplePay / Boleto e muitos outros) e várias validações, resgate de dados e etc (Precisamos de um DB para armazenar os dados de pagamento e usuário).

### <img width="50" height="50" src="https://seeklogo.com/images/P/prismic-logo-F6A173E6D0-seeklogo.com.png" />
Um Handless CMS é um dashboard que facilita a adição de conteúdo em nossos sites. O prismic foi utilizado apenas para armazenar os conteúdos dos nossos Posts e trazer as páginas isoladas de cada Post.

### <img width="70" height="30" src="https://dbdb.io/media/logos/fauna2020.png"/>

### To DO

