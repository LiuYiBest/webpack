import x from './x.js'

// console.log('111')
const div = document.getElementById('app')

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('加载错误')
    })
}
div.appendChild(button)