import type { LoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').ServerLoad} */
export async function load({ params }: LoadEvent) {


    return {
        hello: 'world'
    }
}