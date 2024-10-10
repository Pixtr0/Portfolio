import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

const model = new Promise((res,rej) => {
    const fbxLoader = new FBXLoader()
    fbxLoader.load(
        'models/Cedric.fbx',
        (object) => {
            res.add(object)
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
    )
})

export default model