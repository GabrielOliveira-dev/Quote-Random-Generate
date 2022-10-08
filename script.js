const textQuote = document.querySelector('#text-quote');
const authorQuote = document.querySelector('#author-quote');
const button = document.querySelector('#new-quote');
const clipBoard = document.querySelector('#clipboard')


const colocaNaTela = (text, author) => {
    textQuote.innerText = text;
    if(!author) {
        authorQuote.innerText = "Unknown author";
        return;
    }
    
    authorQuote.innerText = author;

    
}

const randomizaNumero = (tamanhoArray) => {
    return Math.floor(Math.random() * tamanhoArray - 1); 
}

const fazRequisicao = async () => {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const numeroRandomico = randomizaNumero(data.length);
    colocaNaTela(data[numeroRandomico].text, data[numeroRandomico].author);
}

const copiaParaOClipBoard = () => {
    const text = textQuote.innerText;
    const auth = authorQuote.innerText;
    const message = `"${text}" - ${auth}`

    navigator.clipboard.writeText(message)
}
button.addEventListener('click', fazRequisicao);
clipBoard.addEventListener('click', copiaParaOClipBoard);

fazRequisicao();