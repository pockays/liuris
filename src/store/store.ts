import { createStore } from 'vuex'
export const store = createStore({
    state() {
        return {
            mana: [
                {   
                    id:1,
                    icon:"el-icon-icon-test",
                    color:"#8a2be2",
                    title:"最新博文"
                },
                {   
                    id:2,
                    icon:"el-icon-icon-test1",
                    color:"skyblue",
                    title:"最新视频"
                },
                {  
                     id:3,
                    icon:"el-icon-icon-test2",
                    color:"pink",
                    title:"最新图片"
                },
              ],
        }
    },
    mutations: {

    }
}
)
