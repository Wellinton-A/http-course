const printUrlParts = (urlString) => {
    const urlObj = new URL(urlString)
    const { hash, hostname, host, pathname, protocol } = urlObj
    console.log( `hash: ${hash}`, `hostname: ${hostname}`, `host: ${host}`, `pathname: ${pathname}`, `protocol: ${protocol}` )
}

const url = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank#id'

printUrlParts(url)