import { Button, Calendar as AntdCalendar, Divider, List, Space, Typography } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import { useState } from 'react'
import data from '../../../data/calendar'
import './style.css'
import { Card } from 'antd-mobile'

dayjs.locale('en')

function Calendar() {
    const calendarTasks = data
    const [day, setDay] = useState(dayjs())
    const tasks = calendarTasks.find(item => item.day.getDate() === day.date())?.tasks

    console.log(tasks);

    const onChange = (date) => {
        setDay(date)
    }

    return (
        <div className='calendar-theme' style={{ height: 'fit-content', minHeight: '100%' }}>
            <div>
                <Space align='center' direction='vertical' style={{ width: '100%' }}>
                    <Typography.Title level={1} style={{ margin: '16px 0 32px', color: 'white' }}>Calendar</Typography.Title>
                </Space>

                <AntdCalendar
                    mode='month'
                    value={day}
                    onChange={onChange}
                    fullscreen={false}

                    headerRender={({ value, type, onChange, onTypeChange }) => {
                        const localeData = value.localeData();
                        const currentMonth = value.month()
                        return (
                            <div>
                                <Space
                                    direction='horizontal'
                                    align='center'
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Button
                                        type='text'
                                        disabled={currentMonth === 0}
                                        onClick={() => onChange(value.clone().month(currentMonth - 1))}
                                    ><LeftOutlined /></Button>
                                    <Typography.Title level={3} style={{ margin: '0' }}>{localeData.monthsShort(value)}</Typography.Title>
                                    <Button
                                        type='text'
                                        disabled={currentMonth === 11}
                                        onClick={() => onChange(value.clone().month(currentMonth + 1))}
                                    ><RightOutlined /></Button>
                                </Space>

                            </div>
                        )
                    }}

                    dateCellRender={(date) => {
                        const day = calendarTasks.find(item => item.day.getDate() === date.date())

                        if(day?.tasks.length > 0) {
                            return (
                                <div style={{ position: 'relative' }}>
                                    <Space direction='horizontal' size='small' style={{ position: 'absolute', top: '0', left: '0' }}>
                                        {
                                            day.tasks.map((task, index) => (
                                                <div
                                                    key={`day-task-item-${day.day.getDate()}+${index}`}
                                                    className={`day-task-item ${task.type}`}
                                                />
                                            ))
                                        }
                                    </Space>
                                </div>
                            )
                        }
                    }}
                />
            </div>

            <Space direction='vertical' size='large' style={{ margin: '32px 0 16px', padding: '0 32px', width: '100%' }}>
                {
                    tasks
                        ? tasks.map((task, index) => (
                            <div
                                className='task-container'
                                key={`task-item-${day.date()}-${index}`}
                            >
                                <div className='task-item-container'>
                                    <div className={`task-item ${task.type}`}>
                                        <Typography.Text strong>{task.type}</Typography.Text>
                                    </div>
                                </div>
                                <div className='task-item-key'>
                                    <div className='task-item-left'>
                                        {
                                            Object.keys(task).map(key => (
                                                <Typography.Text strong key={`task-item-${day.date()}-${key}`}>
                                                    {key}
                                                </Typography.Text>
                                            ))
                                        }
                                    </div>
                                    <div className='task-item-right'>
                                        {
                                            Object.keys(task).map(key => (
                                                <Typography.Text strong key={`task-item-${day.date()}-${task[key]}`}>
                                                    {task[key]}
                                                </Typography.Text>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                        : (
                            <Card
                                style={{
                                    width: '100%',
                                    textAlign: 'center'
                                }}
                            ><Typography.Text strong>You don't have any tasks today!</Typography.Text></Card>
                        )
                }


            </Space>
        </div>
    )
}

export default Calendar