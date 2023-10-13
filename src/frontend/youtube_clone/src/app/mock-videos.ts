export interface CommObj{
    publisher: string,
    comment: string
}

export interface VideoStats{
    viewNum: number,
    likesNum: number,
    commNum: number,
    commObj: CommObj
}

export interface MockVideo {
    id: number,
    name: string,
    publisher: string,
    thumbnail: object,  //image url
    size: number,
    videoStats: object, //{viewNum: number, likesNum: number, commNum: number, commObj: object{publisher, string}}
}

export const MockVideos: Array<MockVideo> =[
    {
        id: 1,
        name: "Sample Video 1",
        publisher: "Publisher A",
        thumbnail: { type: "jpg", url: "thumbnail_url_1.jpg" },
        size: 102400,
        videoStats: {
            viewNum: 5000,
            likesNum: 250,
            commNum: 50,
            commObj: {
                publisher: "User X",
                comment: "Nice video!"
            }
        }
    },
    {
        id: 2,
        name: "Sample Video 2",
        publisher: "Publisher B",
        thumbnail: { type: "jpg", url: "thumbnail_url_2.jpg" },
        size: 81920,
        videoStats: {
            viewNum: 7500,
            likesNum: 300,
            commNum: 60,
            commObj: {
                publisher: "User Y",
                comment: "Great content."
            }
        }
    },
    {
        id: 3,
        name: "Sample Video 3",
        publisher: "Publisher C",
        thumbnail: { type: "jpg", url: "thumbnail_url_3.jpg" },
        size: 153600,
        videoStats: {
            viewNum: 4200,
            likesNum: 210,
            commNum: 45,
            commObj: {
                publisher: "User Z",
                comment: "Informative video."
            }
        }
    },
    {
        id: 4,
        name: "Sample Video 4",
        publisher: "Publisher D",
        thumbnail: { type: "jpg", url: "thumbnail_url_4.jpg" },
        size: 122880,
        videoStats: {
            viewNum: 6200,
            likesNum: 280,
            commNum: 55,
            commObj: {
                publisher: "User W",
                comment: "Impressive!"
            }
        }
    },
    {
        id: 5,
        name: "Sample Video 5",
        publisher: "Publisher E",
        thumbnail: { type: "jpg", url: "thumbnail_url_5.jpg" },
        size: 204800,
        videoStats: {
            viewNum: 5500,
            likesNum: 275,
            commNum: 51,
            commObj: {
                publisher: "User V",
                comment: "Well done!"
            }
        }
    },
    {
        id: 6,
        name: "Sample Video 6",
        publisher: "Publisher F",
        thumbnail: { type: "jpg", url: "thumbnail_url_6.jpg" },
        size: 112640,
        videoStats: {
            viewNum: 4800,
            likesNum: 240,
            commNum: 49,
            commObj: {
                publisher: "User U",
                comment: "Fantastic!"
            }
        }
    },
    {
        id: 7,
        name: "Sample Video 7",
        publisher: "Publisher G",
        thumbnail: { type: "jpg", url: "thumbnail_url_7.jpg" },
        size: 163840,
        videoStats: {
            viewNum: 6900,
            likesNum: 310,
            commNum: 61,
            commObj: {
                publisher: "User T",
                comment: "Loved it!"
            }
        }
    },
    {
        id: 8,
        name: "Sample Video 8",
        publisher: "Publisher H",
        thumbnail: { type: "jpg", url: "thumbnail_url_8.jpg" },
        size: 143360,
        videoStats: {
            viewNum: 5800,
            likesNum: 290,
            commNum: 58,
            commObj: {
                publisher: "User S",
                comment: "Impressive work."
            }
        }
    },
    {
        id: 9,
        name: "Sample Video 9",
        publisher: "Publisher I",
        thumbnail: { type: "jpg", url: "thumbnail_url_9.jpg" },
        size: 184320,
        videoStats: {
            viewNum: 7100,
            likesNum: 315,
            commNum: 62,
            commObj: {
                publisher: "User R",
                comment: "Educational."
            }
        }
    },
    {
        id: 10,
        name: "Sample Video 10",
        publisher: "Publisher J",
        thumbnail: { type: "jpg", url: "thumbnail_url_10.jpg" },
        size: 133120,
        videoStats: {
            viewNum: 5400,
            likesNum: 270,
            commNum: 54,
            commObj: {
                publisher: "User Q",
                comment: "Very informative."
            }
        }
    },
]