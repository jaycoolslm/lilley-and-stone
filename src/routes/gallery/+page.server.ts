import fs from 'fs';
import type { LoadEvent } from '@sveltejs/kit';

let myPromise = new Promise((res, rej) => {
    fs.readdir('C:/Users/jakeh/Desktop/lilley-and-stone/src/lib/assets/school', async (err, filenames) => {
        if (err) {
            rej(err)
        } else {
            res(filenames)
        }
    })
})

/** @type {import('./$types').ServerLoad} */
export async function load({ params }: LoadEvent) {
    const files = await myPromise.then((value) => {
        console.log('this is value', value)
        return value
    }, (error) => {
        console.log('error', error)
    })

    return {
        files
    }
}