import { ListData } from "@/core/modules/BlogData"
import axios from "axios"
import { DefaultHeader } from "@/core/modules/Headers"

const DataAPI = async (): Promise<ListData> => {
    
    const res = await (await axios(`${process.env.DATA_API_URL}/api/blog`, {
        method: "GET",
        headers: DefaultHeader(),
    })).data
    return {
        code: res.code,
        data: res.data,
    }
}

export default DataAPI