type User = {
    id: string,
    name: string,
    avatar: string
}

type Comment = {
    id: string,
    content: string,
    createdAt: string,
    author: User
}

type News = {
    id: string,
    title: string,
    content: string,
    createdAt: User,
    image?: string,
    views: number,
    likes: number,
    comments: Array<Comment>,
    author?: string
}


export const publicNewsData: News[] = [
    {
        id: '1',
        title: 'public post 1',
        content: 'text for public post 1',
        createdAt: 
            {
                id: '1',
                name: 'Maxim Mikheev',
                avatar: 'Надо будет придумать первоначальный аватар пустышку'
            },
        views: 0,
        likes: 0,
        comments: [],
        
    },
    {
        id: '2',
        title: 'public post 2',
        content: 'text for public post 2',
        createdAt: 
            {
                id: '1',
                name: 'Maxim Mikheev',
                avatar: 'Надо будет придумать первоначальный аватар пустышку'
            },
        views: 0,
        likes: 0,
        comments: [],   
    },
    {
        id: '3',
        title: 'public post 3',
        content: 'text for public post 3',
        createdAt: 
            {
                id: '1',
                name: 'Maxim Mikheev',
                avatar: 'Надо будет придумать первоначальный аватар пустышку'
            },
        views: 0,
        likes: 0,
        comments: [],  
    }
]

export const privateNewsData: News[] = [
    {
        id: '1',
        title: 'private post 1',
        content: 'text for private post 1',
        createdAt: 
            {
                id: '1',
                name: 'Maxim Mikheev',
                avatar: 'Надо будет придумать первоначальный аватар пустышку'
            },
        views: 0,
        likes: 0,
        comments: [],
        
    },
    {
        id: '2',
        title: 'private post 2',
        content: 'text for private post 2',
        createdAt: 
            {
                id: '1',
                name: 'Maxim Mikheev',
                avatar: 'Надо будет придумать первоначальный аватар пустышку'
            },
        views: 0,
        likes: 0,
        comments: [],   
    },
    {
        id: '3',
        title: 'private post 3',
        content: 'text for private post 3',
        createdAt: 
            {
                id: '1',
                name: 'Maxim Mikheev',
                avatar: 'Ссылка на аватар' //Надо будет добавить аватар пустышку
            },
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
    },{
        id: '3',
        name: 'Андрей',
        avatar: 'Ссылка на аватар' //Надо будет добавить аватар пустышку
    },{
        id: '4',
        name: 'Артем',
        avatar: 'Ссылка на аватар' //Надо будет добавить аватар пустышку
    },
]