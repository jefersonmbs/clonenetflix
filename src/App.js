import movdb from './db';
import React, {useEffect, useState} from "react";
import LinhaDeFilmes from "./components/LinhaDeFilmes";
import './App.css'


export default () => {
    const [listaDeFilmes, setLista] = useState([])
    useEffect(() => {
        const load = async () => {
            let lista = await movdb.getListaPrincipal();
            setLista(lista)
        }
        load();
    }, []);
    return (
        <div>
            <section className="page">
                <div>
                    {listaDeFilmes.map((item, key) => (
                        <LinhaDeFilmes  key={key} title={item.title} items={item.items} />
                    ))}
                </div>
            </section>
        </div>
    );
}