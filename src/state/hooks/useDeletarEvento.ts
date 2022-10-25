import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useDeletarEvento = () => {
    const seListaEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    
    return (evento: IEvento) => {

        seListaEventos(listaAntiga => [
            ...listaAntiga.filter(item => evento.id !== item.id)
        ])
    }
};

export default useDeletarEvento;