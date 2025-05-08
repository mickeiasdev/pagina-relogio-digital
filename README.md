# ⏰ Relógio Dinâmico com JavaScript

Este é um projeto simples de um **relógio digital dinâmico** criado com **HTML**, **CSS** e **JavaScript puro**. Ele exibe a hora atual em tempo real, atualizando automaticamente a cada segundo.

## 🖥️ Demonstração

> A hora é atualizada automaticamente sem precisar recarregar a página.
![image](https://github.com/mickeiasdev/Relogio-Digital/assets/130601846/6de41352-7e3b-4fb9-8026-7f29be5ea820)


## 🚀 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)

**Você pode aprender mais sobre cada uma delas aqui:**
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference)

## 📁 Estrutura do projeto

```bash
relogio-dinamico/  
├── assets/  
│   ├── css/  
│   │   └── style.css  
│   └── js/  
│       └── index.js  
├── index.html  
└── README.md
```

- **`assets/`**: Contém os arquivos de estilo (CSS) e o script JavaScript.
- **`index.html`**: A página principal que carrega o relógio.
- **`README.md`**: Este arquivo.

## 📜 Como usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/relogio-dinamico.git

3. **Acesse a pasta do projeto:**
   ```bash
   cd relogio-dinamico

4. **Abra o arquivo `index.html` no navegador:**
   - Dê um duplo clique no arquivo, ou
   - Use uma extensão como **Live Server** no VS Code.
     
🚀 **Dica:** Ao usar o **Live Server**, o relógio vai ser atualizado automaticamente sempre que você salvar o arquivo!

## ✨ Funcionalidades

- Mostra horas, minutos e segundos em tempo real
- **Layout estilizado com fundo gradiente e caixas com sombra
- Formatação automática com dois dígitos usando `padStart`

## 🛠️ Código JavaScript principal

**O código responsável por atualizar o relógio a cada segundo é:**
```javascript
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const atualizarRelogio = setInterval(() => {
  let dataHoje = new Date();
  let hora = String(dataHoje.getHours()).padStart(2, "0");
  let minuto = String(dataHoje.getMinutes()).padStart(2, "0");
  let segundo = String(dataHoje.getSeconds()).padStart(2, "0");

  horas.textContent = hora;
  minutos.textContent = minuto;
  segundos.textContent = segundo;
}, 1000);
```

## 👨‍💻 Autor

Desenvolvido por [Mickeias Coelho](https://github.com/mickeiasdev)

Sinta-se à vontade para fazer contribuições ou melhorar o código.
