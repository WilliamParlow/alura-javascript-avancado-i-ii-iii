var ConnectionFactory = (function() {

    let stores = ['negociacoes'];
    let version = 4;
    let dbName = 'aluraframe';

    let connection = null;

    return class ConnectionFactory {

        constructor () {
            throw new Error('ConnectionFactory não pode ser instanciada');
        }

        static getConnection() {
            return new Promise((resolve, reject) => {
                let openRequest = window.indexedDB.open(dbName, version);

                openRequest.onupgradeneeded = e => {
                    ConnectionFactory._createStores(e.target.result);
                };

                openRequest.onsuccess = e => {
                    if (!connection) connection = e.target.result;
                    resolve(connection);
                };

                openRequest.onerror = e => {
                    console.log(e.target.error.name);
                    reject(e.target.error.name);
                };
            });
        }

        static _createStores(connection) {
            stores.forEach(store => {
                if (connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store);
                connection.createObjectStore(store, {autoIncrement: true});
            });
        }
    }
})();