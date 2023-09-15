import { marked } from "marked";

// marked.use({
//   async: false,
//   pedantic: false,
//   gfm: true,
// });

export default  defineNuxtPlugin(nuxtApp => ({
    provide:{
        md: (mdStr: string) =>  marked.parse(mdStr)
    }
}))