# React + Vite - FIAP Blog

Construção de Blog com CMS para gestão de conteúdo utilizando Contentful + React. 

### Etapas
1. Construção da tela de exibição dos últimos posts - DONE
2. Construção de tela de paginação dos posts - DONE
3. Desenvolvimento do README - DONE
4. Deploy no Vercel com hot deploy - DONE

### Bibliotecas e Dependencias

- "bootstrap": "^5.3.2"
- "contentful": "^10.6.21"
- "react": "^18.2.0"
- "vite": "^5.0.8"

### Features Disponíveis
- Integração com CMS - Contentful para gestão de conteúdo
- Tela inicial com últimos posts
- Tela de detalhe de cada post
- Tela de paginação de todos os posts disponíveis
- Principais categorias
  
### Executando projeto localmente
1. Clonar o projeto localmente
2. Configurar o arquivo `constant.js` com os tokens do contentful (`spaceID` e `accessToken`).
   - Em carater de estudo, o arquivo foi commitado no projeto. NÃO REPETIR EM PRODUÇÃO.
3. Executar o comando `npm install` para instalação de dependencias.
4. Executar o comando `npm run dev` para subir a aplicação localmente.
