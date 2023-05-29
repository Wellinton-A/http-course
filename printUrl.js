const printUrlParts = (urlString) => {
    const urlObj = new URL(urlString)
    const { hash, hostname, host, pathname, protocol } = urlObj
    console.log( `hash: ${hash}`, `hostname: ${hostname}`, `host: ${host}`, `pathname: ${pathname}`, `protocol: ${protocol}` )
}

const url = 'https://www.youtube.com/watch?v=7PO6xdVhyuM'

printUrlParts(url)