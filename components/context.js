import react, { createContext, useState } from 'react';

const ReceitasContext = createContext();

const receitas = [
    {
        id: 1,
        imagem: require('../assets/boloChocolate.jpg'),
        nome: 'Bolo de Chocolate',
        ingredientes: 'Farinha, Ovos, Chocolate...',
        preparo: 'Misture tudo e asse por 40min.'
    },
    {
        id: 2,
        imagem: require('../assets/panqueca.jpg'),
        nome: 'Panqueca',
        ingredientes: 'Farinha, Leite, Ovos...',
        preparo: 'Misture tudo e frite em uma frigideira.'
    },
    {
        id: 3,
        imagem: require('../assets/brigadeiro.jpg'),
        nome: 'Brigadeiro',
        ingredientes: 'Leite Condensado, Chocolate, Manteiga...',
        preparo: 'Cozinhe até engrossar e enrole.'
    },
    {
        id: 4,
        imagem: require('../assets/pizza.jpg'),
        nome: 'Pizza',
        ingredientes: 'Farinha, Fermento, Calabresa...',
        preparo: 'Misture farinha e fermento, adicione calabresa e asse pro 30min'
    },
    {
        id: 5,
        imagem: require('../assets/tacos.jpg'),
        nome: 'Tacos',
        ingredientes: 'Tortilha, Guacamole, Tomate...',
        preparo: 'Adicione tudo na tortilha e asse'
    },
]

export const ReceitasProvider = ({children}) => {
    const [receitasData] = useState(receitas)

    return (
        <ReceitasContext.Provider value={{ receitasData }}>
          {children}
        </ReceitasContext.Provider>
      );
    };
    
    export default ReceitasContext;