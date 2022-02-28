import { useHttp } from "../hooks/http.hook"

const useMongoServer = () => {
    const { request } = useHttp()

    const _apiBase = 'http://localhost:5000'

    const getAllCategories = async () => {
        const res = await request( `${ _apiBase }/api/category` )
        return res.map( _transformCategory )
    }

    const _transformCategory = category => {
        return {
            id: category._id,
            title: category.name,
            imgSrc: `${ _apiBase }/${ category.imageSrc }`
        }
    }

    return { getAllCategories }
}

export default useMongoServer