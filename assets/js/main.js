const novaTarefa = document.querySelector('.nova-tarefa');
const addTarefa = document.querySelector('.add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criali(){
    const li = document.createElement('li');
    return li;
}
function limpaInput(){
    novaTarefa.value = '';
    novaTarefa.focus();
}
function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}
function criaTarefa(textoInput){
    const li = criali()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
}

addTarefa.addEventListener('click',function(){
   if(!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
});
document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
})