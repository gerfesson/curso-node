const service = require('./service')

async function main() {
    try{
        const result = await service.obterPessoas('a')
        const names = []

        //for
        for(let i = 0; i <= result.results.length - 1; i++){
            const pessoa =  result.results[i]
            names.push(pessoa.name)
        }

        //forin
        for(let i in result.results){
            const pessoa =  result.results[i]
            names.push(pessoa.name)
        }

        //forof
        for(pessoa of result.results){
            names.push(pessoa.name);
        }
        
        console.log('names ', names)
    }
    catch(error){
        console.log('erro interno ', error)
    }
}

main()