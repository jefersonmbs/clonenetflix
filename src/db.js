const API_KEY = '467f87ccbca3c0c9063d1d7a1ca20e3f';
const BASE_URL = 'https://api.themoviedb.org/3';

const dadosFetch = async (endpoint) => {
    const request = await fetch(`${BASE_URL}${endpoint}`);
    const jsonResult = await request.json();
    return jsonResult
}

 export default {
    getListaPrincipal: async () => {
        return [
            {
                slug: 'originals',
                title : "Originais do Netflix",
                //https://api.themoviedb.org/3/discover/tv?api_key=###&with_networks=213
                items : await dadosFetch(`/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`)
            },
            {
                slug: 'trending',
                title : "Recomendados para Você",
                items : await dadosFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title : "Em Alta",
                items : await dadosFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title : "Ação",
                items : await dadosFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title : "Comédia",
                items : await dadosFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title : "Terror",
                items : await dadosFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title : "Romance",
                items : await dadosFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title : "Documentários",
                items : await dadosFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
     getInfoFilme: async (idfilme,tipo) =>{
        let info = {};
        if(idfilme){
            switch (tipo){
                case 'movie':
                    info = await dadosFetch(`/movie/${idfilme}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                case 'tv':
                    info = await dadosFetch(`/tv/${idfilme}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                default:
                    info = await dadosFetch(`/tv/87739?language=pt-BR&api_key=${API_KEY}`)
                    break;

            }
        }
        return info;
     }
}