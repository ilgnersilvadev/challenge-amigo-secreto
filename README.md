# Projeto Amigo Secreto

Este projeto implementa uma aplicação simples para realizar sorteios de "Amigo Secreto" de forma interativa e visual, onde você pode adicionar amigos, realizar o sorteio e ver os resultados.

## Descrição

A aplicação permite que o usuário adicione nomes de amigos a uma lista e, ao clicar no botão de sortear, escolhe aleatoriamente um nome dessa lista. O resultado é mostrado na tela, indicando quem foi o amigo sorteado. A lista é então limpa, esperando pelo próximo sorteio.

## Funcionalidades

- **Adicionar amigos:** O usuário pode inserir os nomes dos amigos que participarão do sorteio, e eles aparecerão em uma lista abaixo do campo de entrada.
- **Sortear amigo secreto:** Ao clicar no botão "Sortear amigo", um nome será sorteado aleatoriamente da lista e exibido na tela. Após o sorteio, a lista de amigos é limpa.
- **Validação de entrada:** Caso o usuário não insira um nome ao tentar adicionar um amigo ou tente sortear sem ter adicionado amigos, um alerta será mostrado informando o erro.

## Estrutura de Arquivos

- `index.html`: O arquivo HTML que define a estrutura da página web.
- `style.css`: O arquivo CSS que define o estilo e o layout da página.
- `app.js`: O arquivo JavaScript que contém a lógica da aplicação, como adicionar amigos e realizar o sorteio.

## Como Usar

1. **Abrir o arquivo HTML:** Para usar a aplicação, basta abrir o arquivo `index.html` em um navegador de sua preferência.
2. **Adicionar amigos:** No campo de texto, digite o nome do amigo que deseja adicionar e clique no botão "Adicionar".
3. **Sortear amigo secreto:** Após adicionar pelo menos um amigo, clique no botão "Sortear amigo" para sortear um nome aleatoriamente da lista. O resultado será exibido abaixo do botão.

## Tecnologias Usadas

- **HTML5:** Estrutura da página.
- **CSS3:** Estilo e layout da página.
- **JavaScript:** Lógica para adicionar amigos e realizar o sorteio.

## Como Contribuir

1. Fork este repositório.
2. Crie uma branch para suas modificações (`git checkout -b feature/nova-funcionalidade`).
3. Faça as alterações necessárias e commite-as (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie suas modificações para o repositório (`git push origin feature/nova-funcionalidade`).
5. Crie um Pull Request.

