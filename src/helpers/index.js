export const formatQuantity = (quantity) => {
    return quantity.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
}

export const formatDate = date => {
    const newDate = new Date(date)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return newDate.toLocaleDateString('es-ES', opciones)
}