import { 
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"
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

const Expense = ({expense, setEditExpense}) => {
    const {name, amount, category, id, date} = expense

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setEditExpense(expense)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => console.log('Eliminar...')}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
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
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Expense
