
var buttonCadastro = document.getElementById('buttonCadatrarAlunos');
buttonCadastro.addEventListener("click", function(){
    document.getElementById('cadastrarAlunos').style.display = "flex";
});


var buttonCadastrar = document.getElementById('btnCadastrarAlunos');
buttonCadastrar.addEventListener("click", function(){
    var table = document.getElementById('customers');
    var inputName = document.getElementById('nameCadastro').value;
    var inputEmail = document.getElementById('emailCadastro').value;
    var inputPhone = document.getElementById('phoneCadastro').value;
    var inputCurso = document.getElementById('cursoCadastro').value;

    var row = table.insertRow(2);
    var nome = row.insertCell(0);
    var email = row.insertCell(1);
    var telefone = row.insertCell(2);
    var curso = row.insertCell(3);

    nome.innerHTML = inputName;
    email.innerHTML = inputEmail;
    telefone.innerHTML = inputPhone;
    curso.innerHTML = inputCurso;

    document.getElementById('cadastrarAlunos').style.display = "none";


}); 