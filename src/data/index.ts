export default [
    {
        backgroundColor: '#EB4C42',
        id: 1,
        title: 'Audio',
        accept: 'AUDIO',
        children: [
            {
                id: 1,
                parentId: 1,
                title: 'Audio item 1',
            },
            {
                id: 2,
                parentId: 1,
                title: 'Audio item 2',
            },
        ],
    },
    {
        backgroundColor: '#EB4C42',
        id: 5,
        title: 'Audio',
        accept: 'AUDIO',
        children: [
            {
                id: 3,
                parentId: 5,
                title: 'Audio item 3',
            },
            {
                id: 4,
                parentId: 5,
                title: 'Audio item 4',
            },
        ],
    },
    {
        backgroundColor: '#EB4C42',
        id: 7,
        title: 'Audio',
        accept: 'AUDIO',
        children: [
            {
                id: 5,
                parentId: 7,
                title: 'Audio item 5',
            },
            {
                id: 6,
                parentId: 7,
                title: 'Audio item 6',
            },
        ],
    },
    {
        backgroundColor: '#318CE7',
        id: 2,
        title: 'Gallery',
        accept: 'GALLERY',
        children: [
            {
                id: 1,
                parentId: 2,
                title: 'Gallery item 1',
            },
            {
                id: 2,
                parentId: 2,
                title: 'Gallery item 2',
            },
        ],
    },
    {
        backgroundColor: '#50C878',
        id: 3,
        title: 'Video',
        accept: 'VIDEO',
        children: [
            {
                id: 1,
                parentId: 3,
                title: 'Video item 1',
            },
            {
                id: 2,
                parentId: 3,
                title: 'Video item 2',
            },
            {
                id: 3,
                parentId: 3,
                title: 'Video item 3',
            },
        ],
    },
    {
        backgroundColor: '#50C878',
        id: 6,
        title: 'Video',
        accept: 'VIDEO',
        children: [
            {
                id: 4,
                parentId: 6,
                title: 'Video item 4',
            },
            {
                id: 5,
                parentId: 6,
                title: 'Video item 5',
            },
        ],
    },
    {
        backgroundColor: '#F4CA16',
        id: 4,
        title: 'Top 5',
        accept: 'TOP_5',
        children: [
            {
                id: 1,
                parentId: 4,
                title: 'Top 5 item 1',
            },
            {
                id: 2,
                parentId: 4,
                title: 'Top 5 item 2',
            },
        ],
    },
];
