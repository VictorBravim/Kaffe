# Kaffe

![image 1](https://github.com/VictorBravim/Kaffe/assets/122113588/ce6add94-16b7-4fd1-89d7-bdcf92f94d98)

Kaffe é um projeto de website desenvolvido em React com Next.js, focado em apresentar uma cafeteria fictícia com diferentes seções como produtos, informações sobre a empresa e um formulário de contato.

## <code>Estrutura do Projeto</code>

O projeto é estruturado em componentes React, cada um responsável por renderizar uma seção específica do site.

## <code>Principais Componentes</code>

1. RootLayout.tsx:
- Define o layout base do site, incluindo importações de fontes (Montserrat), estilos globais (globals.css) e configurações de metadados.
  
2. Page.tsx:
- Componente principal da página inicial (Home), que compõe a estrutura completa da página, incluindo navegação, herói, produtos, seção "Sobre", seção de contato e rodapé.

3. Nav.tsx:
- Navegação do site, permite a mudança de seções ao clicar nos botões e destaca visualmente a seção atual.

4. Hero.tsx:
- Slider de imagens na seção herói da página inicial, utilizando react-slick para funcionalidade de carrossel.

5. Produtos.tsx:
- Renderiza uma lista de produtos com imagens e informações associadas, utilizando dados estáticos.

6. Sobre.tsx:
- Apresenta informações sobre diferentes tópicos em cartões de conteúdo.

7. Contato.tsx:
- Formulário de contato que captura informações do usuário (nome, e-mail, mensagem) e lida com o envio.

8. Footer.tsx:
- Rodapé do site com links para diferentes seções e funcionalidade de menu retrátil.

## <code>Tecnologias Utilizadas</code>

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Next.js: Framework React para renderização no lado do servidor e roteamento.
- TypeScript: Superset de JavaScript que adiciona tipagem estática opcional.
- CSS Modules: Método para estilização modular de componentes React.
- react-slick: Componente React para implementação de carrossel de imagens.

## <code>Como Executar Localmente</code>

1. Clonar o Repositório:
   ```
   git clone https://github.com/seu-usuario/kaffe.git
   cd kaffe
   ```

2. Instalar Dependências:
   ```
   npm install
   # ou
   yarn install
   ```

3. Rodar o Projeto:
   ```
   npm run dev
   # ou
   yarn dev
   ```

Acesse http://localhost:3000 para visualizar o site localmente.

## <code>Contribuição</code>

- Sinta-se à vontade para enviar pull requests com melhorias, correções ou novas funcionalidades.
- Livre para clonar e fazer do seu jeito.
