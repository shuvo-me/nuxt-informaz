export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const name = ref('Eduardo')
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        console.log('hi')
      count.value++
    }

    function decrement(){
      count.value--
    }
  
    return { count, name, doubleCount, increment }
  })