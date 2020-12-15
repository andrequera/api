// me lo paso por slack
// aca aparece el store - almacena variables - y action - declara funciones, pero cambia porque es un objeto, no se declaran de la misma manera


const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: null,
            personaje: null,
            casas: null,
            casa: null,
        },
        actions: {
            casaAleatoria: () => {
                const store = getStore();
                // llamando al store, porque no esta definido aca dentro
                fetch("https://www.potterapi.com/v1/sortingHat")
                    .then(respuesta => respuesta.json())
                    .then(datos => setStore(store.casa = datos))
                    //.then(datos=> console.log(datos)), ahora voy almacenar en el store.
                    .catch(error => console.log(error))

            },
            personajes: () => {
                const store = getStore();
                // llamando al store, porque no esta definido aca dentro
                fetch("https://www.potterapi.com/v1/characters?key=$2a$10$.OQjmG2rKAG6Ztk7nhOEFuOa85K8XM5IAQAFfZV5Gu2MAK42hHhB6")
                    .then(respuesta => respuesta.json())
                    .then(datos => setStore(store.personajes = datos))
                    //.then(datos=> console.log(datos)), ahora voy almacenar en el store.
                    .catch(error => console.log(error))
            },

            // personajes son un arreglo, debo hacer un mapeo


            personaje: (_id) => {
                //console.log(_id);
                const store = getStore();
                fetch("https://www.potterapi.com/v1/characters/" + _id + "?key=$2a$10$.OQjmG2rKAG6Ztk7nhOEFuOa85K8XM5IAQAFfZV5Gu2MAK42hHhB6")
                    .then(respuesta => respuesta.json())
                    .then(datos => setStore(store.personaje = datos))
                    .catch(error => console.log(error))
            },

            casas: () => {
                const store = getStore();
                // llamando al store, porque no esta definido aca dentro
                fetch("https://www.potterapi.com/v1/houses?key=$2a$10$.OQjmG2rKAG6Ztk7nhOEFuOa85K8XM5IAQAFfZV5Gu2MAK42hHhB6")
                    .then(respuesta => respuesta.json())
                    .then(datos => setStore(store.casas = datos))
                    //.then(datos=> console.log(datos)), ahora voy almacenar en el store, debo subir, arriba a la bodega.
                    .catch(error => console.log(error))
            },
            // haciendo la vista de casa especifica, lo llamo casaaaaa en el boton

            casa: (id) => {
                console.log(id)
                const store = getStore();
                // llamando al store, porque no esta definido aca dentro
                fetch("https://www.potterapi.com/v1/houses/" + id + "?key=$2a$10$.OQjmG2rKAG6Ztk7nhOEFuOa85K8XM5IAQAFfZV5Gu2MAK42hHhB6")
                    .then(respuesta => respuesta.json())
                    .then(datos => {
                        console.log(typeof datos)
                        setStore(store.casa = datos[0])})
                    //.then(datos=> console.log(datos)), ahora voy almacenar en el store, debo subir, arriba a la bodega.
                    .catch(error => console.log(error))
            },


        }
    };
};
export default getState;