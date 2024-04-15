
export async function ensureUrlReturns200(url: string) {
    const response = await fetch(url);
    if (response.status !== 200) {
        console.error(`Error fetching ${url}: ${response.statusText}`);
        throw new Error();
    }
}
