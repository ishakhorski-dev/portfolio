const useTypewrite = () => {
    const vTypewrite = {
        beforeMount(el: HTMLElement, binding: { value: string; arg: number }) {
            const text: string = binding.value || el.textContent || ''
            const speed: number = Number(binding.arg) || 100
            let index: number = 0

            el.textContent = ''

            function type() {
                if (index < text.length) {
                    el.textContent += text.charAt(index)
                    index++
                    setTimeout(type, speed)
                }
            }

            type()
        }
    }

    return { vTypewrite }
}

export default useTypewrite
