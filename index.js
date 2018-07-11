import './style.css'

import(/* webpackChunkName: "fileA" */ './fileA.js').then(FileA => {
    new FileA()
})