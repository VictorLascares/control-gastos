import React from "react"
import { 
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from "react-swipeable-list"
import { formatDate, formatQuantity } from "../helpers"

import IconSaveUp from '../img/icono_ahorro.svg'
import IconHouse from '../img/icono_casa.svg'
import IconFood from '../img/icono_comida.svg'
import IconMiscellaneousExpenses from '../img/icono_gastos.svg'
import IconLeisure from '../img/icono_ocio.svg'
import IconHealth from '../img/icono_salud.svg'
import IconSubscriptions from '../img/icono_suscripciones.svg'


const IconDictionary = {
    ahorro: IconSaveUp,
    comida: IconFood,
    casa: IconHouse,
    gastos: IconMiscellaneousExpenses,
    ocio: IconLeisure,
    salud: IconHealth,
    suscripciones: IconSubscriptions,
}

const Expense = ({expense}) => {
    const {name, amount, category, id, date} = expense
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img src={IconDictionary[category]} alt="Icono de Categoria" />
                <div className="descripcion-gasto">
                    <p className="categoria">{category}</p>
                    <p className="nombre-gasto">{name}</p>
                    <p className="fecha-gasto">
                        Agregado el: {''}
                        <span>{formatDate(date)}</span>
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">{formatQuantity(amount)}</p>
        </div>
    )
}

export default Expense
