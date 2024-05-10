import React, { useEffect, useState } from 'react';
interface DataType{//interfaz para definir tipo de dato
    id:string
    name:string,
    description:string,
    genere:string,
    score:number
}

function Table() {
    const [data, setData] = useState<DataType[]>([])//definimos tipo de dato que va recibir
    useEffect(() => {
        fetch("http://localhost:3010/api/v1/animes/getTarea2")
            .then(resp => resp.json())//convierte la respuesta en JSON
            .then((data) => {
                console.log(data)
                setData(data)//guardamos lo obtenidos en el estado
            })
    }, [])
    return (
        <div className="card">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Genere</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (//mapeamos para tarer datos
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.genere}</td>
                        <td>{item.score}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}
export default Table;