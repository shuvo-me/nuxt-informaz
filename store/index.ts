export const useStore = defineStore('app-store', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const tag = ref<string>('')
  const isOpen = ref<boolean>(false)


  const setTag = (str: string) => {
    tag.value = str
  }

  const showModal = () => {
    isOpen.value = true
  }

  const hideModal = () => {
    isOpen.value = false
    console.log({ isOpen })
  }

  return {
    count,
    setTag,
    tag,
    isOpen,
    showModal,
    hideModal
  }
})