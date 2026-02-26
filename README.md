# sidebar-mf

Projeto Next.js: micro frontend "sidebar" — exemplo de componente/lógica para ser usado como micro front-end.

Um README curto e objetivo para explicar como rodar, desenvolver e fazer deploy desta aplicação.

## Sumário

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts úteis](#scripts-úteis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Contribuindo](#contribuindo)
- [Deploy](#deploy)
- [Licença](#licença)
- [Contato](#contato)

## Sobre

Este repositório contém um exemplo de micro front-end implementado com Next.js. O objetivo é demonstrar como construir uma sidebar reutilizável que pode ser exposta/consumida por outras aplicações ou integrada como parte de um sistema maior.

## Tecnologias

- Next.js
- React
- TypeScript
- Node.js

## Pré-requisitos

- Node.js 16+ (recomendado)
- npm, yarn, pnpm ou bun

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/danvitoriano/sidebar-mf.git
cd sidebar-mf
```

2. Instale as dependências (escolha o gerenciador de pacotes):

```bash
npm install
# ou
# yarn
# ou
# pnpm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
# yarn dev
# pnpm dev
# bun dev
```

Abra [http://localhost:3002](http://localhost:3002) no navegador.

## Scripts úteis

- `npm run dev` — iniciar servidor de desenvolvimento (porta 3002)
- `npm run build` — gerar build de produção
- `npm run start` — iniciar aplicação em modo de produção (após build, porta 3002)
- `npm run lint` — rodar linter
- `npm run deploy` — realizar deploy para o Vercel em modo de produção
- `npm run type-check` — verificar tipos TypeScript

## Estrutura do projeto

- `src/app/` — rotas e páginas (Next.js App Router)
- `src/components/` — componentes reutilizáveis
- `public/` — arquivos estáticos

(Atualize esta seção se a estrutura real do repositório for diferente.)

## Contribuindo

Contribuições são bem-vindas.

1. Fork do repositório
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`
3. Faça commits com mensagens claras
4. Abra um Pull Request descrevendo as mudanças

## Deploy

Este projeto é compatível com a plataforma Vercel. Para deploy:

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente (se houver)
3. Clique em Deploy

Ou utilize o script disponível no projeto:

```bash
npm run deploy
```

Veja a [documentação do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para detalhes de deploy.

## Licença

Se desejar, adicione uma licença (por exemplo, MIT). Se já houver um arquivo LICENSE no repositório, mantenha a licença existente.

## Contato

GitHub: [@danvitoriano](https://github.com/danvitoriano)
