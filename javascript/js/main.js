

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    
    //console.log(document.getElementById("agradecimento"));    
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong");
}
   // window.location.href = "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_went_wrong"; abre na mesma janela

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   elemento.innerHTML= "Obrigado por passar o mouse";
   // alert("trocar texto");

}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("Pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value  )
}


/*function soma(n1, n2){
        return n1 + n2;
 } 
alert(soma(5, 10));


/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("vai japao", "japao", "brasil"))

//var d = new Date();
//alert(d.getDay());

/*var count;
for(count=0; count <= 5; count++){   POR
    alert(count);
}/*
/*var count = 0;
while(count <=5){                   ENQUANTO
    console.log(count);
    alert(count);
    count++;
}/*

/*var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18){                   SE  
    alert("maior de idade");
}else{                              OUTRO
    alert("menor de idade");
}; /*


/*var elemento = [{nome:"agua", cor:"transparente"},{nome:"terra", cor:"marrom"},{nome:"sais minerais", cor:"imperceptivel"}]
console.log(elemento);

alert(elemento[1].nome);
var elemento = {nome:"agua", cor:"transparente"}
console.log(elemento.nome)
alert(elemento.cor); alerta da cor do elemento 

var lista = ["agua", "terra", "sais minerais"];
lista.push("adubo");
lista.push(); adiciona um elemento novo
lista.pop(); retira o ultimo elemento

console.log(lista.length); numero de elementos na lista
console.log(lista[0]); mostra apenas o primeiro elemento
console.log(lista);
console.log(lista.toString()); transforma em string separando entre virgulas
console.log(lista.join("-")); separa pelo elemento descrito
console.log(lista.toString()[0]); mostra apenas o primeiro elemento da string a letra a
console.log(lista.reverse()); inverte a lista

alert(lista[1]); alerta com o numero 1 da lista 

var name = "Thierry Varela";
var age = 22
var age2 = 10
var frase = "Dormir tarde e mais prazeroso"
alert("Welcome " + name + " " + age + " ys");
console.log(name)
console.log(age + age2)
console.log(frase.replace("tarde", "cedo"))
alert(frase.replace("tarde", "cedo")) */
