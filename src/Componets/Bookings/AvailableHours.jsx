import { format, isSameMinute } from "date-fns"
import { CheckCircle2 } from "lucide-react"
import React, { memo, useState } from "react"
import { cn } from "../../../lib/utils"

// eslint-disable-next-line react/display-name
const AvailableHours = memo(({ freeTimes }) => {
    const [selectedTime, setSelectedTime] = useState()

    return (
        <div className="flex border flex-col items-center gap-2 mt-4 p-4">
            <span>
                Available times:{" "}
                <span className="font-semibold text-orange-950">
                    {freeTimes.length}
                </span>
            </span>
            <div className="grid lg:grid-cols-3 grid-cols-5 md:grid-cols-2   text-md gap-4 md:h-[35rem] hidescroll overflow-hidden overflow-y-scroll">
                {freeTimes.map((hour, hourIdx) => (
                    <div key={hourIdx}>
                        <button
                            type="button"
                            className={cn(
                                "bg-gray-800 trans-slow rounded-lg px-2 text-lime-300 relative hover:border hover:border-gray-900 w-[64px] h-[64px]",
                                selectedTime &&
                                isSameMinute(selectedTime, hour) &&
                                "bg-lime-300 text-gray-800"
                            )}
                            onClick={() => setSelectedTime(hour)}
                        >
                            <CheckCircle2
                                color="lime"
                                className={cn(
                                    "w-[16px] h-[16px] absolute hidden top-0 right-0 transform translate-x-1 -translate-y-1.5 text-lime-700",
                                    selectedTime && isSameMinute(selectedTime, hour) && "block"
                                )}
                            />
                            {format(hour, "HH:mm")}
                        </button>
                    </div>
                ))}
            </div>
            {selectedTime && (
                <div className="w-full py-6">
                    <span>Final selected reservation time is: </span>
                    <span className="font-semibold text-rose-950 pl-1">
                        {format(selectedTime, "dd MMMM yyyy HH:mm")}
                    </span>
                </div>
            )}
        </div>
    )
})

export default AvailableHours
