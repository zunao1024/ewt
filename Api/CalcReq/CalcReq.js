//原js里爬出来的一大陀，花了亿点点时间改了一下
//https://web.ewt360.com/common/eHeader.min.js?version=0.0.2
class calcReqSign {
    calcReqSignO(t) {
        for (var e, n = "0123456789abcdef", o = "", r = 0; r < t.length; r += 1){
            e = t.charCodeAt(r),
            o += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);}
        return o
    }
    calcReqSignM(t) {
        for (var e = "", n = 32 * t.length, o = 0; o < n; o += 8){
            e += String.fromCharCode(t[o >> 5] >>> o % 32 & 255);}
        return e
    }
    calcReqSignU(t, e) {
        var n = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
    }
    calcReqSignC(t, e, n, o, r, i) {
        return this.calcReqSignU((e = this.calcReqSignU(this.calcReqSignU(e, t), this.calcReqSignU(o, i))) << r | e >>> 32 - r, n)
    }
    calcReqSignD(t, e, n, o, r, i, a) {
        return this.calcReqSignC(e & n | ~e & o, t, e, r, i, a)
    }
    calcReqSignH(t, e, n, o, r, i, a) {
        return this.calcReqSignC(e & o | n & ~o, t, e, r, i, a)
    }
    calcReqSignP(t, e, n, o, r, i, a) {
        return this.calcReqSignC(e ^ n ^ o, t, e, r, i, a)
    }
    calcReqSignF(t, e, n, o, r, i, a) {
        return this.calcReqSignC(n ^ (e | ~o), t, e, r, i, a)
    }
    calcReqSignA(t, e) {
        t[e >> 5] |= 128 << e % 32,
        t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var n, o, r, i, a = 1732584193, s = -271733879, c = -1732584194, m = 271733878, l = 0; l < t.length; l += 16){
            a = this.calcReqSignD(n = a, o = s, r = c, i = m, t[l], 7, -680876936),
            m = this.calcReqSignD(m, a, s, c, t[l + 1], 12, -389564586),
            c = this.calcReqSignD(c, m, a, s, t[l + 2], 17, 606105819),
            s = this.calcReqSignD(s, c, m, a, t[l + 3], 22, -1044525330),
            a = this.calcReqSignD(a, s, c, m, t[l + 4], 7, -176418897),
            m = this.calcReqSignD(m, a, s, c, t[l + 5], 12, 1200080426),
            c = this.calcReqSignD(c, m, a, s, t[l + 6], 17, -1473231341),
            s = this.calcReqSignD(s, c, m, a, t[l + 7], 22, -45705983),
            a = this.calcReqSignD(a, s, c, m, t[l + 8], 7, 1770035416),
            m = this.calcReqSignD(m, a, s, c, t[l + 9], 12, -1958414417),
            c = this.calcReqSignD(c, m, a, s, t[l + 10], 17, -42063),
            s = this.calcReqSignD(s, c, m, a, t[l + 11], 22, -1990404162),
            a = this.calcReqSignD(a, s, c, m, t[l + 12], 7, 1804603682),
            m = this.calcReqSignD(m, a, s, c, t[l + 13], 12, -40341101),
            c = this.calcReqSignD(c, m, a, s, t[l + 14], 17, -1502002290),
            a = this.calcReqSignH(a, s = this.calcReqSignD(s, c, m, a, t[l + 15], 22, 1236535329), c, m, t[l + 1], 5, -165796510),
            m = this.calcReqSignH(m, a, s, c, t[l + 6], 9, -1069501632),
            c = this.calcReqSignH(c, m, a, s, t[l + 11], 14, 643717713),
            s = this.calcReqSignH(s, c, m, a, t[l], 20, -373897302),
            a = this.calcReqSignH(a, s, c, m, t[l + 5], 5, -701558691),
            m = this.calcReqSignH(m, a, s, c, t[l + 10], 9, 38016083),
            c = this.calcReqSignH(c, m, a, s, t[l + 15], 14, -660478335),
            s = this.calcReqSignH(s, c, m, a, t[l + 4], 20, -405537848),
            a = this.calcReqSignH(a, s, c, m, t[l + 9], 5, 568446438),
            m = this.calcReqSignH(m, a, s, c, t[l + 14], 9, -1019803690),
            c = this.calcReqSignH(c, m, a, s, t[l + 3], 14, -187363961),
            s = this.calcReqSignH(s, c, m, a, t[l + 8], 20, 1163531501),
            a = this.calcReqSignH(a, s, c, m, t[l + 13], 5, -1444681467),
            m = this.calcReqSignH(m, a, s, c, t[l + 2], 9, -51403784),
            c = this.calcReqSignH(c, m, a, s, t[l + 7], 14, 1735328473),
            a = this.calcReqSignP(a, s = this.calcReqSignH(s, c, m, a, t[l + 12], 20, -1926607734), c, m, t[l + 5], 4, -378558),
            m = this.calcReqSignP(m, a, s, c, t[l + 8], 11, -2022574463),
            c = this.calcReqSignP(c, m, a, s, t[l + 11], 16, 1839030562),
            s = this.calcReqSignP(s, c, m, a, t[l + 14], 23, -35309556),
            a = this.calcReqSignP(a, s, c, m, t[l + 1], 4, -1530992060),
            m = this.calcReqSignP(m, a, s, c, t[l + 4], 11, 1272893353),
            c = this.calcReqSignP(c, m, a, s, t[l + 7], 16, -155497632),
            s = this.calcReqSignP(s, c, m, a, t[l + 10], 23, -1094730640),
            a = this.calcReqSignP(a, s, c, m, t[l + 13], 4, 681279174),
            m = this.calcReqSignP(m, a, s, c, t[l], 11, -358537222),
            c = this.calcReqSignP(c, m, a, s, t[l + 3], 16, -722521979),
            s = this.calcReqSignP(s, c, m, a, t[l + 6], 23, 76029189),
            a = this.calcReqSignP(a, s, c, m, t[l + 9], 4, -640364487),
            m = this.calcReqSignP(m, a, s, c, t[l + 12], 11, -421815835),
            c = this.calcReqSignP(c, m, a, s, t[l + 15], 16, 530742520),
            a = this.calcReqSignF(a, s = this.calcReqSignP(s, c, m, a, t[l + 2], 23, -995338651), c, m, t[l], 6, -198630844),
            m = this.calcReqSignF(m, a, s, c, t[l + 7], 10, 1126891415),
            c = this.calcReqSignF(c, m, a, s, t[l + 14], 15, -1416354905),
            s = this.calcReqSignF(s, c, m, a, t[l + 5], 21, -57434055),
            a = this.calcReqSignF(a, s, c, m, t[l + 12], 6, 1700485571),
            m = this.calcReqSignF(m, a, s, c, t[l + 3], 10, -1894986606),
            c = this.calcReqSignF(c, m, a, s, t[l + 10], 15, -1051523),
            s = this.calcReqSignF(s, c, m, a, t[l + 1], 21, -2054922799),
            a = this.calcReqSignF(a, s, c, m, t[l + 8], 6, 1873313359),
            m = this.calcReqSignF(m, a, s, c, t[l + 15], 10, -30611744),
            c = this.calcReqSignF(c, m, a, s, t[l + 6], 15, -1560198380),
            s = this.calcReqSignF(s, c, m, a, t[l + 13], 21, 1309151649),
            a = this.calcReqSignF(a, s, c, m, t[l + 4], 6, -145523070),
            m = this.calcReqSignF(m, a, s, c, t[l + 11], 10, -1120210379),
            c = this.calcReqSignF(c, m, a, s, t[l + 2], 15, 718787259),
            s = this.calcReqSignF(s, c, m, a, t[l + 9], 21, -343485551),
            a = this.calcReqSignU(a, n),
            s = this.calcReqSignU(s, o),
            c = this.calcReqSignU(c, r),
            m = this.calcReqSignU(m, i);}
        return [a, s, c, m]
    }
    calcReqSignL(t) {
        var e = [];
        for (e[(t.length >> 2) - 1] = void 0,
        o = 0; o < e.length; o += 1){
            e[o] = 0;}
        for (var n = 8 * t.length, o = 0; o < n; o += 8){
            e[o >> 5] |= (255 & t.charCodeAt(o / 8)) << o % 32;}
        return e
    }
    calcReqSignG(t) {
        return unescape(encodeURIComponent(t))
    }
    calcReqSignI(t) {
        return this.calcReqSignM(this.calcReqSignA(this.calcReqSignL(t = this.calcReqSignG(t)), 8 * t.length))
    }
    calcReqSignW(t) {
        return this.calcReqSignO(this.calcReqSignI(t))
    }
}

const crypto = require('crypto')
class calcReqPwd {
  constructor() {
    // 初始化密钥和偏移量，使用Buffer.from转换为二进制数据
    this.key = Buffer.from("20171109124536982017110912453698", "utf8")
    this.iv = Buffer.from('2017110912453698', "utf8")
  }

  // 定义一个加密的方法，接受一个字符串作为参数
  encrypt(word) {
    // 创建一个aes-256-cbc的加密器
    let cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv)
    // 使用加密器对字符串进行加密，输出格式为hex
    let encrypted = cipher.update(word, 'utf8', 'hex')
    // 结束加密，并返回加密后的结果
    encrypted += cipher.final('hex')
    return encrypted.toUpperCase()
  }

  // 定义一个密码加密的方法，接受一个字符串作为参数
  passwordEncrypt(password) {
    // 判断密码是否为空或未定义，如果是则返回空字符串或undefined
    if (typeof password === 'undefined') return undefined
    if (!password) return ''
    // 否则，调用加密方法对密码进行加密，并返回加密后的结果
    return this.encrypt(password)
  }
}

class calcReq {
    //调用sign(timestamp)返回签名，用于请求头，timestamp可选，不建议为空
    sign(timestamp) {
        switch (typeof timestamp){
            case "string":
                return (new calcReqSign).calcReqSignW(timestamp + "bdc739ff2dcf").toLocaleUpperCase();
            case "undefined":
                return (new calcReqSign).calcReqSignW(String((new Date).getTime()) + "bdc739ff2dcf").toLocaleUpperCase();
            case "number":
                return (new calcReqSign).calcReqSignW(String(timestamp) + "bdc739ff2dcf").toLocaleUpperCase();
            default:
                return "Para Err."
        }
    }
    password(pwd) {
        return (new calcReqPwd).passwordEncrypt(pwd)
    }
}

module.exports = calcReq
//测试
//console.log((new calcReq).sign(1700916064786))
//console.log((new calcReq).password("111"))