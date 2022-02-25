const cep  = document.querySelector('#cep')

const showData = (Result)=>{
    for(const campo in Result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = Result[campo]
        }
        
    }
}

cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`http://viacep.com.br/ws/${search}/json/`, options)
    .then(response=>{response.json()
        .then(data=>showData(data))
    })
    .catch(e=>console.log('Deu Erro'))
})