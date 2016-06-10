class NegociacaoService {

    constructor() {
        this.http = new HttpService();
    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {
            this.http.get('negociacoes/semana')
                .then(dados => resolve(dados.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))))
                .catch(erro => reject('Não foi possível obter as negociaçõs do servidor'))
        });
    }
    
    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {
            this.http.get('negociacoes/anterior')
                .then(dados => resolve(dados.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))))
                .catch(erro => reject('Não foi possível obter as negociaçõs da semana anterior'))
        });
    }

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {
            this.http.get('negociacoes/retrasada')
                .then(dados => resolve(dados.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))))
                .catch(erro => reject('Não foi possível obter as negociaçõs da semana retrasada'))
        });
    }
}
