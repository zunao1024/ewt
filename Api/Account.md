# 用户账户
### PS.默认省略常见请求头

## 目录
[登录](#登录)  
[账户信息](#账户信息)

### 登录
**POST**
https://gateway.ewt360.com/api/authcenter/v2/oauth/login/account
* 请求头
  |参数|值|说明|
  |---|---|---|
  |Accept|application/json|
  |Content-Type|application/json;charset=UTF-8|
  |Origin|https://web.ewt360.com|
  |Referer|https://web.ewt360.com/|
  |Platform|1|
  |Secretid|2|
  |Sign||签名[说明](Uni.md#签名)|
  |Timestamp||当前时间戳，毫秒|
* 请求内容
  ```JSON
  {
    "platform": 1,
    "userName": "",
    "password": "",
    "autoLogin": true,
    "webVersion": "pc20230830"
  }
  ```
  |项|说明|
  |---|---|
  |userName|用户名|
  |password|加密的密码，[说明](Uni.md#密码加密)|
* 返回示例
  ```JSON
  首次错误
  {
    "msg": "账号或密码错误",
    "code": "017126",
    "data": null,
    "success": false
  }
  多次错误，弹出其它方式登录框
  {
    "msg": "账号或密码错误",
    "code": "017133",
    "data": null,
    "success": false
  }
  成功
  {
    "msg": "操作成功",
    "code": "200",
    "data": {
        "upgradeJumpCode": null,
        "mobile": "1**********",
        "checkToken": null,
        "userId": "1********",
        "noBind": null,
        "token": "145************",
        "failCode": null,
        "protectedMobile": null,
        "memberType": 15,
        "jumpCode": null,
        "firstLoad": null,
        "account": "f******",
        "info": "1XN****************************************************************"
    },
    "success": true
  }
  ```
### 账户信息
**GET**
https://web.ewt360.com/api/usercenter/user/info
* 请求头
  |参数|值|说明|
  |---|---|---|
  |Accept|application/json||
  |Token||用登录api获取|
  |User-Agent|Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0||