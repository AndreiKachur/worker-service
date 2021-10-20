export type User = {
    id: string,
    name: string,
    avatar: string
}

export type Commentary = {
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
    createdAt: User,
    publicDate: string,
    image: string,
    views: number,
    likes: number,
    comments: Array<Commentary>,
    author?: string
}

export type Vacation = {
    id: string,
    user: User,
    thisYear: VacationTime,
    nextYear?: VacationTime
}

export type VacationTime = {
    daysAmount: number,
    restDaysAmount: number,
    planned: VacationDate[],
    inquire?: VacationDate[]
}

export type VacationDate = {
    start: string,
    end: string,
    duration: number
}

export type WorkDaysData = {
    id: number,
    user: User,
    days: any,
}