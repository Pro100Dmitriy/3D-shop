import { useHttp } from "../hooks/http.hook"

const useMongoServer = () => {
    const { request } = useHttp()

    const _apiBase = 'http://localhost:5000'

    const getAllCategories = async () => {
        const res = await request( `${ _apiBase }/api/category` )
        return res.map( _transformCategory )
    }

    const getAllPositions = async () => {
        const res = await request( `${ _apiBase }/api/position/?limit=8` )
        return res.map( _transformPosition )
    }

    const _transformCategory = category => {
        return {
            id: category._id,
            title: category.name,
            imgSrc: `${ _apiBase }/${ category.imageSrc }`
        }
    }

    const _transformPosition = position => {
        const thumbnail = position.thumbnail.map( thumb => `${ _apiBase }/${ thumb }` )
        const images = position.image.map( img => `${ _apiBase }/${ img }` )
        return {
            id: position._id,
            title: position.name,
            description: position.description,
            price: position.cost,
            sizes: position.sizes,
            category: position.category,
            thumbnail,
            images
        }
    }

    return { getAllCategories, getAllPositions }
}

export default useMongoServer