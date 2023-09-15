import { marked } from "marked";



export default  defineNuxtPlugin(async (nuxtApp)  => ({
    provide:{
        md: (mdStr: string) =>   marked.parse(mdStr,{ "async": false,
        "breaks": false,
        "extensions": null,
        "gfm": true,
        "hooks": null,
        "pedantic": false,
        "silent": false,
        "tokenizer": null,
        "walkTokens": null})
    }
}))