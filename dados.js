let dados = [
    {
        titulo: "Introdução ao HTML",
        descricao: "Aprenda HTML, a linguagem básica de marcação usada para criar e estruturar conteúdo na web. Este curso cobre desde o básico até conceitos mais avançados para você começar a desenvolver páginas web.",
        imagem: "https://www.guiaviagensbrasil.com/imagens/Imagem%20do%20mar%20calma%20e%20belo%20da%20Praia%20da%20Engenhoca-Itacar%C3%A9-Bahia-BA.jpg",
        link: "https://www.alura.com.br/formacao-html-css", // Link ajustado para cursos de HTML da Alura
        tags: "HTML, Marcação, Desenvolvimento Web, Front-end, HTML5, Estruturação de Páginas, Semântica, Elementos HTML, Atributos HTML, Layout, Design Responsivo, Web Design, Desenvolvimento de Sites, Padrões Web, HTML Básico, HTML Avançado, Tecnologias Web, Web Development, Coding, Linguagem de Marcação, HTML5, HTML básico, HTML5 Curso, Desenvolver Web, Curso HTML"
    },
    {
        titulo: "Introdução ao Machine Learning com Gemini",
        descricao: "Explore o mundo do Machine Learning com o modelo de linguagem Gemini, desenvolvido pelo Google AI. Aprenda sobre técnicas e aplicações práticas de machine learning utilizando este avançado modelo.",
        link: "https://www.alura.com.br/cursos-online-data-science", // Link ajustado para cursos de Data Science da Alura, que inclui Machine Learning
        tags: "Machine Learning, Gemini, Google AI, Inteligência Artificial, Aprendizado de Máquina, Modelos de Linguagem, Algoritmos, Data Science, IA, Análise de Dados, Redes Neurais, Deep Learning, Treinamento de Modelos, Processamento de Linguagem Natural, Aplicações de Machine Learning, Google Cloud, Ferramentas de AI, Pesquisa em AI, Inovação, Tecnologias Emergentes, Machine Learning, Gemini AI, Google AI, Aprendizado Máquina, Dados Science"
    },
    {
        titulo: "Fundamentos da Programação com Alura para Iniciantes",
        descricao: "Conheça os conceitos básicos da programação e aprenda como começar a desenvolver suas habilidades. O curso abrange a lógica de programação e introduz as principais linguagens e ferramentas.",
        link: "https://www.alura.com.br/cursos-online-programacao", // Link ajustado para cursos de programação da Alura
        tags: "Programação, Lógica de Programação, Iniciantes, Desenvolvimento, Alura, Fundamentos de Programação, Linguagens de Programação, Ferramentas de Desenvolvimento, Conceitos Básicos, Algoritmos, Estruturas de Dados, Código, Desenvolvimento de Software, Programação para Iniciantes, Curso Online, Educação em Programação, Tutoriais, Tecnologia, Desenvolvimento de Habilidades, Codificação, Fundamentos Programação, Alura Cursos, Lógica Programação"
    },
    {
        titulo: "Diferença entre JavaScript e TypeScript",
        descricao: "Aprenda as diferenças entre JavaScript e TypeScript, duas linguagens populares para desenvolvimento web. Entenda quando usar cada uma e como elas podem melhorar seu fluxo de trabalho e código.",
        link: "https://www.alura.com.br/cursos-online-front-end", // Link ajustado para cursos de JavaScript e TypeScript na Alura
        tags: "JavaScript, TypeScript, Desenvolvimento Web, Linguagens de Programação, JavaScript vs TypeScript, Tipagem Estática, Tipagem Dinâmica, Frameworks, Desenvolvimento Front-end, Tipos de Dados, Código Limpo, Manutenção de Código, Ferramentas de Desenvolvimento, Compilação, Transpiladores, Type Safety, Programação Orientada a Objetos, Linguagens de Script, Desenvolvimento de Aplicações, JavaScript x TypeScript, TypeScript vs JavaScript, Tipagem em TypeScript"
    },
    {
        titulo: "POO e seus conceitos",
        descricao: "Entenda os conceitos de Programação Orientada a Objetos (POO) e sua aplicação prática. Descubra como a POO pode ajudar na organização e estruturação de seu código para projetos mais robustos.",
        link: "https://www.alura.com.br/cursos-online-programacao-orientacao-a-objetos", // Link ajustado para cursos de POO na Alura
        tags: "Programação Orientada a Objetos, POO, Conceitos de POO, Design de Software, Encapsulamento, Herança, Polimorfismo, Abstração, Classes, Objetos, Métodos, Atributos, Organização de Código, Estrutura de Código, Programação Modular, Projetos de Software, Arquitetura de Software, Código Reutilizável, Desenvolvimento de Software, Programação, Conceitos POO, POO Aplicações, Objetos e Classes"
    },
    {
        titulo: "Programação Procedural vs Funcional",
        descricao: "Descubra as diferenças entre programação procedural e funcional. Aprenda como cada abordagem afeta o design do seu software e qual delas é mais adequada para diferentes tipos de projetos.",
        link: "https://www.alura.com.br/cursos-online-programacao-funcional", // Link ajustado para cursos de programação funcional na Alura
        tags: "Programação Procedural, Programação Funcional, Paradigmas de Programação, Design de Software, Procedural vs Funcional, Funcionalidade, Imutabilidade, Funções de Ordem Superior, Estruturas de Controle, Conceitos de Programação, Abordagens de Desenvolvimento, Fluxo de Trabalho, Código Funcional, Modularidade, Programação Declarativa, Algoritmos, Manipulação de Dados, Projeto de Sistemas, Desenvolvimento de Software, Estilos de Programação, Procedural Funcional, Programação Funcional vs Procedural"
    },
    {
        titulo: "O que é um Algoritmo?",
        descricao: "Aprenda o que é um algoritmo e como ele é fundamental para o desenvolvimento de software. Entenda como criar e otimizar algoritmos para resolver problemas e realizar tarefas específicas.",
        link: "https://www.alura.com.br/cursos-online-algoritmos", // Link ajustado para cursos de algoritmos na Alura
        tags: "Algoritmo, Desenvolvimento de Software, Lógica de Programação, Otimização, Algoritmos de Ordenação, Pesquisa, Estruturas de Dados, Complexidade, Eficiência, Problemas Computacionais, Solução de Problemas, Design de Algoritmos, Estruturas Algorítmicas, Programação, Processamento de Dados, Eficiência de Algoritmos, Teoria dos Algoritmos, Programação Competitiva, Técnicas de Algoritmos, Codificação, Algorítmo, Algoritimos, Ordenação Algoritmo"
    },
    {
        titulo: "Compilador vs Interpretador",
        descricao: "Entenda a diferença entre compiladores e interpretadores, e como cada um deles traduz o código para ser executado. Descubra as vantagens e desvantagens de cada abordagem na execução de programas.",
        link: "https://www.alura.com.br/cursos-online-linguagens", // Link ajustado para cursos relacionados a linguagens e suas execuções na Alura
        tags: "Compilador, Interpretador, Linguagens de Programação, Tradução de Código, Execução de Código, Compilação, Interpretação, Vantagens e Desvantagens, Processamento de Linguagem, Sistemas de Desenvolvimento, Ambiente de Execução, Performance, Ferramentas de Desenvolvimento, Otimização, Tempo de Execução, Estratégias de Compilação, Código Fonte, Análise Léxica, Análise Sintática, Engenharia de Software, Compiladores vs Interpretadores, Interpretadores vs Compiladores"
    },
    {
        titulo: "O que é um Bug?",
        descricao: "Saiba o que são bugs em softwares e como identificá-los e corrigi-los. Este curso oferece técnicas e ferramentas para depuração eficaz e para a manutenção da qualidade do software.",
        link: "https://www.alura.com.br/cursos-online-teste-de-software", // Link ajustado para cursos de teste de software e debugging na Alura
        tags: "Bugs, Depuração, Qualidade de Software, Correção de Erros, Debugging, Ferramentas de Debug, Testes de Software, Manutenção, Diagnóstico de Erros, Análise de Erros, Técnicas de Depuração, Teste de Aplicações, Ferramentas de Desenvolvimento, Erros de Código, Identificação de Problemas, Solução de Problemas, Análise de Código, Testes Unitários, Melhoria de Software, Processos de Desenvolvimento, Bugs de Software, Erro de Programação"
    },
    {
        titulo: "Para que serve o React?",
        descricao: "Aprenda a usar React, uma biblioteca JavaScript desenvolvida para construção de interfaces de usuário. Descubra como React facilita a criação de aplicações interativas e escaláveis.",
        link: "https://www.alura.com.br/cursos-online-react", // Link ajustado para cursos de React na Alura
        tags: "React, Biblioteca JavaScript, Desenvolvimento Front-end, Interfaces de Usuário, Componentes, React Hooks, Aplicações Interativas, SPA, React Native, Estado de Componentes, Renderização, Virtual DOM, Desenvolvimento Web, Frameworks, UI/UX, Performance, Ferramentas de Front-end, Desenvolvimento de Aplicações, Bibliotecas de JavaScript, Componentização, React Hooks, React Native, UI com React"
    },
    {
        titulo: "O que é Node.js?",
        descricao: "Descubra como usar Node.js, um ambiente de execução para JavaScript no lado do servidor. Aprenda a construir aplicações web escaláveis e de alta performance com este runtime poderoso.",
        link: "https://www.alura.com.br/cursos-online-node-js", // Link ajustado para cursos de Node.js na Alura
        tags: "Node.js, JavaScript no Servidor, Backend, Ambiente de Execução, Desenvolvimento de Servidor, API, Microservices, Aplicações Web, Performance, Event Loop, Non-blocking, Escalabilidade, Desenvolvimento Backend, JavaScript, Node Modules, npm, Runtime, Servidor, Aplicações Real-time, Node, Server-side, Desenvolvimento Web, Servidores, API com Node.js"
    },
    {
        titulo: "Por que estudar Computação em Nuvem?",
        descricao: "Entenda a importância da computação em nuvem e como ela revoluciona o armazenamento, processamento e gerenciamento de dados. Aprenda as principais plataformas e serviços disponíveis.",
        link: "https://www.alura.com.br/cursos-online-cloud-computing", // Link ajustado para cursos de computação em nuvem na Alura
        tags: "Computação em Nuvem, Cloud Computing, Armazenamento, Processamento, Gerenciamento de Dados, AWS, Google Cloud, Azure, Serviços de Nuvem, Escalabilidade, Virtualização, Segurança na Nuvem, Infraestrutura, DevOps, Serviços de Cloud, Plataforma de Nuvem, Infraestrutura como Serviço, PaaS, SaaS, Virtual Machines, Cloud, Cloud Services, Computação Nuvem, Tecnologia Cloud, Nuvem"
    },
];
