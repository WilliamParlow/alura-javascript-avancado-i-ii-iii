class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template(model) {
        throw new Error('O método template dever ser implementado');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }


}
