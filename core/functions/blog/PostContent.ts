import { ContentData } from "@/core/modules/BlogData"
import axios from "axios"

const DataAPI = async (slug: string): Promise<ContentData> => {
    const res = await (await axios.get(`${process.env.DATA_API_URL}/api/blog/${slug}`)).data
    return {
        code: res.code,
        data: res.data,
    }
}

export default DataAPI