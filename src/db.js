const API_KEY = '467f87ccbca3c0c9063d1d7a1ca20e3f';
const BASE_URL = 'https://api.themoviedb.org/3';

const dadosFetch = async (endpoint) => {
    const request = await fetch(`${BASE_URL}${endpoint}`);
    const jsonResult = await request.json();
    return jsonResult
}


export default {
    getListaPrincipal: async () =>{
        return [
            {
                slug: 'netflix',
                title: 'Originais da NetFlix',
                items: await dadosFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'recomendados',
                title: 'Recomendados para você',
                items: await dadosFetch(`/trending/all/week&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'maisvotados',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'acao',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedia',
                title: 'Comedia',
                items: []
            },
            {
                slug: 'terror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'roamance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentario',
                title: 'Documentários',
                items: []
            },

        ];
    }
}