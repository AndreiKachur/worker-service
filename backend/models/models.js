const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {

    id: { type: DataTypes.STRING, primaryKey: true },
    mail: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },

    userName: { type: DataTypes.STRING },
    fullName: { type: DataTypes.STRING },
    avatar: { type: DataTypes.STRING },
    telephoneNumber: { type: DataTypes.STRING, unique: true },
})

const Commentary = sequelize.define('commentary', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    content: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.STRING },
})

const News = sequelize.define('news', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    private: { type: DataTypes.BOOLEAN, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
})

const View = sequelize.define('view', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Like = sequelize.define('like', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Vacation = sequelize.define('vacation', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    region: { type: DataTypes.STRING },
    restDaysAmount: { type: DataTypes.INTEGER },
})

const VacationDate = sequelize.define('vacationdate', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    start: { type: DataTypes.STRING, allowNull: false },
    end: { type: DataTypes.STRING, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false },
})

const Holidays = sequelize.define('holiday', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Holiday = sequelize.define('holiday', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.STRING, allowNull: false },
})

const WorkDays = sequelize.define('workdays', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const WorkDay = sequelize.define('workday', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    date: { type: DataTypes.STRING },
    hours: { type: DataTypes.INTEGER },
})

User.hasMany(News)
News.belongsTo(User)

User.hasMany(Commentary)
Commentary.belongsTo(User)

User.hasMany(View)
View.belongsTo(User)

User.hasMany(Like)
Like.belongsTo(User)

News.hasMany(Commentary)
Commentary.belongsTo(News)

News.hasMany(View)
View.belongsTo(News)

News.hasMany(Like)
Like.belongsTo(News)

User.hasOne(Vacation)
Vacation.belongsTo(User)

Vacation.hasMany(VacationDate)
VacationDate.belongsTo(Vacation)

Vacation.belongsToMany(Holiday, { through: Holidays })
Holiday.belongsToMany(Vacation, { through: Holidays })

WorkDays.hasMany(WorkDay)
WorkDay.belongsTo(WorkDays)

User.hasOne(WorkDays)
WorkDays.belongsTo(User)

module.exports = {
    User,
    Commentary,
    News,
    View,
    Like,
    Vacation,
    VacationDate,
    Holiday,
    WorkDay
}
