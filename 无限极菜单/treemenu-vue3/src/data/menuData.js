export default [
    {
        id: 1,
        title: '菜单1',
    },
    {
        id: 2,
        title: '菜单2',
    },
    {
        id: 3,
        title: '菜单3',
        children: [
            { id: 31, title: '菜单3-1' },
            {
                id: 32,
                title: '菜单3-2',
                children: [
                    { id: 321, title: '菜单3-2-1' },
                    { id: 322, title: '菜单3-2-2' },
                    {
                        id: 323,
                        title: '菜单3-2-3',
                        children: [
                            { id: 3231, title: '菜单3-2-3-1' },
                            { id: 3232, title: '菜单3-2-3-2' },
                            { id: 3233, title: '菜单3-2-3-3' },
                            {
                                id: 3234,
                                title: '菜单3-2-3-4',
                                children: [
                                    { id: 32341, title: '菜单3-2-3-4-1' },
                                    { id: 32342, title: '菜单3-2-3-4-2' },
                                    { id: 32343, title: '菜单3-2-3-4-3' },
                                    { id: 32344, title: '菜单3-2-3-4-4' },
                                ],
                            },
                        ],
                    },
                    { id: 324, title: '菜单3-2-4' },
                ],
            },
            { id: 33, title: '菜单3-3' },
            { id: 34, title: '菜单3-4' },
        ],
    },
    {
        id: 4,
        title: '菜单4',
    },
    {
        id: 5,
        title: '菜单5',
        children: [
            { id: 51, title: '菜单5-1' },
            {
                id: 52,
                title: '菜单5-2',
                children: [
                    { id: 521, title: '菜单5-2-1' },
                    { id: 522, title: '菜单5-2-2' },
                    {
                        id: 523,
                        title: '菜单5-2-3',
                        children: [
                            { id: 5231, title: '菜单5-2-3-1' },
                            { id: 5232, title: '菜单5-2-3-2' },
                            { id: 5233, title: '菜单5-2-3-3' },
                            {
                                id: 5234,
                                title: '菜单5-2-3-4',
                                children: [
                                    { id: 52341, title: '菜单5-2-3-4-1' },
                                    { id: 52342, title: '菜单5-2-3-4-2' },
                                    { id: 52343, title: '菜单5-2-3-4-3' },
                                    { id: 52344, title: '菜单5-2-3-4-4' },
                                ],
                            },
                        ],
                    },
                    { id: 524, title: '菜单5-2-4' },
                ],
            },
            { id: 53, title: '菜单5-3' },
            { id: 54, title: '菜单5-4' },
        ],
    },
]
