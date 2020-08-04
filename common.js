let XAC = XAC || {}

let log = () => {
    console.log(arguments.join(' '))
}

let tic = (msg) => {
    if (XAC.t0 != undefined) {
        let t1 = new Date().getMilliseconds()
        msg = msg || 'time elapsed'
        log(msg, ':', t1 - XAC.t0)
    }
    XAC.t0 = new Date().getMilliseconds()
}