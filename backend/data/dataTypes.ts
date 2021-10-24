export type User = {
    id: string,
    userName: string,
    fullName: string,
    avatar: string,
    mail: string,
    telephoneNumber: string,
}

export type Commentary = {
    id: string,
    content: string,
    createdAt: string,
    author: User //depend one
}

export type News = {
    id: string,
    private: boolean,
    title: string,
    content: string,
    createdAt: User, //depend one
    publicDate: string,
    image: string,
    views: number,
    likes: number,
    comments: Array<Commentary>, //depend many
    author?: string
}

export type Vacation = {
    id: number,
    user: User,//one to one
    region: 'common',
    restDaysAmount: number,
    planned: VacationDate[],//one to many
}

export type VacationDate = {
    id: number,
    start: string,
    end: string,
    duration: number
}

export type WorkDays = {
    id: number,
    user: User, //one to one
    days: WorkDay[],//one to many
}

export type WorkDay = {
    id: number,
    name: string,
    date: string,
    hours: number,
}