import { ListData } from "@/core/modules/BlogData"
import axios from "axios"

const DataAPI = async (): Promise<ListData> => {
    const res = await (await axios.get(`${process.env.DATA_API_URL}/api/blog`)).data
    return {
        code: res.code,
        data: res.data,
    }
}

export default DataAPI