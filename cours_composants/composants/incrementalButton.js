const incrementalButton = {
    template: `<button @click="valueButton++;$emit('add')">{{valueButton}}</button>`,
    data() {
        return {
            valueButton: 0
        }
    }
}