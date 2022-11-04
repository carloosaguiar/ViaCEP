const cep = document.getElementsByTagName('input')[0];

//inputs
const rua = document.getElementsByTagName('input')[1];
const bairro = document.getElementsByTagName('input')[2];
const cidade = document.getElementsByTagName('input')[3];
const uf = document.getElementsByTagName('input')[4];

// requisição dos dados da API ViaCEP
async function buscarCep(cep){
    const getCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await getCEP.json();

    rua.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    uf.value = data.uf;
}

//manipulção de string no input
const keys = ['0','1','2','3','4','5','6','7','8','9'];

cep.onkeyup = (e) =>{
    if(keys.includes(e.key) === false){
        cep.value = cep.value.replace(e.key, '');
    };

    if(cep.value.length === 5){
        cep.value += '-'
    }

    //Chamando a função buscarCEP
    if(cep.value.length == 9){
        let cepBuscar = cep.value.replace('-','');
        
        buscarCep(cepBuscar);
    }
};
