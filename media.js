function calculaMedia() {
    var nota1 = Number(document.getElementById('inNota1').value);
    var nota2 = Number(document.getElementById('inNota2').value);
    var nota3 = Number(document.getElementById('inNota3').value);
    var nota4 = Number(document.getElementById('inNota4').value);
    var outResposta = document.getElementById('outSituacao');
    var outMedia = document.getElementById('outMedia');
    var outMediaFinal = document.getElementById('outMediaFinal');
 
    var exameFinal;
    var resNotas = (nota1*2+nota2*3+nota3*4+nota4*1);
    console.log(resNotas)
    var resPesos = 2+3+4+1;
    console.log(resPesos);
    var Mp = resNotas/resPesos;
    console.log("Media Ponderada "+ Mp);
    outMedia.textContent = "Media: "+ Mp.toFixed(1);
   
    if(Mp > 7.0){
        outResposta.textContent = " Aluno Aprovado";
    }if(Mp < 5.0){
        outResposta.textContent = "Aluno Reprovado";
    }else if(Mp >= 5.0 && Mp < 6.9){
        outResposta.textContent = "Aluno em Exame ";

        exameFinal = Number(prompt("informe a nota do exame"));
     //tetando adicionar um elemento html...
         document.getElementById('NotaExame').disabled = false;
       
        console.log("nota do exame f "+ exameFinal);
        var res = (Mp+exameFinal)/2;
        console.log(res)
        if(res >= 5.0){
            outResposta.textContent = "Aluno Aprovado";
          
        }if(res < 4.9){
            outResposta.textContent = "Aluno Reprovado";
        }
        outMediaFinal.textContent = "Media Final "+ res.toFixed(1);
    }
    
}
var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calculaMedia);