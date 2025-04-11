# Giphy Application Frontend

Este é um projeto frontend desenvolvido com **Vue 3** e **Quasar Framework** para buscar, visualizar e gerenciar GIFs utilizando a API do Giphy. O aplicativo permite que os usuários pesquisem GIFs, visualizem categorias, adicionem GIFs aos favoritos e naveguem por suas coleções salvas.

Uma versão demo pode ser utilizada no link:
https://giphy-sbgbr.netlify.app/#/

## Tecnologias Utilizadas

- **Vue 3**: Framework JavaScript progressivo para construção de interfaces de usuário.
- **Quasar Framework**: Framework baseado em Vue para criar aplicações responsivas e de alta performance.
- **Pinia**: Gerenciador de estado para Vue 3.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Giphy API**: API para buscar e gerenciar GIFs.

## Funcionalidades

- **Busca de GIFs**: Pesquise GIFs por palavras-chave.
- **Categorias**: Navegue por GIFs organizados em categorias.
- **Favoritos**: Adicione ou remova GIFs da sua lista de favoritos.
- **GIF Cards**: Exibição de GIFs em um layout responsivo com botões de ação.
- **Persistência de Favoritos**: Os GIFs favoritos são armazenados localmente.

## Estrutura do Projeto

- **`src/components`**: Contém os componentes reutilizáveis, como `GifCard` e `SearchInput`.
- **`src/pages`**: Contém as páginas principais do aplicativo, como `HomePage`, `FavoritesPage` e `CategoriesPage`.
- **`src/stores`**: Contém o gerenciamento de estado utilizando Pinia.
- **`src/assets`**: Contém os arquivos estáticos, como imagens e estilos.

## Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **Yarn** ou **npm**

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/giphy-aplication-frontend.git
   cd giphy-aplication-frontend
   ```

2. Instale as dependências:
   ```bash
   yarn
   # ou
   npm install
   ```

## Como Rodar o Projeto

### Modo de Desenvolvimento
Inicie o servidor de desenvolvimento com hot-reloading:
```bash
quasar dev
```

### Lint dos Arquivos
Para verificar e corrigir problemas de linting:
```bash
yarn lint
# ou
npm run lint
```

### Formatação de Código
Para formatar os arquivos do projeto:
```bash
yarn format
# ou
npm run format
```

### Build para Produção
Para gerar os arquivos otimizados para produção:
```bash
quasar build
```

## Estrutura de Componentes

### `GifCard.vue`
Componente responsável por exibir um GIF individual com as seguintes propriedades:
- **`gif`**: Objeto contendo os dados do GIF.
- **`isFavorite`**: Indica se o GIF está nos favoritos.
- **Eventos**:
  - **`toggle-favorite`**: Emite o evento para adicionar ou remover o GIF dos favoritos.

### `SearchInput.vue`
Componente de entrada para busca de GIFs:
- **`v-model`**: Sincroniza o termo de busca.
- **Eventos**:
  - **`search`**: Emite o evento para realizar a busca.

## Configuração do Quasar
Para personalizar a configuração do Quasar, consulte a [documentação oficial](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para dúvidas ou sugestões, entre em contato pelo e-mail: **jhonatanborgesdj@gmail.com**.