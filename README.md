<h1 align="center"><strong>DESTINO FINAL $</strong></h1>

# Planner de Metas Financeiras Mobile

## Uma Jornada Personalizada Rumo aos Seus Sonhos Financeiros

Este projeto representa um aplicativo mobile intuitivo e elegante, cuidadosamente arquitetado para capacitar os usuários a assumirem o controle de suas finanças e, o mais importante, a transformarem seus sonhos em metas tangíveis e alcançáveis. Mais do que um simples rastreador de gastos, este planner de metas financeiras atua como um guia pessoal, conduzindo o usuário através de um processo passo a passo para definir, planejar e visualizar a concretização de seus objetivos financeiros.

### Funcionalidades Principais:

* **Definição de Objetivos Claros:** A jornada começa com a materialização dos sonhos. O aplicativo permite que os usuários descrevam seus objetivos financeiros de forma detalhada, atribuindo valores monetários específicos a cada um deles. Seja a compra de um carro novo, a entrada para um imóvel, uma viagem inesquecível ou a construção de uma reserva de emergência, o primeiro passo é dar forma a esses desejos.

* **Registro Intuitivo de Rendas e Despesas:** Para entender o ponto de partida e o caminho a seguir, o aplicativo oferece uma interface simples e eficiente para o registro de todas as fontes de renda e os diversos tipos de despesas. Essa visão clara do fluxo financeiro pessoal é fundamental para um planejamento eficaz.

* **Histórico Detalhado:** Uma tela de histórico abrangente consolida todas as informações inseridas, apresentando um panorama claro dos objetivos definidos, das rendas totais, das despesas totais e do saldo líquido disponível. Este histórico serve como um ponto de referência valioso para o acompanhamento da saúde financeira.

* **Planejamento Estratégico:** O coração do aplicativo reside na tela de planejamento. Aqui, o usuário pode definir uma estratégia de alocação de recursos para seus objetivos. A flexibilidade é chave: o usuário pode optar por separar uma porcentagem predefinida do seu saldo líquido (10%, 20%, 30% ou 40%) ou inserir um valor personalizado, adaptando o planejamento à sua realidade financeira e prioridades.

* **Visualização da Conclusão dos Objetivos:** A motivação é alimentada pela visão do futuro. Com base no valor separado para o planejamento, o aplicativo calcula e exibe uma previsão estimada do tempo necessário para alcançar cada objetivo definido. Essa funcionalidade transforma o planejamento em progresso visível, incentivando a disciplina e a persistência.

### Arquitetura e Tecnologias:

* **React:** A interface de usuário é construída com a biblioteca JavaScript React, proporcionando uma experiência fluida, reativa e componentizada.
* **React Router DOM:** A navegação entre as diferentes telas do aplicativo é gerenciada de forma eficiente e intuitiva com React Router DOM.
* **Context API:** O gerenciamento de estado global da aplicação é realizado através da Context API do React, permitindo que os dados (objetivos, rendas, despesas, valor separado) sejam compartilhados de maneira acessível entre os diferentes componentes, mantendo a integridade e a consistência das informações.
* **CSS:** A estilização da aplicação é cuidadosamente implementada com arquivos CSS modulares, utilizando variáveis CSS (`:root`) para manter a consistência visual e facilitar a manutenção. A interface é projetada para ser responsiva e agradável em dispositivos mobile.
* **Font Awesome:** Ícones vetoriais do Font Awesome são utilizados para enriquecer a interface com elementos visuais intuitivos.
* **`react-number-format`:** O componente `NumericFormat` é empregado para garantir a correta formatação de valores monetários, proporcionando uma visualização clara e padronizada.

### Estrutura de Pastas:

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │    ├── contexts/
│   │    │   └── Context.js
│   │    ├── css/
│   │    │   ├── DespesaScreen.css
│   │    │   ├── Historic.css
│   │    │   ├── Logo.css
│   │    │   ├── ObjetivoScreen.css
│   │    │   ├── PlanejamentoScreen.css
│   │    │   ├── Previsao.css
│   │    │   ├── RendaScreen.css
│   │    │   ├── ResultadoRenda.css
│   │    │   └── screenMobile.css
│   │    ├── screens/
│   │    │   ├── DespesaScreen.js
│   │    │   ├── HistoricScreen.js
│   │    │   ├── ObjetivoScreen.js
│   │    │   ├── PlanejamentoScreen.js
│   │    │   ├── PrevisaoConclusaoObjetivo.js
│   │    │   └── RendaScreen.js
│   │    └── ui/
│   │        ├── DespesaInput.js
│   │        ├── Logo.js
│   │        ├── ObjetivoInput.js
│   │        ├── Previsao.js
│   │        ├── RendaInput.js
│   │        └── ResultadoRenda.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── reportWebVitals.js
├── .gitignore
├── License
├── package.json
└── README.md
```

## 📜Licença
Este projeto está sob a [licença MIT](./License). Sinta-se à vontade para usar, modificar e compartilhar\! 🚀

## ✨ Developer
👨‍💻 Este projeto foi desenvolvido por <strong>Bruno Teixeira</strong> como parte do meu portfólio de desenvolvimento Front-End. Sinta-se à vontade para entrar em contato ou contribuir com o projeto!

- [![LinkedIn](https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff)](https://www.linkedin.com/in/brunotxrs/)

- [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/brunotxrs)
