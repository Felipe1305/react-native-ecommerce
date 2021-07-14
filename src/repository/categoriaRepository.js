import api from '../config/api.config'

const getCategorias = async () => {
    try {
        const categorias = await api.get('categorias', {responseType: 'text'})
        return categorias.data;
    } catch (error) {
        console.log(error)
    }
}

export default getCategorias;