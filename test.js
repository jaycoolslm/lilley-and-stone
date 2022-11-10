import fs from 'fs'

let myPromise = new Promise((res, rej) => {
    fs.readdir('src/lib/assets/school', async (err, filenames) => {
        if (err) {
            rej('ERROR CUZ')
        } else {
            res(filenames)
        }
    })
})

const files = await myPromise.then((value) => {
    console.log('this is value', value)
    return value
}, (error) => {
    console.log('error', error)
})



console.log('files', files)
