alert("Vamos fazer algumas escolhas!");

function escolherFrameworkFront() {
    let frameworkfront = prompt("Escolha qual framework de Front End se especializar:\n1 - React\n2 - Angular\n3 - Vue");
    switch(frameworkfront) {
        case "1":
            console.log("Você escolheu React! Vamos lá!");
            return "React";
        case "2":
            console.log("Você escolheu Angular! Vamos lá!");
            return "Angular";
        case "3":
            console.log("Você escolheu Vue! Vamos lá!");
            return "Vue";
        default:
            console.log("Opção inválida para Front End!");
            return escolherFrameworkFront();
    }
}

function escolherFrameworkBack() {
    let frameworkback = prompt("Escolha qual tecnologia de Back End se especializar:\n1 - Node\n2 - Java\n3 - C#");
    switch(frameworkback) {
        case "1":
            console.log("Você escolheu Node! Vamos lá!");
            return "Node";
        case "2":
            console.log("Você escolheu Java! Vamos lá!");
            return "Java";
        case "3":
            console.log("Você escolheu C#! Vamos lá!");
            return "C#";
        default:
            console.log("Opção inválida para Back End!");
            return escolherFrameworkBack();
    }
}

let area = prompt("Qual área você deseja seguir?\n1 - Front End\n2 - Back End\n3 - Full Stack");

switch (area) {
    case "1":
        console.log("Você escolheu Front End! Vamos lá!");
        let frameworkfront = escolherFrameworkFront();
        break;
    case "2":
        console.log("Você escolheu Back End! Vamos lá!");
        let frameworkback = escolherFrameworkBack();
        break;
    case "3":
        console.log("Você escolheu Full Stack! Vamos lá!");
        let frameworkfrontFull = escolherFrameworkFront();
        let frameworkbackFull = escolherFrameworkBack();
        console.log("Você escolheu Full Stack com " + frameworkfrontFull + " e " + frameworkbackFull + "! Vamos lá!");
        break;
    default:
        console.log("Você não escolheu nenhuma das opções! Tente novamente.");
        break;
}