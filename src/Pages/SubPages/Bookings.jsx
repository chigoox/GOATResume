import React from 'react'
import { useMemo, useState } from "react"
import { cn, dayNames } from "../../../lib/utils"
import {
    add,
    addDays,
    addHours,
    eachDayOfInterval,
    eachMinuteOfInterval,
    endOfDay,
    endOfMonth,
    endOfWeek,
    format,
    getDay,
    isAfter,
    isBefore,
    isEqual,
    isSameMonth,
    isThisMonth,
    isToday,
    parse,
    parseISO,
    set,
    startOfDay,
    startOfToday,
    startOfWeek,
    startOfYesterday
} from "date-fns"
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import AvailableHours from "../../Componets/Bookings/AvailableHours"
import TimesBar from '../../Componets/Bookings/TimesBar'


const reservations = [
    addHours(startOfToday(), 5).toString(),
    addHours(startOfToday(), 6).toString(),
    addHours(startOfToday(), 7).toString(),
    addHours(startOfToday(), 8).toString(),
    addHours(startOfToday(), 9).toString(),
    addDays(new Date(addHours(startOfToday(), 4)), 3).toString()
]



const Bookings = ({ onPage }) => {

    // display div of availables times
    const [calendarTouched, setCalendarTouched] = useState(false)

    // handle dates
    let today = startOfToday()
    let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"))
    let [selectedDay, setSelectedDay] = useState(today)
    let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date())
    let days = useMemo(
        () =>
            eachDayOfInterval({
                start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
                end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 })
            }),
        [firstDayCurrentMonth]
    )

    // all days avaiilable times in this month until you change it
    const [availableTimesInThisMonth, setAvailableTimesInThisMonth] = useState([])
    const [
        availableTimesInThisMonthForEachDay,
        setAvailableTimesInThisMonthForEachDay
    ] = useState([])

    // next and prev month functions
    function prevMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
    }
    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"))
    }

    // get available times for the selected day
    const freeTimes = useMemo(() => {
        const StartOfToday = startOfDay(selectedDay)
        const endOfToday = endOfDay(selectedDay)
        // change your working hours here
        const startHour = set(StartOfToday, { hours: 1 })
        const endHour = set(endOfToday, { hours: 17, minutes: 45 })
        let hoursInDay = eachMinuteOfInterval(
            {
                start: startHour,
                end: endHour
            },
            { step: 30 }
        )

        // filter the available hours
        let freeTimes = hoursInDay.filter(
            hour => !reservations.includes(parseISO(hour.toISOString()).toString())
        )

        return freeTimes
    }, [selectedDay])

    // calculate the number of available times for each day in this month
    useMemo(() => {
        let thisMonthTimesLength = []
        let thisMonthTimesEachDay = []
        days.map((day, dayIdx) => {
            // get times

            const StartOfToday = startOfDay(day)
            const endOfToday = endOfDay(day)
            // change your working hours here
            const startHour = set(StartOfToday, { hours: 1 })
            const endHour = set(endOfToday, { hours: 17, minutes: 45 })
            let hoursInDay = eachMinuteOfInterval(
                {
                    start: startHour,
                    end: endHour
                },
                { step: 15 }
            )
            // filter the available hours
            let freeTimes = hoursInDay.filter(
                hour => !reservations.includes(parseISO(hour.toISOString()).toString())
            )
            thisMonthTimesLength.push(freeTimes.length)
            thisMonthTimesEachDay.push(freeTimes)
        })

        setAvailableTimesInThisMonth(thisMonthTimesLength)
        setAvailableTimesInThisMonthForEachDay(thisMonthTimesEachDay)
    }, [currentMonth])
    return (
        <div className='z-0 relative'>
            {onPage == 'Bookings' && <h1 className='text-5xl text-center mb-6'>Bookings</h1>}
            {onPage == 'Bookings' &&
                <div className="flex flex-col md:flex-row min-h-screen  md:items-start  lg:justify-center   bg-black mb-10 md:mb-24">


                    {/* calendar implementation */}
                    <div className="flex  flex-col gap-2 h-[450px] w-[380px] md:h-fit md:w-fit  m-auto my-0">
                        {/* calendar header */}
                        <div className="grid grid-cols-3 md:w-[40rem] px-8">
                            <button
                                type="button"
                                onClick={prevMonth}
                                disabled={isThisMonth(new Date(currentMonth))}
                            >
                                <ChevronLeft
                                    size={20}
                                    aria-hidden="true"
                                    color='lime'
                                    className={cn(
                                        isThisMonth(new Date(currentMonth)) && "text-lime-400"
                                    )}
                                />
                            </button>
                            <h2 className="font-semibold text-lime-300 justify-center flex text-center">
                                {format(firstDayCurrentMonth, " MMMM yyyy")}
                            </h2>
                            <button
                                type="button"
                                className="flex justify-end"
                                onClick={nextMonth}
                            >
                                <ChevronRight size={20} aria-hidden="true" color='lime' />
                            </button>
                        </div>

                        {/* calendar body */}
                        <div className='p-2'>
                            <div className="grid grid-cols-7 mt-4 md:w-[40rem]">
                                {dayNames.map((day, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className={cn(
                                                "flex justify-center items-center text-sm text-lime-300 w-full py-2",
                                                {
                                                    "text-lime-600 ":
                                                        day === "Sun" || day === "Sat"
                                                }
                                            )}
                                        >
                                            {day}
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="grid grid-cols-7 text-sm gap-2 md:w-[40rem]">
                                {days.map((day, dayIdx) => {
                                    return (
                                        <div
                                            key={day.toString()}
                                            className={cn(
                                                dayIdx === 0 && colStartClasses[getDay(day) - 1],
                                                " justify-center flex items-center",
                                                (getDay(day) === 0 || getDay(day) === 6) &&
                                                "style for sat and sun bg"
                                            )}
                                        >
                                            <button
                                                onClick={() => {
                                                    setCalendarTouched(true)
                                                    setSelectedDay(day)
                                                }}
                                                className={cn(
                                                    "w-12 h-12 md:h-24 md:w-24 flex flex-col p-2 justify-center items-center rounded-xl gap-0 group bg-gray-900 relative group",
                                                    isEqual(day, selectedDay) &&
                                                    "bg-lime-200 text-lime-700 text-lg",
                                                    isEqual(today, day) && "text-blue-900 bg-green-400",
                                                    isBefore(day, today) &&
                                                    "text-red-800 bg-gray-700 cursor-not-allowed",
                                                    isEqual(today, day) && "text-blue-900 bg-lime-100",
                                                    isBefore(day, today) && "cursor-not-allowed",
                                                    isEqual(day, selectedDay) &&
                                                    isToday(day) &&
                                                    "bg-lime-300",
                                                    !isEqual(day, selectedDay) &&
                                                    !isToday(day) &&
                                                    !isSameMonth(day, firstDayCurrentMonth) &&
                                                    "text-lime-300",
                                                    !isEqual(day, selectedDay) &&
                                                    !isToday(day) &&
                                                    isSameMonth(day, firstDayCurrentMonth) &&
                                                    "text-white"
                                                )}
                                                disabled={isBefore(day, today)}
                                            >
                                                {isAfter(day, startOfYesterday()) && (
                                                    <span className="hidden group-hover:flex absolute top-0 -translate-x-.5 -translate-y-4 z-10 text-[11px] bg-slate-900 text-slate-100 px-1 rounded-md gap-1">
                                                        <span>{availableTimesInThisMonth[dayIdx]}</span>
                                                        <span>Available</span>
                                                    </span>
                                                )}

                                                <time
                                                    dateTime={format(day, "yyyy-MM-dd")}
                                                    className={cn(
                                                        "group-hover:text-lg trans ",
                                                        (isEqual(day, selectedDay) || isToday(day)) &&
                                                        "font-semibold"
                                                    )}
                                                >
                                                    {format(day, "d")}
                                                </time>

                                                <CheckCircle2
                                                    className={cn(
                                                        "hidden",
                                                        isEqual(day, selectedDay) &&
                                                        "absolute block top-0 right-0 h-[18px] w-[18px] translate-x-1 -translate-y-1 text-lime-600",
                                                        isEqual(day, today) && "text-orange-400"
                                                    )}
                                                />

                                                {isAfter(day, startOfYesterday()) && (
                                                    <TimesBar
                                                        times={availableTimesInThisMonthForEachDay[dayIdx]}
                                                    />
                                                )}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className={cn(`hidden mx-auto`, calendarTouched && "block")}>
                        <span className="flex items-center w-full justify-center gap-1">
                            <span>
                                <h1 className='text-center'>Select reservation time</h1>
                                <h1 className="text-center text-lime-400 font-semibold pl-1">
                                    {format(selectedDay, "dd MMMM yyyy").toString()}
                                </h1>
                            </span>
                        </span>

                        <AvailableHours freeTimes={freeTimes} />
                    </div>
                </div>

            }

        </div>
    )
}

export default Bookings




"use client"







let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7"
]
