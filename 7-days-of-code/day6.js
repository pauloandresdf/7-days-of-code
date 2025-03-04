let frutas = [];
let laticionios = [];
let congelados = [];
let doces = [];
let bebidas = [];
let outros = [];
let continuar = true;

alert("Vamos fazer uma lista de compras!");

while (continuar) {
    let comida = prompt("Qual comida você deseja inserir?");
    let categoria = prompt("Qual a categoria da comida que você deseja inserir? (frutas, laticionios, congelados, doces, bebidas, outros)");

    switch(categoria) {
        case "frutas":
            frutas.push(comida);
            break;
        case "laticionios":
            laticionios.push(comida);
            break;
        case "congelados":
            congelados.push(comida);
            break;
        case "doces":
            doces.push(comida);
            break;
        case "bebidas":
            bebidas.push(comida);
            break;
        case "outros":
            outros.push(comida);
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
    continuar = prompt("Deseja adicionar mais alguma comida? (sim/não)") === "sim";
console.log("Frutas: ", frutas);
console.log("Laticínios: ", laticionios);
console.log("Congelados: ", congelados);
console.log("Doces: ", doces);
console.log("Bebidas: ", bebidas);
console.log("Outros: ", outros);
    continuar = prompt("Deseja apagar alguma comida? (sim/não)") === "sim";
    if(continuar){
        let comidaApagar = prompt("Qual comida você deseja apagar?");
        let categoriaApagar = prompt("Qual a categoria da comida que você deseja apagar? (frutas, laticionios, congelados, doces, bebidas, outros)");
        switch(categoriaApagar) {
            case "frutas":
                frutas = frutas.filter(comida => comida !== comidaApagar);
                break;
            case "laticionios":
                laticionios = laticionios.filter(comida => comida !== comidaApagar);
                break;
            case "congelados":
                congelados = congelados.filter(comida => comida !== comidaApagar);
                break;
            case "doces":
                doces = doces.filter(comida => comida !== comidaApagar);
                break;
            case "bebidas":
                bebidas = bebidas.filter(comida => comida !== comidaApagar);
                break;
            case "outros":
                outros = outros.filter(comida => comida !== comidaApagar);
                break;
            default:
                console.log("Opção inválida!");
                break;
        }
        console.log("Frutas: ", frutas);
        console.log("Laticínios: ", laticionios);
        console.log("Congelados: ", congelados);
        console.log("Doces: ", doces);
        console.log("Bebidas: ", bebidas);
        console.log("Outros: ", outros);
    }
}
