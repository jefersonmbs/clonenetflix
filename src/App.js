import movdb from './db';
import React, {useEffect, useState} from "react";
import LinhaDeFilmes from "./components/LinhaDeFilmes";
import Destaque from './components/Destaque';

import './App.css'


export default () => {

    const [listaDeFilmes, setLista] = useState([]);
    const [destaqueData, setDestaque] = useState(null);

    useEffect(() => {
        const load = async () => {
            let lista = await movdb.getListaPrincipal();
            setLista(lista)

            let netflix = lista.filter(i=>i.slug === "originals");
            let random = Math.floor(Math.random()*(netflix[0].items.results.length - 1))
            let escolhido = netflix[0].items.results[random];
            let resultado = await movdb.getInfoFilme(escolhido.id,'tv');

            setDestaque(resultado);

        }
        load();
    }, []);


    return (
        <div className="page">
            {destaqueData && <Destaque item={destaqueData}/>}
            <section className="lista">
                <div>
                    {listaDeFilmes.map((item, key) => (
                        <LinhaDeFilmes key={key} title={item.title} items={item.items}/>
                    ))}
                </div>
            </section>
        </div>
    );
}