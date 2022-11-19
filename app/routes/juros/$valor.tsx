//OBS: use '$' to pass number through URL and <valor> i variable udes to handle data

import type { LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

//use params to send value by URL dinamyc
export const loader : LoaderFunction = async({params})=> {
    const calcMontante = (c: number, i: number, t:number) => c * Math.pow(1 + i,t)
    const juros = 0.01
    const valor =Number(params.valor) 

    const calculos = []
    for(let t=0; t<=120;t++){
      calculos.push({
        t,
        m: calcMontante(valor, juros, t )
      })  
    }
  
        return {
            calculos,
        }

}

export default function JurosValor () {
    const data = useLoaderData()
   return (
   <>
   <h1>Juros</h1>
   <table>
    {data.calculos.map((calculo : any) => (
        <tr>
           <td>{calculo.t}</td> 
           <td>R${calculo.m.toFixed(2)}</td>
        </tr>

    ))}
   </table>
   </>) 
}

