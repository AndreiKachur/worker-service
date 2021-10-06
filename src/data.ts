export type User = {
    id: string,
    name: string,
    avatar: string
}

export type Comment = {
    id: string,
    content: string,
    createdAt: string,
    author: User
}

export type News = {
    id: string,
    private: boolean,
    title: string,
    content: string,
    createdAt?: User,
    publicDate?: string,
    image?: string,
    views?: number,
    likes?: number,
    comments?: Array<Comment>,
    author?: string
}


export const publicNewsData: News[] = [
    {
        id: '1',
        private: false,
        title: 'public post 1',
        content: 'text for public post 1',
        image: 'https://im0-tub-ru.yandex.net/i?id=bcc212cd10eac561992d564179589337&n=13',
        createdAt:
        {
            id: '1',
            name: 'Maxim Mikheev',
            avatar: 'Надо будет придумать первоначальный аватар пустышку'
        },
        publicDate: '06/10/2021',
        views: 0,
        likes: 0,
        comments: [],

    },
    {
        id: '2',
        private: false,
        title: 'public post 2',
        content: 'text for public post 2',
        image: 'https://im0-tub-ru.yandex.net/i?id=0b370045de8a09479e81da4869d1618c&n=13',
        createdAt:
        {
            id: '1',
            name: 'Maxim Mikheev',
            avatar: 'Надо будет придумать первоначальный аватар пустышку'
        },
        publicDate: '06/10/2021',
        views: 0,
        likes: 0,
        comments: [],
    },
    {
        id: '3',
        private: false,
        title: 'public post 3',
        content: 'text for public post 3',
        image: 'https://vzlet.org/sites/vzlet.org/files/2019-08/Richard-Vanderhurst-Solid-Tips-On-Lead-Generation-That-Anyone-Can-Easily-Understand.jpg',
        createdAt:
        {
            id: '1',
            name: 'Maxim Mikheev',
            avatar: 'Надо будет придумать первоначальный аватар пустышку'
        },
        publicDate: '06/10/2021',
        views: 0,
        likes: 0,
        comments: [],
    },
    {
        id: '4',
        private: false,
        title: 'public post 4',
        content: 'text for public post 4',
        image: 'https://img3.goodfon.ru/original/3000x2250/0/eb/hi-tech-tehnologii-internet.jpg',
        createdAt:
        {
            id: '1',
            name: 'Maxim Mikheev',
            avatar: 'Надо будет придумать первоначальный аватар пустышку'
        },
        publicDate: '06/10/2021',
        views: 0,
        likes: 0,
        comments: [],
    }
]

export const privateNewsData: News[] = [
    {
        id: '1',
        private: true,
        title: 'private post 1',
        content: 'text for private post 1',
        image: 'https://im0-tub-ru.yandex.net/i?id=0b370045de8a09479e81da4869d1618c&n=13',
        createdAt:
        {
            id: '1',
            name: 'Maxim Mikheev',
            avatar: 'Надо будет придумать первоначальный аватар пустышку'
        },
        publicDate: '06/10/2021',
        views: 0,
        likes: 0,
        comments: [],

    },
    {
        id: '2',
        private: true,
        title: 'private post 2',
        content: 'text for private post 2',
        image: 'https://im0-tub-ru.yandex.net/i?id=0b370045de8a09479e81da4869d1618c&n=13',
        createdAt:
        {
            id: '1',
            name: 'Maxim Mikheev',
            avatar: 'Надо будет придумать первоначальный аватар пустышку'
        },
        publicDate: '06/10/2021',
        views: 0,
        likes: 0,
        comments: [],
    },
    {
        id: '3',
        private: true,
        title: 'private post 3',
        content: 'text for private post 3',
        image: 'https://im0-tub-ru.yandex.net/i?id=0b370045de8a09479e81da4869d1618c&n=13',
        createdAt:
        {
            id: '1',
            name: 'Maxim Mikheev',
            avatar: 'Ссылка на аватар' //Надо будет добавить аватар пустышку
        },
        publicDate: '06/10/2021',
        views: 0,
        likes: 0,
        comments: [],
    }
]

export const usersData: User[] = [
    {
        id: '1',
        name: 'Максим',
        avatar: 'Ссылка на аватар' //Надо будет добавить аватар пустышку
    },
    {
        id: '2',
        name: 'Вячеслав',
        avatar: 'Ссылка на аватар' //Надо будет добавить аватар пустышку
    }, {
        id: '3',
        name: 'Андрей',
        avatar: 'Ссылка на аватар' //Надо будет добавить аватар пустышку
    }, {
        id: '4',
        name: 'Артем',
        avatar: 'Ссылка на аватар' //Надо будет добавить аватар пустышку
    },
]