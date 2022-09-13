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
            note: [
                {
                    id:1,
                    image:"src/assets/4.jpg",
                    word:"摸鱼第一名！"
                },
                {
                    id:2,
                    image:"src/assets/4.jpg",
                    word:"摸鱼第一名！"
                },
                {
                    id:3,
                    image:"src/assets/4.jpg",
                    word:"摸鱼第一名！"
                },
                {
                    id:4,
                    image:"src/assets/7bd3d3b95165c47a86b95cd5c3734d48.png",
                    word:"摸鱼第一名！"
                },
            ]  
        }
    },
    mutations: {

    }
}
)
