export const useStore = defineStore('app-store', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const tag = ref<string>('')


    const setTag = (str: string) => {
      tag.value = str
    }
  
    return { count, setTag,tag }
  })