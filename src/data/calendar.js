export const taskType = {
    colection: 'colection',
    transportation: 'transportation'
}

const getCalendarData = () => {
    const today = new Date()
    
    return Array(30).fill(1).map((_, index) => {
        const day = new Date()
        day.setDate(today.getDate() + index)
        const tasks = Array(Math.floor(Math.random() * 3)).fill(1).map((_, idx) => {
            return {
                type: (Math.random() > 0.5) ? taskType.colection : taskType.transportation,
                time: '9AM - 6PM',
                MCP: Math.ceil(Math.random() * 100),
                route: Math.ceil(Math.random() * 10),
            }
        })
        
        return {
            day,
            tasks,
        }
    })
}

export default getCalendarData()