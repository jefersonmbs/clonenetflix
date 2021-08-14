import './Destaque.css'

export default ({item}) => {
    console.log(item)
    let data = new Date(item.first_air_date);

    let generos = [];
    for(let i in item.genres){
        generos.push(item.genres[i].name);
    };

    return (
        <section className="destaque" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="destaque--vertical">
                <div className="destaque--horizontal">
                    <div className="destaque--nome">
                        {item.name}
                    </div>
                    <div className="destaque--infos">
                        <div className="destaque--estrelas">
                            {item.vote_average} pontos
                        </div>
                        <div className="destaque--ano">
                            {data.getFullYear()}
                        </div>
                        <div className="destaque--temporadas">
                            {item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's' : ''}
                        </div>
                    </div>
                    <div className="destaque--descricao">{item.overview}</div>
                    <div className="destaque--botao">
                        <a href={`/watch/${item.id}`} className="destaque--assistir">► Assistir</a>
                        <a href={`/list/add/${item.id}`}className="destaque--add">+ Minha Lista</a>
                    </div>
                    <div className="destauque--genero">
                        <strong>Gêneros:</strong>{generos.join(', ')}
                    </div>
                    
                </div>
            </div>

        </section>
    );
}