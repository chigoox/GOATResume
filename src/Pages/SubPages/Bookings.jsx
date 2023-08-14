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
import ReactDropdown from 'react-dropdown'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'


const reservations = [
    addHours(startOfToday(), 5).toString(),
    addHours(startOfToday(), 6).toString(),
    addHours(startOfToday(), 7).toString(),
    addHours(startOfToday(), 8).toString(),
    addHours(startOfToday(), 9).toString(),
    addHours(startOfToday(), 10).toString(),
    addDays(new Date(addHours(startOfToday(), 4)), 3).toString()
]



const Bookings = ({ onPage }) => {
    const [bookingInfo, setBookingInfo] = useState({})
    // display div of availables times
    const [calendarTouched, setCalendarTouched] = useState(false)
    console.log(bookingInfo)
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
            const startHour = set(StartOfToday, { hours: 5 })
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
            thisMonthTimesLength.push(freeTimes.length)
            thisMonthTimesEachDay.push(freeTimes)
        })

        setAvailableTimesInThisMonth(thisMonthTimesLength)
        setAvailableTimesInThisMonthForEachDay(thisMonthTimesEachDay)
    }, [currentMonth])
    const bookingOptions = [
        'Build a website for $250',
        'Build an App for $500',
        'Build a Game for $150',


    ]
    const bookNow = () => {
        const STRIPE_CART = { quantity: 1, price: 'price_1Nenu0BiXRHCNCMjv2LpBOct' }

        fetch('/.netlify/functions/CheckOut', {
            method: 'POST',
            redirect: 'follow',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cart: STRIPE_CART
            })
        }).then(res => {
            res.json().then(res => {

                window.location.href = res.url

            })
        })
    }
    return (
        <div className='z-0 relative'>




            {onPage == 'Bookings' &&
                <div className='center flex-col mb-40'>
                    <h1 className='text-5xl text-center mb-6'>Bookings</h1>
                    <h1>What can I do for you?</h1>
                    <ReactDropdown
                        className='w-96 bg-blue-800 h-12 text-white cursor-pointer '
                        controlClassName='bg-red-500 p-2 h-12 w-full'
                        arrowClassName=''
                        menuClassName=' h-fit w-full center flex-col gap-4 overflow-hidden bg-black-800'
                        arrowClosed={<AiOutlineArrowDown size={24} />}
                        arrowOpen={<AiOutlineArrowUp size={24} />}
                        options={bookingOptions} onChange={(e) => { setBookingInfo(old => ({ ...old, book: e.value })) }}
                        value={''}
                        placeholder="Select an option"
                        placeholderClassName='text-black text-3xl text-center' />


                </div>}
            {bookingInfo.book &&
                <div>
                    <h1 className='text-center'>When would you like to meet?</h1>
                    <h1 className='text-center text-sm mb-20'>(To talk about website details)</h1>
                </div>}
            {
                <div className={`${bookingInfo.book ? 'opacity-100' : 'opacity-0'} trans flex flex-col  md:flex-row   md:items-start  lg:justify-center    bg-black mb-10 md:mb-24`}>


                    {/* calendar implementation */}
                    <div className="flex flex-col gap-2 h-[450px] w-[380px] md:h-fit md:w-fit mb-32  m-auto my-0">
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
                                    color='red'
                                    className={cn(
                                        isThisMonth(new Date(currentMonth)) && "text-red-400"
                                    )}
                                />
                            </button>
                            <h2 className="font-semibold text-rose-500 justify-center flex text-center">
                                {format(firstDayCurrentMonth, " MMMM yyyy")}
                            </h2>
                            <button
                                type="button"
                                className="flex justify-end"
                                onClick={nextMonth}
                            >
                                <ChevronRight size={20} aria-hidden="true" color='red' />
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
                                                "flex justify-center items-center text-sm text-red-300 w-full py-2",
                                                {
                                                    "text-red-600 ":
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
                                                    "bg-rose-600 text-red-900 text-lg",
                                                    isEqual(today, day) && "text-blue-900 bg-red-700",
                                                    isBefore(day, today) &&
                                                    "text-red-800 bg-gray-700 cursor-not-allowed",
                                                    isEqual(today, day) && "text-white bg-rose-500",
                                                    isBefore(day, today) && "cursor-not-allowed",
                                                    isEqual(day, selectedDay) &&
                                                    isToday(day) &&
                                                    "bg-red-700",
                                                    !isEqual(day, selectedDay) &&
                                                    !isToday(day) &&
                                                    !isSameMonth(day, firstDayCurrentMonth) &&
                                                    "text-red-300",
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
                                                        "absolute block top-0 right-0 h-[18px] w-[18px] translate-x-1 -translate-y-1 text-red-600",
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
                                <h1 className="text-center text-red-400 font-semibold pl-1">
                                    {format(selectedDay, "dd MMMM yyyy").toString()}
                                </h1>
                            </span>
                        </span>

                        <AvailableHours freeTimes={freeTimes} setBookingInfo={setBookingInfo} />
                    </div>
                </div>

            }
            {bookingInfo.apointment && <div className=' mb-96  center flex-col text-white p-2'>
                <h1 className='text-2xl text-center'>{`You want to ${bookingInfo.book}, and meet on ${bookingInfo.apointment}`}</h1>
                <h1 className='text-center text-red-500'>pay $50 depoit to comfirm booking</h1>
                <button onClick={bookNow} className='h-12 w-32 bg-red-500'>Book Now</button>
            </div>}

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
