const { obterPessoas } = require('./service')

Array.prototype.meuFilter = function (callback) {
    let lista = []
    for (index in this) {
        const item = this[index]
        const result = callback(item)
        if(!result) continue;
        lista.push(item)
    }
    return lista;
}

async function main(){
    try {
        const { results } = await obterPessoas('a')
        //por padrão precisa retornar um booleano
        //para informar se deve manter ou remover da lista
        //false > remove da lista
        //true > mantem
        //nao encontrou = -1
        //encontrou = posicao no array

        //filter
        // const familiaLars = results.filter(item => {
        //     const result = item.name.toLowerCase().indexOf('lars') !== -1
        //     return result
        // })

        //meuFilter
        const familiaLars = results.meuFilter(item => {
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = familiaLars.map((pessoa) => pessoa.name)
        console.log('names ', names)
    } catch (error) {
        console.log('DEU RUIM ', error)
    }
}

main()