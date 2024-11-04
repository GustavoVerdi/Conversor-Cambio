# Conversor de Moedas
Este projeto é um conversor de moedas que permite a conversão entre Real (BRL), Dólar (USD) e Euro (EUR) utilizando taxas de câmbio obtidas de uma API pública.

## Funcionalidades
- **Conversão de Moedas**: Converte valores entre diferentes moedas.
- **Validação de Entrada**: Apenas valores numéricos positivos são aceitos.
- **Interface Amigável**: Experiência de usuário intuitiva e responsiva.
- **Estrutura de Código Limpa**: Organizado em HTML, CSS e JavaScript em arquivos distintos.

## Tecnologias Utilizadas

- **HTML**: Para a estruturação da página.
- **CSS**: Para o estilo e layout da aplicação.
- **JavaScript**: Para a lógica do conversor de moedas e interações com a API.
- **API de Taxas de Câmbio**: Utiliza a [Exchange Rate API](https://open.er-api.com/v6/latest/USD) para obter as taxas de câmbio atualizadas a da 24 horas.

## Como Instalar e Executar

1. **Clone o repositório**:
   
No VScode abra um terminal de Gitbash, utilize o comando CD para selecionar o local de instalação do repositorio, ao chegar na pasta onde deseja instalar o repositorio, execute o comando abaixo,

```Bash
git clone https://github.com/GustavoVerdi/Conversor-Cambio
```
2. **Acesse o diretório do projeto:**

Abra o arquivo index.html em seu navegador: Clique duas vezes no arquivo ou use o menu de arquivos do seu navegador.
<br/>
Caso estiver utilizando a extensão do LiveServer também irá funcionar, somente executar e acessar o link ```localhost:5500```.
<hr>

Também podera utilizar o link do [github.io](https://gustavoverdi.github.io/Conversor-Cambio/) encontrado a aba <b>about/sobre<b/>.
## Funções

O método ```.map()```é usado para criar um novo array aplicando uma função a cada elemento do array original.<br/>
No código, usamos ele para transformar a entrada do usuário (string separada por vírgulas) em um array de números de ponto flutuante.

```JavaScript
const valoresValidos = valorInput.split(',').map(valor => parseFloat(valor.trim()));
```
```valorInput.split(',')``` divide a string ```valorInput``` em um array de substrings com base nas vírgulas.<br/>
```.map(valor => parseFloat(valor.trim()))``` percorre cada substring, aplica ```parseFloat()``` após remover espaços em branco com ```.trim()```, e retorna um novo array de valores numéricos (ou ```NaN``` se a conversão falhar).

<hr>

O método ``` .filter() ``` é usado para criar um novo array contendo apenas elementos que satisfazem uma condição específica.<br/> 
No código, usamos ele para filtra o array resultante de ```map()``` para incluir apenas valores numéricos positivos.

```JavaScript
.filter(valor => !isNaN(valor) && valor > 0);
```

```!isNaN(valor)``` verifica se valor é um número válido (não ```NaN```).<br/>
```valor > 0``` garante que apenas valores positivos sejam incluídos.<br/>
O resultado é um array ```valoresValidos``` que contém apenas números positivos que foram convertidos corretamente a partir da entrada do usuário.

## Como Funciona
O conversor de moedas utiliza uma taxa de câmbio para simular a conversão entre as moedas. Quando o usuário insere um valor, o sistema valida a entrada e realiza a conversão.

## Programação Funcional
O código faz uso de funções de ordem superior como map e filter, para gerenciar a lógica da conversão e a validação dos dados de entrada.

Exemplos de Entrada e Saída
Entrada:

Valor: 100
Moeda de Origem: USD
Moeda de Destino: BRL
Saída:

Valor convertido: 200.00 (considerando uma taxa de câmbio fictícia de 2.0)

## Membros do Grupo

[@GustavoVerdi](https://github.com/GustavoVerdi)
<br/>
[@Henrikygustavo](https://github.com/Henrikygustavo)
