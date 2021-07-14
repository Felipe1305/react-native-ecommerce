


const getImages = async () => {
    try {
        const images = await api.get('', {responseType: 'text'})
        return categorias.data;
    } catch (error) {
        console.log(error)
    }
}

export default getImages;