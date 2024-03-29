// const { createApp, ref } = Vue

// createApp({
//     setup() {
//       const message = ref('Hello vue!')
//       return {
//         message
//       }
//     }
//   }).mount('#app')

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}).mount('#app')
