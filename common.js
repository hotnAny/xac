let XAC = XAC || {}

XAC.log = () => {
    console.log(arguments.join(' '))
}

XAC.tic = (msg) => {
    if (XAC.t0 != undefined) {
        let t1 = new Date().getMilliseconds()
        msg = msg || 'time elapsed'
        XAC.log(msg, ':', t1 - XAC.t0)
    }
    XAC.t0 = new Date().getMilliseconds()
}