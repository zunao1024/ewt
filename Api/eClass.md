# E讲堂

说明：
* POST请求需额外加`Content-Length`请求头，请求时计算
* 请求时可加`_=<时间戳>`请求查询以防止缓存

## 目录
[学科](#学科)  
[本周精选](#本周精选)  
[热门课程](#热门课程)  
[搜索](#搜索)  
  * [关键词](#关键词)
  * [搜索结果](#搜索结果)
[视频](#视频)
  * [视频详情](#视频详情)
  * [视频内容](#视频内容)

### [学科](#目录)
**GET**
https://web.ewt360.com/customerApi/api/studyprod/web/subject/list

* 请求头
  |参数|值|说明|
  |---|---|---|
  |Host|web.ewt360.com||
  |Token||用登录Api获取|

* 请求查询
  |参数|值|说明|
  |---|---|---|
  |type|0||
  |platform|0||
  |isCustom|false||

返回示例
  ```JSON
  {
    "success": true,
    "code": "200",
    "msg": "操作成功",
    "data": [
        {
            "subjectId": 1,
            "subjectName": "语文",
            "backgroundImg": "http://static.ewt360.com/pic/777396442152730624"
        },
        {
            "subjectId": 3,
            "subjectName": "英语",
            "backgroundImg": "http://static.ewt360.com/pic/777403056402366464"
        },
        {
            "subjectId": 2,
            "subjectName": "数学",
            "backgroundImg": "http://static.ewt360.com/pic/777400548141465600"
        },
        {
            "subjectId": 4,
            "subjectName": "物理",
            "backgroundImg": "http://static.ewt360.com/pic/777402446517010432"
        },
        {
            "subjectId": 6,
            "subjectName": "生物",
            "backgroundImg": "http://static.ewt360.com/pic/777399508759379968"
        },
        {
            "subjectId": 5,
            "subjectName": "化学",
            "backgroundImg": "http://static.ewt360.com/pic/777397893851676674"
        },
        {
            "subjectId": 8,
            "subjectName": "历史",
            "backgroundImg": "http://static.ewt360.com/pic/777398349118210048"
        },
        {
            "subjectId": 7,
            "subjectName": "政治",
            "backgroundImg": "http://static.ewt360.com/pic/777403365640011776"
        },
        {
            "subjectId": 9,
            "subjectName": "地理",
            "backgroundImg": "http://static.ewt360.com/pic/777397515894554624"
        },
        {
            "subjectId": 11,
            "subjectName": "通用技术",
            "backgroundImg": "https://static.ewt360.com/pic/777401415724859392"
        },
        {
            "subjectId": 10,
            "subjectName": "信息技术",
            "backgroundImg": "https://static.ewt360.com/pic/777402815884197888"
        }
    ]
  }
  ```

### [本周精选](#目录)
**GET**
https://web.ewt360.com/customerApi/api/studyprod/home/weekAndLiteracy

* 请求头
  |参数|值|说明|
  |---|---|---|
  |Host|web.ewt360.com||
  |Token||用登录Api获取|

* 返回示例
  ```JSON
  {
    "success": true,
    "code": "200",
    "msg": "操作成功",
    "data": [
        {
            "title": "本周精选",
            "icon": "http://bbsatta.ewt360.com/group2/M00/1F/B9/rBC96F-7VvmAAr1sAAADh_HBj2U089.png",
            "sort": 1,
            "banner": {
                "bannerImg": "http://bbsatta.ewt360.com/group2/M00/02/A6/rBC952JQAZaARD4eAAG81GeDL2E368.png",
                "bannerUrl": "https://web.ewt360.com/themeTemplateClient/index.html?id=1512312383739572226"
            },
            "titleJumpUrl": "",
            "courseList": [
                {
                    "courseId": "6451",
                    "subjectId": 2,
                    "subjectName": "数学",
                    "teacherName": "张鹤",
                    "courseIcon": "https://static.ewt360.com/pic/547272747269292032",
                    "commentCount": "三角恒等变换",
                    "playCount": "549569",
                    "allCount": 3,
                    "updateCount": 3,
                    "newCourse": false,
                    "courseScore": "8.02",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=6451"
                },
                {
                    "courseId": "7938",
                    "subjectId": 3,
                    "subjectName": "英语",
                    "teacherName": "来华飞",
                    "courseIcon": "https://static.ewt360.com/pic/637882229204025344",
                    "commentCount": "定语从句3-介词+which/whom",
                    "playCount": "530742",
                    "allCount": 3,
                    "updateCount": 3,
                    "newCourse": false,
                    "courseScore": "8.36",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=7938"
                },
                {
                    "courseId": "9199",
                    "subjectId": 4,
                    "subjectName": "物理",
                    "teacherName": "王琪",
                    "courseIcon": "https://static.ewt360.com/pic/742729209896075264",
                    "commentCount": "【同步精讲4-3】牛顿第二定律",
                    "playCount": "116394",
                    "allCount": 4,
                    "updateCount": 4,
                    "newCourse": false,
                    "courseScore": "9.19",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=9199"
                },
                {
                    "courseId": "6450",
                    "subjectId": 5,
                    "subjectName": "化学",
                    "teacherName": "解晓怡",
                    "courseIcon": "https://static.ewt360.com/pic/677317055547768832",
                    "commentCount": "原子结构与元素周期表",
                    "playCount": "380730",
                    "allCount": 3,
                    "updateCount": 3,
                    "newCourse": false,
                    "courseScore": "8.14",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=6450"
                },
                {
                    "courseId": "6006",
                    "subjectId": 7,
                    "subjectName": "政治",
                    "teacherName": "梁侠",
                    "courseIcon": "https://static.ewt360.com/pic/517779172487954432",
                    "commentCount": "我国的个人收入分配与社会保障",
                    "playCount": "78560",
                    "allCount": 4,
                    "updateCount": 4,
                    "newCourse": false,
                    "courseScore": "8.82",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=6006"
                },
                {
                    "courseId": "5901",
                    "subjectId": 8,
                    "subjectName": "历史",
                    "teacherName": "张乐程",
                    "courseIcon": "https://static.ewt360.com/pic/494759479221223424",
                    "commentCount": "第14课 清朝前中期的鼎盛与危机",
                    "playCount": "128939",
                    "allCount": 3,
                    "updateCount": 3,
                    "newCourse": false,
                    "courseScore": "9.08",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=5901"
                },
                {
                    "courseId": "5925",
                    "subjectId": 8,
                    "subjectName": "历史",
                    "teacherName": "张乐程",
                    "courseIcon": "https://static.ewt360.com/pic/501603793075240960",
                    "commentCount": "第16课 鸦片战争的冲击与因应",
                    "playCount": "191118",
                    "allCount": 4,
                    "updateCount": 4,
                    "newCourse": false,
                    "courseScore": "9.42",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=5925"
                },
                {
                    "courseId": "4051",
                    "subjectId": 9,
                    "subjectName": "地理",
                    "teacherName": "赵军",
                    "courseIcon": "https://static.ewt360.com/upload/ewt/kecheng/2018/08/18/20180818162944234.jpg",
                    "commentCount": "地貌的观察",
                    "playCount": "153404",
                    "allCount": 2,
                    "updateCount": 2,
                    "newCourse": false,
                    "courseScore": "9.5",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=4051"
                }
            ]
        },
        {
            "title": "综合素养",
            "icon": "http://bbsatta.ewt360.com/group2/M00/1F/B9/rBC96F-7VxCAIdgmAAAFdyeWpDk103.png",
            "sort": 2,
            "banner": {
                "bannerImg": "http://bbsatta.ewt360.com/group2/M00/22/FE/rBC96F_AziSAQYTrAACv0G2kvL8097.jpg",
                "bannerUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=1715&lessonId=6877"
            },
            "titleJumpUrl": "https://web.ewt360.com/site-study/#/literacy",
            "courseList": [
                {
                    "courseId": "1697",
                    "subjectId": 0,
                    "subjectName": "其他",
                    "teacherName": "罗潇",
                    "courseIcon": "https://static.ewt360.com/pic/432297967403991040",
                    "commentCount": "不一样的领导力",
                    "playCount": "681472",
                    "allCount": 21,
                    "updateCount": 21,
                    "newCourse": false,
                    "courseScore": "8.66",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=1697"
                },
                {
                    "courseId": "1503",
                    "subjectId": 0,
                    "subjectName": "其他",
                    "teacherName": "曾昊溟",
                    "courseIcon": "https://static.ewt360.com/pic/429529749312602112",
                    "commentCount": "中学生领导力课程",
                    "playCount": "87472",
                    "allCount": 10,
                    "updateCount": 10,
                    "newCourse": false,
                    "courseScore": "7.82",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=1503"
                },
                {
                    "courseId": "1501",
                    "subjectId": 0,
                    "subjectName": "其他",
                    "teacherName": "黄林",
                    "courseIcon": "https://static.ewt360.com/pic/432300132067508224",
                    "commentCount": "中学生创新课程",
                    "playCount": "140180",
                    "allCount": 6,
                    "updateCount": 6,
                    "newCourse": false,
                    "courseScore": "8.15",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=1501"
                },
                {
                    "courseId": "1634",
                    "subjectId": 100,
                    "subjectName": "其他",
                    "teacherName": "小E制作",
                    "courseIcon": "https://static.ewt360.com/upload/ewt/kecheng/2016/12/28/20161228135208439.jpg",
                    "commentCount": "课堂上学不到的安全小知识",
                    "playCount": "120195",
                    "allCount": 10,
                    "updateCount": 6,
                    "newCourse": false,
                    "courseScore": "9.51",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=1634"
                },
                {
                    "courseId": "1663",
                    "subjectId": 100,
                    "subjectName": "其他",
                    "teacherName": "徐跃斌",
                    "courseIcon": "https://static.ewt360.com/upload/ewt/kecheng/2019/03/22/20190322145302823.png",
                    "commentCount": "《最不靠谱的心理学》",
                    "playCount": "1628429",
                    "allCount": 20,
                    "updateCount": 20,
                    "newCourse": false,
                    "courseScore": "9.29",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=1663"
                },
                {
                    "courseId": "1016",
                    "subjectId": 0,
                    "subjectName": "其他",
                    "teacherName": "王国权",
                    "courseIcon": "https://static.ewt360.com/pic/620050761941581824",
                    "commentCount": "《说出你的高考故事》（第一季）",
                    "playCount": "1079878",
                    "allCount": 24,
                    "updateCount": 7,
                    "newCourse": false,
                    "courseScore": "9.07",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=1016"
                },
                {
                    "courseId": "1570",
                    "subjectId": 100,
                    "subjectName": "其他",
                    "teacherName": "小E制作",
                    "courseIcon": "https://static.ewt360.com/pic/620051182848409600",
                    "commentCount": "《我的高考故事》",
                    "playCount": "164067",
                    "allCount": 1,
                    "updateCount": 1,
                    "newCourse": false,
                    "courseScore": "9.4",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=1570"
                },
                {
                    "courseId": "1691",
                    "subjectId": 100,
                    "subjectName": "其他",
                    "teacherName": "吕超",
                    "courseIcon": "https://static.ewt360.com/upload/ewt/kecheng/2019/03/22/20190322145346554.png",
                    "commentCount": "《记忆的魔术》 上篇",
                    "playCount": "5286788",
                    "allCount": 4,
                    "updateCount": 4,
                    "newCourse": false,
                    "courseScore": "9.0",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=1691"
                }
            ]
        }
    ]
  }
  ```

### [热门课程](#目录)
**GET**
https://web.ewt360.com/customerApi/api/studyprod/home/hotCourseAndUpdateLesson

* 请求头
  |参数|值|说明|
  |---|---|---|
  |Host|web.ewt360.com||
  |Token||用登录Api获取|

* 返回示例
  ```JSON
  {
    "success": true,
    "code": "200",
    "msg": "操作成功",
    "data": [
        {
            "title": "热门课程",
            "sort": 1,
            "courseList": [
                {
                    "title": "三角函数的概念",
                    "contentId": "11266",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=11266"
                },
                {
                    "title": "词组短语灵活用-新教材必修二",
                    "contentId": "9042",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=9042"
                },
                {
                    "title": "词组短语灵活用-新人教必修一",
                    "contentId": "6508",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=6508"
                },
                {
                    "title": "【同步提升3-3】牛顿第三定律",
                    "contentId": "6390",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=6390"
                },
                {
                    "title": "原子结构与元素周期表",
                    "contentId": "5980",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=5980"
                },
                {
                    "title": "元素周期律",
                    "contentId": "5981",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=5981"
                },
                {
                    "title": "《中国特色社会主义》专题复习",
                    "contentId": "5880",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=5880"
                },
                {
                    "title": "第14课 清朝前中期的鼎盛与危机",
                    "contentId": "5901",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=5901"
                },
                {
                    "title": "常见的地貌类型",
                    "contentId": "4050",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=4050"
                },
                {
                    "title": "地貌的观察",
                    "contentId": "4051",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=4051"
                }
            ]
        },
        {
            "title": "最新更新",
            "sort": 2,
            "courseList": [
                {
                    "title": "每日文言一刻（新教材）",
                    "contentId": "15188",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=15188"
                },
                {
                    "title": "2023-2024学年寒假高二英语专题测易错题",
                    "contentId": "16161",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=16161"
                },
                {
                    "title": "福建选必1基础卷2易错题",
                    "contentId": "16435",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=16435"
                },
                {
                    "title": "全国选必1基础卷2易错题",
                    "contentId": "16439",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=16439"
                },
                {
                    "title": "全国选必1基础卷1易错题",
                    "contentId": "16438",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=16438"
                },
                {
                    "title": "第二章 海水中的重要元素--钠和氯（章节复习）",
                    "contentId": "8966",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=8966"
                },
                {
                    "title": "【一轮复习】直线运动1",
                    "contentId": "9266",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=9266"
                },
                {
                    "title": "福建卷新鲁科必修一提高卷2易错题",
                    "contentId": "16299",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=16299"
                },
                {
                    "title": "福建卷新鲁科必修一提高卷1易错题",
                    "contentId": "16298",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=16298"
                },
                {
                    "title": "函数y=Asin（ωx+φ）",
                    "contentId": "15090",
                    "pcUrl": "https://web.ewt360.com/site-study/#/playVideo?courseId=15090"
                }
            ]
        }
    ]
  }
  ```

### [搜索](#目录)
#### [关键词](#目录)
**GET**
https://web.ewt360.com/customerApi/api/studyprod/search/hot/words

* 请求头
  |参数|值|说明|
  |---|---|---|
  |Host|web.ewt360.com||
  |Token||用登录Api获取|

* 请求查询
  |参数|值|说明|
  |---|---|---|
  |uid|0|用户uid，可选，结果会有些许不同|

* 返回示例
  ```JSON
  {
    "success": true,
    "code": "200",
    "msg": "操作成功",
    "data": [
        {
            "hotword": "看电影学英语"
        },
        {
            "hotword": "电影"
        },
        {
            "hotword": "三体"
        },
        {
            "hotword": "红楼梦"
        },
        {
            "hotword": "免费"
        },
        {
            "hotword": "动漫"
        },
        {
            "hotword": "木风"
        },
        {
            "hotword": "乡土中国"
        },
        {
            "hotword": "音乐"
        },
        {
            "hotword": "宫崎骏"
        }
    ]
  }
  ```

#### [搜索结果](#目录)
**POST**
https://web.ewt360.com/customerApi/api/studyprod/search/result/list

* 请求头
  |参数|值|说明|
  |---|---|---|
  |Host|web.ewt360.com||

* 请求内容
  ```JSON
    {
    "context": "宫崎骏",
    "uid": "1******",
    "pageIndex": 1,
    "pageSize": 10,
    "orderType": -1,
    "subjectId": -1,
    "grade": -1,
    "hardLevel": -1
    }
  ```
  |项|说明|
  |---|---|
  |context|搜索内容|
  |uid|用户uid|
  |pageIndex|页索引，从1开始|
  |pageSize|每页数量|
  |orderType|排序方式:`-1`:默认;`1`:最新;`2`:最热;`3`:好评|
  |subjectId|所属学科:`-1`:全部;`1`:语文;`2`:数学;`3`:英语;`4`:物理;`5`:化学;`6`:生物;`7`:政治;`8`:历史;`9`:地理;`10`:信息技术;`11`:通用技术|
  |grade|年级筛选:`-1`:全部;`1`:高一;`2`:高二;`3`:高三|
  |hardLevel|课程定位:`-1`:全部;`1`:基础;`2`:提高;`3`:拔尖|

* 返回示例
  ```JSON
  {
    "success": true,
    "code": "200",
    "msg": "操作成功",
    "data": {
        "teacher": null,
        "data": [
            {
                "id": "11550",
                "courseName": "<font color='red'>宫崎骏</font>的文学世界",
                "updateResult": "9讲全",
                "teacherName": "曾凡",
                "picture": "https://file.ewt360.com/file/1006775252266909743",
                "hits": "234.9万",
                "courseScore": "9.67",
                "lessonList": [
                    {
                        "id": "46777",
                        "lessonSort": null,
                        "lessonName": "《龙猫》：童真与良善的守护者",
                        "teacherName": null
                    },
                    {
                        "id": "47458",
                        "lessonSort": null,
                        "lessonName": "《天空之城》：对天空的追逐，永不停止",
                        "teacherName": null
                    },
                    {
                        "id": "47490",
                        "lessonSort": null,
                        "lessonName": "《千与千寻》：迷失与成长",
                        "teacherName": null
                    },
                    {
                        "id": "47873",
                        "lessonSort": null,
                        "lessonName": "《哈尔的移动城堡》：星光的颜色",
                        "teacherName": null
                    },
                    {
                        "id": "48254",
                        "lessonSort": null,
                        "lessonName": "《魔女宅急便》：少女、魔法、飞翔、冒险",
                        "teacherName": null
                    },
                    {
                        "id": "48266",
                        "lessonSort": null,
                        "lessonName": "《悬崖上的金鱼姬》：以海洋为主体展开的故事",
                        "teacherName": null
                    },
                    {
                        "id": "48629",
                        "lessonSort": null,
                        "lessonName": "《幽灵公主》：见证人与自然的史诗",
                        "teacherName": null
                    },
                    {
                        "id": "48997",
                        "lessonSort": null,
                        "lessonName": "《红猪》：骑士精神的最后礼赞",
                        "teacherName": null
                    },
                    {
                        "id": "49240",
                        "lessonSort": null,
                        "lessonName": "《风之谷》：永远存在最美的地方",
                        "teacherName": null
                    }
                ]
            },
            {
                "id": "12401",
                "courseName": "找找哪些课程中，木风老师弹着吉他唱着歌~~",
                "updateResult": "2讲全",
                "teacherName": "油条学长",
                "picture": "https://file.ewt360.com/file/1102596762914996334",
                "hits": "11.1万",
                "courseScore": "9.75",
                "lessonList": [
                    {
                        "id": "52422",
                        "lessonSort": null,
                        "lessonName": "找找哪些课程中，木风老师弹着吉他唱着歌~~",
                        "teacherName": null
                    },
                    {
                        "id": "52423",
                        "lessonSort": null,
                        "lessonName": "《<font color='red'>宫崎骏</font>的文学世界》：天空之城",
                        "teacherName": null
                    }
                ]
            }
        ],
        "totalRecords": 2,
        "totalPages": 1,
        "pageIndex": 1,
        "pageSize": 10
    }
  }
  ```

### [视频](#目录)
#### [视频详情](#目录)
**POST**
https://web.ewt360.com/customerApi/api/studyprod/course/detail

* 请求头
  |参数|值|说明|
  |---|---|---|
  |Host|web.ewt360.com||
  |Token||用登录Api获取|

* 请求内容
  ```JSON
  {"courseId":"11550"}
  ```
  |项|说明|
  |---|---|
  |courseId|课程id|

* 返回示例
  ```JSON
  {
    "success": true,
    "code": "200",
    "msg": "操作成功",
    "data": {
        "id": "11550",
        "lessonCount": 9,
        "categoryCode": 1,
        "subjectId": 1,
        "subjectName": "语文",
        "picture": "https://file.ewt360.com/file/1006775252266909743",
        "courseName": "宫崎骏的文学世界",
        "collectCount": 0,
        "commentNum": 0,
        "currtLesson": 9,
        "hitCount": 2349191,
        "collected": 0,
        "lessonList": [
            {
                "id": "46777",
                "lessonName": "《龙猫》：童真与良善的守护者",
                "hasPermission": null,
                "commentMark": null,
                "downLoadUrl": null,
                "newMark": null,
                "sort": 0,
                "sortName": "第1讲",
                "teacherId": "748",
                "teacherName": "曾凡",
                "description": "龙猫一族从躲藏到接受、守护与帮助，让我们憧憬世间珍贵的童真与良善。一起探究《龙猫》主题在作文中的运用吧……",
                "playTime": "29:50",
                "hitCount": 994724,
                "videoId": null,
                "videoUrl": null,
                "videoInfo": null,
                "courseScore": "9.6"
            },
            {
                "id": "47458",
                "lessonName": "《天空之城》：对天空的追逐，永不停止",
                "hasPermission": null,
                "commentMark": null,
                "downLoadUrl": null,
                "newMark": null,
                "sort": 1,
                "sortName": "第2讲",
                "teacherId": "748",
                "teacherName": "曾凡",
                "description": "带你认识《天空之城》中，戏剧式结构是如何写的；视频后半段，还会讲解小说标题的重要作用！",
                "playTime": "24:31",
                "hitCount": 252198,
                "videoId": null,
                "videoUrl": null,
                "videoInfo": null,
                "courseScore": "9.6"
            },
            {
                "id": "47490",
                "lessonName": "《千与千寻》：迷失与成长",
                "hasPermission": null,
                "commentMark": null,
                "downLoadUrl": null,
                "newMark": null,
                "sort": 2,
                "sortName": "第3讲",
                "teacherId": "748",
                "teacherName": "曾凡",
                "description": "一起分析《千与千寻》中“白龙”“无脸男”“汤婆婆”……的人物形象，归纳这部电影的主旨！",
                "playTime": "28:42",
                "hitCount": 244671,
                "videoId": null,
                "videoUrl": null,
                "videoInfo": null,
                "courseScore": "9.8"
            },
            {
                "id": "47873",
                "lessonName": "《哈尔的移动城堡》：星光的颜色",
                "hasPermission": null,
                "commentMark": null,
                "downLoadUrl": null,
                "newMark": null,
                "sort": 3,
                "sortName": "第4讲",
                "teacherId": "748",
                "teacherName": "曾凡",
                "description": "城堡的门楣上有一个转盘，它的各种颜色有何隐喻？戳进来解惑哦~~",
                "playTime": "29:56",
                "hitCount": 212042,
                "videoId": null,
                "videoUrl": null,
                "videoInfo": null,
                "courseScore": "9.7"
            },
            {
                "id": "48254",
                "lessonName": "《魔女宅急便》：少女、魔法、飞翔、冒险",
                "hasPermission": null,
                "commentMark": null,
                "downLoadUrl": null,
                "newMark": null,
                "sort": 4,
                "sortName": "第5讲",
                "teacherId": "748",
                "teacherName": "曾凡",
                "description": "“飞鸟”的意象，可以寄托怎样的情丝？\n它在哪些我们熟悉的古诗中会出现？",
                "playTime": "23:11",
                "hitCount": 148518,
                "videoId": null,
                "videoUrl": null,
                "videoInfo": null,
                "courseScore": "9.7"
            },
            {
                "id": "48266",
                "lessonName": "《悬崖上的金鱼姬》：以海洋为主体展开的故事",
                "hasPermission": null,
                "commentMark": null,
                "downLoadUrl": null,
                "newMark": null,
                "sort": 5,
                "sortName": "第6讲",
                "teacherId": "748",
                "teacherName": "曾凡",
                "description": "在这部电影中，海洋不再作为背景，而是以主体被赋予了好奇、爱、包容与恨，这些感情也寄托在许多主要人物身上……",
                "playTime": "22:02",
                "hitCount": 144657,
                "videoId": null,
                "videoUrl": null,
                "videoInfo": null,
                "courseScore": "9.7"
            },
            {
                "id": "48629",
                "lessonName": "《幽灵公主》：见证人与自然的史诗",
                "hasPermission": null,
                "commentMark": null,
                "downLoadUrl": null,
                "newMark": null,
                "sort": 6,
                "sortName": "第7讲",
                "teacherId": "748",
                "teacherName": "曾凡",
                "description": "用澄澈的双眼去见证事实",
                "playTime": "28:57",
                "hitCount": 137340,
                "videoId": null,
                "videoUrl": null,
                "videoInfo": null,
                "courseScore": "9.7"
            },
            {
                "id": "48997",
                "lessonName": "《红猪》：骑士精神的最后礼赞",
                "hasPermission": null,
                "commentMark": null,
                "downLoadUrl": null,
                "newMark": null,
                "sort": 7,
                "sortName": "第8讲",
                "teacherId": "748",
                "teacherName": "曾凡",
                "description": "骑士精神的最后礼赞",
                "playTime": "27:46",
                "hitCount": 119110,
                "videoId": null,
                "videoUrl": null,
                "videoInfo": null,
                "courseScore": "9.6"
            },
            {
                "id": "49240",
                "lessonName": "《风之谷》：永远存在最美的地方",
                "hasPermission": null,
                "commentMark": null,
                "downLoadUrl": null,
                "newMark": null,
                "sort": 8,
                "sortName": "第9讲",
                "teacherId": "748",
                "teacherName": "曾凡",
                "description": "最美的地方",
                "playTime": "27:19",
                "hitCount": 137485,
                "videoId": null,
                "videoUrl": null,
                "videoInfo": null,
                "courseScore": "9.5"
            }
        ],
        "favorableRate": "0.0",
        "description": "宫崎骏是我们熟悉、喜爱的动画大师，\n他创造的奇幻世界慰藉着一代又一代人的灵魂。\n小凡姐姐带你遨游宫崎骏的文学世界，\n梳理叙事结构，储备写作素材，有趣又有用！",
        "courseScore": "9.67",
        "goodScore": 0,
        "keywords": [
            "宫崎骏",
            "阅读",
            "写作素材",
            "意象",
            "名著"
        ],
        "gradeList": [
            {
                "gradeId": 4,
                "gradeName": "新高一"
            },
            {
                "gradeId": 1,
                "gradeName": "高一"
            },
            {
                "gradeId": 2,
                "gradeName": "高二"
            },
            {
                "gradeId": 3,
                "gradeName": "高三"
            }
        ]
    }
  }```

#### [视频内容](#目录)

Step1:Token  
**GET**
https://web.ewt360.com/customerApi/api/studyprod/course/web/lesson/play/token/get

* 请求头
  |参数|值|说明|
  |---|---|---|
  |Host|web.ewt360.com||
  |Token||用登录Api获取|

* 请求查询
  |参数|值|说明|
  |---|---|---|
  |videoBizCode|1001||
  |lessonId|46777|课程id|
  |noAutoJump|true||

* 返回示例
  ```JSON
  {
    "success": true,
    "code": "200",
    "msg": "操作成功",
    "data": "a5166c**************"
  }
  ```

Step2:Video,使用上一步获取到的数据
**GET**
https://web.ewt360.com/api/videoplayerprod/videoplayer/getExternalVideoInfo

* 请求头
  |参数|值|说明|
  |---|---|---|
  |Host|web.ewt360.com||
  |Token||用登录Api获取|

* 请求查询
  |参数|值|说明|
  |---|---|---|
  |videoBizCode|1001||
  |lessonId|46777|课程id|
  |videoToken|a5166c**************|上一步获取到的Token|
  |sdkVersion|3.0.14|

* 返回示例
  ```JSON
  {
    "success": true,
    "code": "200",
    "msg": "操作成功",
    "data": {
        "defaultPlat": 5,
        "headUrl": "https://img2.ewt360.com/video/head20230412.mp4",
        "videoHeader": {
            "videoConfigId": "1706203726623858690",
            "videoUrl": "https://si.ewt360.com/resources/tip-access/uploads/2023/9/25/0d0da570-e85d-4419-a9a9-234e57ed0c23.mp4",
            "needCallBack": true
        },
        "footUrl": "",
        "isEncryption": null,
        "videoPlayTime": null,
        "videoList": [
            {
                "showPlat": 5,
                "appId": null,
                "platFormUuId": "1252212994",
                "videoId": "243791581033187864",
                "token": null,
                "region": "",
                "showClarityId": 20,
                "definitionList": [
                    {
                        "clarityId": 20,
                        "name": "高清",
                        "psign": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MTI1MjIxMjk5NCwiZmlsZUlkIjoiMjQzNzkxNTgxMDMzMTg3ODY0IiwiY3VycmVudFRpbWVTdGFtcCI6MTcwMjcyMDM1OCwiZXhwaXJlVGltZVN0YW1wIjoxNzAyODA2NzU4LCJjb250ZW50SW5mbyI6eyJhdWRpb1ZpZGVvVHlwZSI6IlByb3RlY3RlZEFkYXB0aXZlIiwiZHJtQWRhcHRpdmVJbmZvIjp7InByaXZhdGVFbmNyeXB0aW9uRGVmaW5pdGlvbiI6MTQzNDgyOH19LCJ1cmxBY2Nlc3NJbmZvIjp7InQiOiI2NTdlYzRlNiIsInVzIjoiZDlhMWM0YTViY2UxYTE1YSJ9fQ.-wCKE7dR-OMZJCxreKAQ0OnRJDaYtlzVKq5OUbH9UU8",
                        "url": null,
                        "key": null,
                        "size": null,
                        "footUrl": null,
                        "headUrl": null,
                        "showPlat": null
                    },
                    {
                        "clarityId": 10,
                        "name": "标清",
                        "psign": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MTI1MjIxMjk5NCwiZmlsZUlkIjoiMjQzNzkxNTgxMDMzMTg3ODY0IiwiY3VycmVudFRpbWVTdGFtcCI6MTcwMjcyMDM1OCwiZXhwaXJlVGltZVN0YW1wIjoxNzAyODA2NzU4LCJjb250ZW50SW5mbyI6eyJhdWRpb1ZpZGVvVHlwZSI6IlByb3RlY3RlZEFkYXB0aXZlIiwiZHJtQWRhcHRpdmVJbmZvIjp7InByaXZhdGVFbmNyeXB0aW9uRGVmaW5pdGlvbiI6MTQzNDgyN319LCJ1cmxBY2Nlc3NJbmZvIjp7InQiOiI2NTdlYzRlNiIsInVzIjoiMDFhNGRjNmYyMGU0N2E5OSJ9fQ.mLf1JhvyD1h-66A8ru9F9M_ScJ21ea8I6Z-Hvc2XgS4",
                        "url": null,
                        "key": null,
                        "size": null,
                        "footUrl": null,
                        "headUrl": null,
                        "showPlat": null
                    }
                ],
                "thumbnail": null
            },
            {
                "showPlat": 4,
                "appId": null,
                "platFormUuId": "",
                "videoId": "2d53ec10d29871eda8c935a6ecca0402",
                "token": null,
                "region": "cn-beijing",
                "showClarityId": 20,
                "definitionList": [
                    {
                        "clarityId": 20,
                        "name": "高清",
                        "psign": "eyJTZWN1cml0eVRva2VuIjoiQ0FJU2lBTjFxNkZ0NUIyeWZTaklyNWZEQm83TTJKcE04cnVNVjA3bnIyMEVSdTVCbGJIb3JEejJJSGhQZm5oaEF1NGV0Znd3bkcxVjZma1lscklxRTg4Wkh4T2NQWllodnNVSXJWai9Kb0hidk5ldTBic0hoWnY5dDd4NnhMR2lqcUhvZU96Y1lJNzMwWjdQQWdtMlEwWVJySkwrY1RLOUphYk1VL21nZ29KbWFkSTZSeFN4YVNFOGF2NWRPZ3BscnIwSVZ4elBNdnIvSFJQMnVtN1pIV3R1dEEwZTgzMTQ1ZmFRejlHaTZ4YlRpM2I5ek9FVXFPYVhKNFMvUGZGb05ZWnlTZjZvd093VUVxL2R5M3hvN3hGYjFhRjRpODRpL0N2YzdQMlFDRU5BK3dtbFB2dTJpOE5vSUYxV2E3UVdJWXRncmZQeGsrWjEySmJOa0lpbDVCdFJFZHR3ZUNuRldLR216c3krYjRIUEROc2ljcXZoTUhuZ3k4MkdNb0tQMHprcGVuVUdMZ2hIQ2JGRFF6MVNjVVYwR20yQWRmZjNwUUdhTTFqL0VQYS92ZnRvZ2NZdi9UTEI1c0dYSWxXRGViS2QzQnNETjRVMEIwRlNiRVpOaHoyd0tmRmVLRlFUS3c0NldPblBWL2xhYUJGUHRLWFdtaUgrV3lOcDAzVkxoZnI2YXVOcGJnUHIxVVFwTlJxQUFSVm42eS91QURzb0ZManJTOWZhNDA2VVZ4dEZxNy9IMDZ4OVRBWEQ3Smw2KzBwNHphUzVoMVczTmNrdTFRVFBwK1l5Y0RFTndBL2dqRHVIWmN5VlhQbkZxM0RGekUrcDZtdjRSbndycXJhRnU2VlUzZDhQeVRjYzEweGkxRXVUcUNuWjNWM1dVVTdTMTNScllsRDhMTmt1ZmtRdDJMUEIvdmlNbEpRZjJUNnRJQUE9IiwiQXV0aEluZm8iOiJ7XCJDSVwiOlwialV6YytGTFdGdnlOZHhPeTFJdHRrRGUvdWxiVjhmeUJoNzNoM2VNbHNic1ZsZW84bDExSTRZdFh2MHdWdjNPRnBZclJlVmZ2MUlOUVAvRGwvenk5T3hxN05BcnptY2JHRFN1ZXovUUFxdWs9XCIsXCJDYWxsZXJcIjpcIk1JTmxVWlFNbVpMcU84eUh0TnAxTTF2eDYvRVNlYjAvWlQrbGdnd2dIcWs9XCIsXCJFeHBpcmVUaW1lXCI6XCIyMDIzLTEyLTE2VDIxOjUyOjM5WlwiLFwiTWVkaWFJZFwiOlwiMmQ1M2VjMTBkMjk4NzFlZGE4YzkzNWE2ZWNjYTA0MDJcIixcIlBsYXlEb21haW5cIjpcInZvZDAxLmV3dDM2MC5jb21cIixcIlNpZ25hdHVyZVwiOlwiQlVLNzlnODZ4aGZOM0xMOFp2dXRVOWVsU3VZPVwifSIsIlZpZGVvTWV0YSI6eyJTdGF0dXMiOiJOb3JtYWwiLCJWaWRlb0lkIjoiMmQ1M2VjMTBkMjk4NzFlZGE4YzkzNWE2ZWNjYTA0MDIiLCJUaXRsZSI6IjIwMjIwMzA3MjMwMTMzXzIwMjEuMDkuMTjmm77lh6EwM+aUuSIsIkNvdmVyVVJMIjoiaHR0cHM6Ly92b2QwMS5ld3QzNjAuY29tLzJkNTNlYzEwZDI5ODcxZWRhOGM5MzVhNmVjY2EwNDAyL3NuYXBzaG90cy81NmJkZjc0YTc4MTk0ZjU4OTBiNjZkYTM2NTc1ZjNiOS0wMDAwNS5qcGciLCJEdXJhdGlvbiI6MTc5MC4yOTR9LCJBY2Nlc3NLZXlJZCI6IlNUUy5OVHZNNHg1RW1FeWdVaFZLbVFKYW16dENOIiwiUGxheURvbWFpbiI6InZvZDAxLmV3dDM2MC5jb20iLCJBY2Nlc3NLZXlTZWNyZXQiOiI4d1BLTFFtM2RON3NYRmNlOWlhSzlvUmRROWszQ3F4VnJYNm1BWG9wNHpRaiIsIlJlZ2lvbiI6ImNuLWJlaWppbmciLCJDdXN0b21lcklkIjoxMDg0MjcwODU5ODk3NDM2fQ==",
                        "url": null,
                        "key": null,
                        "size": null,
                        "footUrl": null,
                        "headUrl": null,
                        "showPlat": null
                    },
                    {
                        "clarityId": 10,
                        "name": "标清",
                        "psign": "eyJTZWN1cml0eVRva2VuIjoiQ0FJU2lBTjFxNkZ0NUIyeWZTaklyNWZEQm83TTJKcE04cnVNVjA3bnIyMEVSdTVCbGJIb3JEejJJSGhQZm5oaEF1NGV0Znd3bkcxVjZma1lscklxRTg4Wkh4T2NQWllodnNVSXJWai9Kb0hidk5ldTBic0hoWnY5dDd4NnhMR2lqcUhvZU96Y1lJNzMwWjdQQWdtMlEwWVJySkwrY1RLOUphYk1VL21nZ29KbWFkSTZSeFN4YVNFOGF2NWRPZ3BscnIwSVZ4elBNdnIvSFJQMnVtN1pIV3R1dEEwZTgzMTQ1ZmFRejlHaTZ4YlRpM2I5ek9FVXFPYVhKNFMvUGZGb05ZWnlTZjZvd093VUVxL2R5M3hvN3hGYjFhRjRpODRpL0N2YzdQMlFDRU5BK3dtbFB2dTJpOE5vSUYxV2E3UVdJWXRncmZQeGsrWjEySmJOa0lpbDVCdFJFZHR3ZUNuRldLR216c3krYjRIUEROc2ljcXZoTUhuZ3k4MkdNb0tQMHprcGVuVUdMZ2hIQ2JGRFF6MVNjVVYwR20yQWRmZjNwUUdhTTFqL0VQYS92ZnRvZ2NZdi9UTEI1c0dYSWxXRGViS2QzQnNETjRVMEIwRlNiRVpOaHoyd0tmRmVLRlFUS3c0NldPblBWL2xhYUJGUHRLWFdtaUgrV3lOcDAzVkxoZnI2YXVOcGJnUHIxVVFwTlJxQUFSVm42eS91QURzb0ZManJTOWZhNDA2VVZ4dEZxNy9IMDZ4OVRBWEQ3Smw2KzBwNHphUzVoMVczTmNrdTFRVFBwK1l5Y0RFTndBL2dqRHVIWmN5VlhQbkZxM0RGekUrcDZtdjRSbndycXJhRnU2VlUzZDhQeVRjYzEweGkxRXVUcUNuWjNWM1dVVTdTMTNScllsRDhMTmt1ZmtRdDJMUEIvdmlNbEpRZjJUNnRJQUE9IiwiQXV0aEluZm8iOiJ7XCJDSVwiOlwialV6YytGTFdGdnlOZHhPeTFJdHRrRGUvdWxiVjhmeUJoNzNoM2VNbHNic1ZsZW84bDExSTRZdFh2MHdWdjNPRnBZclJlVmZ2MUlOUVAvRGwvenk5T3hxN05BcnptY2JHRFN1ZXovUUFxdWs9XCIsXCJDYWxsZXJcIjpcIk1JTmxVWlFNbVpMcU84eUh0TnAxTTF2eDYvRVNlYjAvWlQrbGdnd2dIcWs9XCIsXCJFeHBpcmVUaW1lXCI6XCIyMDIzLTEyLTE2VDIxOjUyOjM5WlwiLFwiTWVkaWFJZFwiOlwiMmQ1M2VjMTBkMjk4NzFlZGE4YzkzNWE2ZWNjYTA0MDJcIixcIlBsYXlEb21haW5cIjpcInZvZDAxLmV3dDM2MC5jb21cIixcIlNpZ25hdHVyZVwiOlwiQlVLNzlnODZ4aGZOM0xMOFp2dXRVOWVsU3VZPVwifSIsIlZpZGVvTWV0YSI6eyJTdGF0dXMiOiJOb3JtYWwiLCJWaWRlb0lkIjoiMmQ1M2VjMTBkMjk4NzFlZGE4YzkzNWE2ZWNjYTA0MDIiLCJUaXRsZSI6IjIwMjIwMzA3MjMwMTMzXzIwMjEuMDkuMTjmm77lh6EwM+aUuSIsIkNvdmVyVVJMIjoiaHR0cHM6Ly92b2QwMS5ld3QzNjAuY29tLzJkNTNlYzEwZDI5ODcxZWRhOGM5MzVhNmVjY2EwNDAyL3NuYXBzaG90cy81NmJkZjc0YTc4MTk0ZjU4OTBiNjZkYTM2NTc1ZjNiOS0wMDAwNS5qcGciLCJEdXJhdGlvbiI6MTc5MC4yOTR9LCJBY2Nlc3NLZXlJZCI6IlNUUy5OVHZNNHg1RW1FeWdVaFZLbVFKYW16dENOIiwiUGxheURvbWFpbiI6InZvZDAxLmV3dDM2MC5jb20iLCJBY2Nlc3NLZXlTZWNyZXQiOiI4d1BLTFFtM2RON3NYRmNlOWlhSzlvUmRROWszQ3F4VnJYNm1BWG9wNHpRaiIsIlJlZ2lvbiI6ImNuLWJlaWppbmciLCJDdXN0b21lcklkIjoxMDg0MjcwODU5ODk3NDM2fQ==",
                        "url": null,
                        "key": null,
                        "size": null,
                        "footUrl": null,
                        "headUrl": null,
                        "showPlat": null
                    }
                ],
                "thumbnail": null
            }
        ],
        "interactiveInfo": null,
        "viewPlayedProgressInfo": {
            "videoPlayedProgress": "0"
        },
        "encryptType": "privateEncryption"
    }
  }
  ```
  提示：线路一为阿里云私有视频加密格式，线路二为腾讯云加密