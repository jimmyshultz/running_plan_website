const week = document.getElementById("week");
const plan = document.getElementById("current-miles-per-week")
const pace = document.getElementById("pace")

//Pacing Display
const pacingDisplay = {
    easy: document.getElementById("easy-pace"),
    marathon: document.getElementById("marathon-pace"),
    tempo: document.getElementById("tempo-pace"),
    interval: document.getElementById("interval-pace"),
    repetition: document.getElementById("repetition-pace")
}

//Daily Displays
const mondayDisplay = {
    miles: document.getElementById("monday-miles"),
    workout: document.getElementById("monday-workout-type"),
    instructions: document.getElementById("monday-instructions")
}
const tuesdayDisplay = {
    miles: document.getElementById("tuesday-miles"),
    workout: document.getElementById("tuesday-workout-type"),
    instructions: document.getElementById("tuesday-instructions")
}
const wednesdayDisplay = {
    miles: document.getElementById("wednesday-miles"),
    workout: document.getElementById("wednesday-workout-type"),
    instructions: document.getElementById("wednesday-instructions")
}
const thursdayDisplay = {
    miles: document.getElementById(`thursday-miles`),
    workout: document.getElementById("thursday-workout-type"),
    instructions: document.getElementById("thursday-instructions")
}
const fridayDisplay = {
    miles: document.getElementById("friday-miles"),
    workout: document.getElementById("friday-workout-type"),
    instructions: document.getElementById("friday-instructions")
}
const saturdayDisplay = {
    miles: document.getElementById("saturday-miles"),
    workout: document.getElementById("saturday-workout-type"),
    instructions: document.getElementById("saturday-instructions")
}
const sundayDisplay = {
    miles: document.getElementById("sunday-miles"),
    workout: document.getElementById("sunday-workout-type"),
    instructions: document.getElementById("sunday-instructions")
}

//Weekly Total Display
const weeklyMileageDisplay = document.getElementById("weekly-miles")

//Paces
const paces = [
    {
        //Sub-5
        easy: "6:57-7:40",
        marathon: "6:05",
        tempo: "5:45-5:55",
        interval: "5:20",
        repetition: "4:55"
    },
    {
        //5-5:59
        easy: "7:49-8:37",
        marathon: "6:53",
        tempo: "6:30-6:40",
        interval: "6:00",
        repetition: "5:35"
    },
    {
        //6-6:59
        easy: "9:05-9:59",
        marathon: "8:05",
        tempo: "7:35-7:50",
        interval: "6:57",
        repetition: "6:33"
    },
    {
        //7-7:59
        easy: "10:12-11:13",
        marathon: "9:12",
        tempo: "8:30-8:40",
        interval: "7:51",
        repetition: "7:27"
    },
    {
        //8-8:59
        easy: "10:57-12:01",
        marathon: "10:18",
        tempo: "9:20-9:30",
        interval: "8:27",
        repetition: "8:02"
    },
    {
        //9-9:59
        easy: "11:37-12:44",
        marathon: "11:23",
        tempo: "10:10-10:20",
        interval: "8:59",
        repetition: "8:35"
    },
    {
        //10-10:59
        easy: "12:14-13:23",
        marathon: "12:26",
        tempo: "10:55-11:05",
        interval: "9:29",
        repetition: "9:05"
    },
    {
        //11-11:59
        easy: "12:47-13:59",
        marathon: "13:29",
        tempo: "11:35-11:45",
        interval: "9:55",
        repetition: "9:32"
    },
    {
        //12-12:59
        easy: "13:18-14:31",
        marathon: "14:30",
        tempo: "12:15-12:25",
        interval: "10:21",
        repetition: "9:57"
    },
    {
        //13-13:59
        easy: "13:46-15:01",
        marathon: "15:31",
        tempo: "12:55-13:05",
        interval: "10:44",
        repetition: "10:20"
    },
    {
        //14-14:59
        easy: "14:13-15:29",
        marathon: "16:30",
        tempo: "13:30-13:40",
        interval: "11:05",
        repetition: "10:42"
    },
    {
        //15+
        easy: "14:37-15:55",
        marathon: "17:29",
        tempo: "14:05-14:15",
        interval: "11:25",
        repetition: "11:02"
    }
]

//Plans
const plans = [
    [
        //10-19 miles plan
        [
            //week 1
            {
                day: "Monday",
                mileage: 2,
                workout: "easy run",
                instruction: "run 2 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 2,
                workout: "easy run",
                instruction: "run 2 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 3,
                workout: "interval workout",
                instruction: "warmup for 1 miles, alternate .1 miles @ interval pace & .1 miles slow jogging for 1 mile total, cooldown for 1 mile"
            },
            {
                day: "Thursday",
                mileage: 2,
                workout: "easy run",
                instruction: "run 2 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 4,
                workout: "long run",
                instruction: "run 4 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 2
            {
                day: "Monday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 2,
                workout: "easy run",
                instruction: "run 2 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 5,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run tempo pace for 2 miles, cooldown for 1 mile"
            },
            {
                day: "Thursday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 5.5,
                workout: "long run",
                instruction: "run 5.5 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 3
            {
                day: "Monday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 6,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 2 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 7,
                workout: "long run",
                instruction: "run 2 miles at easy pace, run 3 miles at tempo pace, run 2 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 4
            {
                day: "Monday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 6,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 2 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 8,
                workout: "long run",
                instruction: "run 8 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 5
            {
                day: "Monday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 7,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 3 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 9,
                workout: "long run",
                instruction: "run 9 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 6
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 7,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 3 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 10,
                workout: "long run",
                instruction: "run 10 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 7
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 7,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 3 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 11,
                workout: "long run",
                instruction: "run 11 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 8
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 7,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 3 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 12 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 9
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 7,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 3 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 13.1,
                workout: "long run",
                instruction: "run 13.1 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 10
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 7,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 3 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 11,
                workout: "long run",
                instruction: "run 7 miles at easy pace, 2 miles at tempo pace, 2 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 11
            {
                day: "Monday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 6,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 2 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 8,
                workout: "long run",
                instruction: "run 8 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 12
            {
                day: "Monday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 2,
                workout: "easy run",
                instruction: "run 2 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 5,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 2 miles at tempo pace, cooldown for 1 mile"
            },
            {
                day: "Thursday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running to have fresh legs for the race"
            },
            {
                day: "Friday",
                mileage: 1,
                workout: "easy run",
                instruction: "run 1 mile at easy pace or slower to make sure your legs aren't stiff tomorrow"
            },
            {
                day: "Saturday",
                mileage: 13.1,
                workout: "raceday",
                instruction: "run your half marathon race!"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
    ],
    [
        //20-29 miles plan
        [
            //week 1
            {
                day: "Monday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 5,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .1 miles @ interval pace & .1 miles slow jogging for 1 mile total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 6,
                workout: "long run",
                instruction: "run 6 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 2
            {
                day: "Monday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 6,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run tempo pace for 2 miles, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 7,
                workout: "long run",
                instruction: "run 7 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 3
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 7,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 3 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 8.5,
                workout: "long run",
                instruction: "run 3 miles at easy pace, run 3 miles at tempo pace, run 2.5 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 4
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 7,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 3 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 9,
                workout: "long run",
                instruction: "run 9 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 5
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 4 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 10,
                workout: "long run",
                instruction: "run 10 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 6
            {
                day: "Monday",
                mileage: 7,
                workout: "easy run",
                instruction: "run 7 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 4 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 12 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 7
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 4 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 13,
                workout: "long run",
                instruction: "run 6 miles at easy pace, 4 miles at tempo pace, 3 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 8
            {
                day: "Monday",
                mileage: 7,
                workout: "easy run",
                instruction: "run 7 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 4 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 7,
                workout: "easy run",
                instruction: "run 7 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 14,
                workout: "long run",
                instruction: "run 14 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 9
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 4 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 14,
                workout: "long run",
                instruction: "run 6 miles at easy pace, 5 miles at tempo pace, 3 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 10
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 7,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 3 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 11,
                workout: "long run",
                instruction: "run 11 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 11
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 6,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 2 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 8,
                workout: "long run",
                instruction: "run 8 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 12
            {
                day: "Monday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 5,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 2 miles at tempo pace, cooldown for 1 mile"
            },
            {
                day: "Thursday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running to have fresh legs for the race"
            },
            {
                day: "Friday",
                mileage: 1,
                workout: "easy run",
                instruction: "run 1 mile at easy pace or slower to make sure your legs aren't stiff tomorrow"
            },
            {
                day: "Saturday",
                mileage: 13.1,
                workout: "raceday",
                instruction: "run your half marathon race!"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
    ],
    [
        //30-39 miles plan
        [
            //week 1
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 6,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .1 miles @ interval pace & .1 miles slow jogging for 2 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 8,
                workout: "long run",
                instruction: "run 8 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 2
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "tempo run",
                instruction: "warmup for 3 miles, run tempo pace for 3 miles, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 10,
                workout: "long run",
                instruction: "run 10 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 3
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "interval workout",
                instruction: "warmup for 3 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 3 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 6 miles at easy pace, run 4 miles at tempo pace, run 2 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 4
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 4 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 14,
                workout: "long run",
                instruction: "run 14 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 5
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 4 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 7,
                workout: "easy run",
                instruction: "run 7 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 10,
                workout: "long run",
                instruction: "run 5 miles at easy pace, run 3 miles at tempo pace, run 2 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 6
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 4 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 7,
                workout: "easy run",
                instruction: "run 7 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 15,
                workout: "long run",
                instruction: "run 3 miles easy pace, 3 miles tempo pace, 1 mile easy pace, 3 miles tempo pace, 5 miles easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 7
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 10,
                workout: "interval workout",
                instruction: "warmup for 3 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 4 miles total, cooldown for 3 miles"
            },
            {
                day: "Thursday",
                mileage: 7,
                workout: "easy run",
                instruction: "run 7 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 10,
                workout: "long run",
                instruction: "run 10 miles easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 8
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 4 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 15,
                workout: "long run",
                instruction: "run 2 miles easy pace, 2 miles tempo pace, 1 mile easy pace, 3 miles tempo pace, 1 mile easy pace, 2 miles tempo pace, 4 miles easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 9
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 4 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 11,
                workout: "long run",
                instruction: "run 11 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 10
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "interval workout",
                instruction: "warmup for 3 miles, alternate .5 miles @ interval pace & .25 miles slow jogging for 3 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 4 miles at easy pace, 4 miles at tempo pace, 4 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 11
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 7,
                workout: "tempo run",
                instruction: "warmup for 3 miles, run 2 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 8,
                workout: "long run",
                instruction: "run 8 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 12
            {
                day: "Monday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 5,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 2 miles at tempo pace, cooldown for 1 mile"
            },
            {
                day: "Thursday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running to have fresh legs for the race"
            },
            {
                day: "Friday",
                mileage: 2,
                workout: "easy run",
                instruction: "run 2 miles at easy pace or slower to make sure your legs aren't stiff tomorrow"
            },
            {
                day: "Saturday",
                mileage: 13.1,
                workout: "raceday",
                instruction: "run your half marathon race!"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
    ],
    [
        //40-59 miles plan
        [
            //week 1
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 4 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 10,
                workout: "long run",
                instruction: "run 10 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 2
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "tempo run",
                instruction: "warmup for 3 miles, run tempo pace for 3 miles, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 9,
                workout: "easy run",
                instruction: "run 9 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 12 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 3
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 10,
                workout: "interval workout",
                instruction: "warmup for 3 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 4 miles total, cooldown for 3 miles"
            },
            {
                day: "Thursday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 14,
                workout: "long run",
                instruction: "run 6 miles at easy pace, run 6 miles at tempo pace, run 2 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 4
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 10,
                workout: "tempo run",
                instruction: "warmup for 3 miles, run 5 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 13,
                workout: "long run",
                instruction: "run 13 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 5
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 12,
                workout: "interval workout",
                instruction: "warmup for 3 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 6 miles total, cooldown for 3 miles"
            },
            {
                day: "Thursday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 15,
                workout: "long run",
                instruction: "run 6 miles at easy pace, run 6 miles at tempo pace, run 3 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 6
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 10,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 6 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 12 miles easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 7
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 10,
                workout: "interval workout",
                instruction: "warmup for 3 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 4 miles total, cooldown for 3 miles"
            },
            {
                day: "Thursday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 15,
                workout: "long run",
                instruction: "run 2 miles easy pace, 3 miles tempo pace, 1 mile easy, 3 miles tempo, 1 mile easy, 3 miles tempo, 2 miles easy"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 8
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 10,
                workout: "tempo run",
                instruction: "warmup for 3 miles, run 4 miles at tempo pace, cooldown for 3 miles"
            },
            {
                day: "Thursday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 12 miles easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 9
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 10,
                workout: "interval workout",
                instruction: "warmup for 3 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 5 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 15,
                workout: "long run",
                instruction: "run 4 miles at easy pace, 6 miles tempo, 1 mile easy, 2 miles tempo, 2 miles easy"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 10
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "interval workout",
                instruction: "warmup for 3 miles, alternate .5 miles @ interval pace & .25 miles slow jogging for 3 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 4 miles at easy pace, 4 miles at tempo pace, 4 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 11
            {
                day: "Monday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "tempo run",
                instruction: "warmup for 3 miles, run 3 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 8,
                workout: "long run",
                instruction: "run 8 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
        [
            //week 12
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 5,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 2 miles at tempo pace, cooldown for 1 mile"
            },
            {
                day: "Thursday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running to have fresh legs for the race"
            },
            {
                day: "Friday",
                mileage: 2,
                workout: "easy run",
                instruction: "run 2 miles at easy pace or slower to make sure your legs aren't stiff tomorrow"
            },
            {
                day: "Saturday",
                mileage: 13.1,
                workout: "raceday",
                instruction: "run your half marathon race!"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
    ],
    [
        //60+ miles plan
        [
            //week 1
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "interval workout",
                instruction: "warmup for 2 miles, alternate .25 miles @ interval pace & .25 miles slow jogging for 4 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 12 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 2,
                workout: "recovery",
                instruction: "2 miles as slow as you like, but absolutely no faster than easy pace"
            }
        ],
        [
            //week 2
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 10,
                workout: "tempo run",
                instruction: "warmup for 4 miles, run tempo pace for 4 miles, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 14,
                workout: "long run",
                instruction: "run 14 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 2,
                workout: "recovery",
                instruction: "2 miles as slow as you like, but absolutely no faster than easy pace"
            }
        ],
        [
            //week 3
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 12,
                workout: "interval workout",
                instruction: "warmup for 3 miles, alternate .5 miles @ interval pace & .25 miles slow jogging for 6 miles total, cooldown for 3 miles"
            },
            {
                day: "Thursday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 15,
                workout: "long run",
                instruction: "run 6 miles at easy pace, run 6 miles at tempo pace, run 3 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 2,
                workout: "recovery",
                instruction: "2 miles as slow as you like, but absolutely no faster than easy pace"
            }
        ],
        [
            //week 4
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 12,
                workout: "interval workout",
                instruction: "warmup for 4 miles, alternate 1 mile at interval pace & .5 miles easy pace for 6 miles total, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 13,
                workout: "long run",
                instruction: "run 3 miles at easy pace, 8 miles at marathon pace, 2 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 2,
                workout: "recovery",
                instruction: "2 miles as slow as you like, but absolutely no faster than easy pace"
            }
        ],
        [
            //week 5
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 12,
                workout: "repetition workout",
                instruction: "warmup for 3 miles, alternate .25 miles @ repetition pace & .25 miles slow jogging for 6 miles total, cooldown for 3 miles"
            },
            {
                day: "Thursday",
                mileage: 9,
                workout: "easy run",
                instruction: "run 9 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 15,
                workout: "long run",
                instruction: "run 6 miles at easy pace, run 6 miles at tempo pace, run 3 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 2,
                workout: "recovery",
                instruction: "2 miles as slow as you like, but absolutely no faster than easy pace"
            }
        ],
        [
            //week 6
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 12,
                workout: "tempo run",
                instruction: "warmup for 4 miles, run 6 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 12 miles easy pace"
            },
            {
                day: "Sunday",
                mileage: 2,
                workout: "recovery",
                instruction: "2 miles as slow as you like, but absolutely no faster than easy pace"
            }
        ],
        [
            //week 7
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 11,
                workout: "interval workout",
                instruction: "warmup for 3 miles, alternate 1 mile @ interval pace & .25 miles slow jogging for 5 miles total, cooldown for 3 miles"
            },
            {
                day: "Thursday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 15,
                workout: "long run",
                instruction: "run 2 miles easy pace, 3 miles tempo pace, 1 mile easy, 3 miles tempo, 1 mile easy, 3 miles tempo, 2 miles easy"
            },
            {
                day: "Sunday",
                mileage: 2,
                workout: "recovery",
                instruction: "2 miles as slow as you like, but absolutely no faster than easy pace"
            }
        ],
        [
            //week 8
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 12,
                workout: "repetition workout",
                instruction: "warmup for 3 miles, alternate .25 miles @ repetition pace & .25 miles slow jogging for 6 miles total, cooldown for 3 miles"
            },
            {
                day: "Thursday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 2 miles easy pace, 8 miles marathon pace, 2 miles easy pace"
            },
            {
                day: "Sunday",
                mileage: 2,
                workout: "recovery",
                instruction: "2 miles as slow as you like, but absolutely no faster than easy pace"
            }
        ],
        [
            //week 9
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 12,
                workout: "interval workout",
                instruction: "warmup for 4 miles, alternate 1 mile @ interval pace & .25 miles slow jogging for 5 miles total, cooldown for 3 miles"
            },
            {
                day: "Thursday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 5,
                workout: "easy run",
                instruction: "run 5 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 15,
                workout: "long run",
                instruction: "run 4 miles at easy pace, 6 miles tempo, 1 mile easy, 2 miles tempo, 2 miles easy"
            },
            {
                day: "Sunday",
                mileage: 2,
                workout: "recovery",
                instruction: "2 miles as slow as you like, but absolutely no faster than easy pace"
            }
        ],
        [
            //week 10
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 8,
                workout: "easy run",
                instruction: "run 8 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 10,
                workout: "interval workout",
                instruction: "warmup for 4 miles, alternate .5 miles @ interval pace & .25 miles slow jogging for 3 miles total, cooldown for 3 miles"
            },
            {
                day: "Thursday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 4,
                workout: "easy run",
                instruction: "run 4 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 12,
                workout: "long run",
                instruction: "run 4 miles at easy pace, 4 miles at tempo pace, 4 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 2,
                workout: "recovery",
                instruction: "2 miles as slow as you like, but absolutely no faster than easy pace"
            }
        ],
        [
            //week 11
            {
                day: "Monday",
                mileage: 10,
                workout: "easy run",
                instruction: "run 10 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 8,
                workout: "tempo run",
                instruction: "warmup for 3 miles, run 3 miles at tempo pace, cooldown for 2 miles"
            },
            {
                day: "Thursday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Friday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Saturday",
                mileage: 9,
                workout: "long run",
                instruction: "run 9 miles at easy pace"
            },
            {
                day: "Sunday",
                mileage: 2,
                workout: "recovery",
                instruction: "2 miles as slow as you like, but absolutely no faster than easy pace"
            }
        ],
        [
            //week 12
            {
                day: "Monday",
                mileage: 6,
                workout: "easy run",
                instruction: "run 6 miles at easy pace or slower"
            },
            {
                day: "Tuesday",
                mileage: 3,
                workout: "easy run",
                instruction: "run 3 miles at easy pace or slower"
            },
            {
                day: "Wednesday",
                mileage: 5,
                workout: "tempo run",
                instruction: "warmup for 2 miles, run 2 miles at tempo pace, cooldown for 1 mile"
            },
            {
                day: "Thursday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running to have fresh legs for the race"
            },
            {
                day: "Friday",
                mileage: 2,
                workout: "easy run",
                instruction: "run 2 miles at easy pace or slower to make sure your legs aren't stiff tomorrow"
            },
            {
                day: "Saturday",
                mileage: 13.1,
                workout: "raceday",
                instruction: "run your half marathon race!"
            },
            {
                day: "Sunday",
                mileage: 0,
                workout: "recovery",
                instruction: "take today off running, but make sure to do some stretching"
            }
        ],
    ]
]

function changePacingDisplay(pace) {
    const currentPace = Number(pace);

    pacingDisplay.easy.innerText = paces[currentPace].easy;
    pacingDisplay.marathon.innerText = paces[currentPace].marathon;
    pacingDisplay.tempo.innerText = paces[currentPace].tempo;
    pacingDisplay.interval.innerText = paces[currentPace].interval;
    pacingDisplay.repetition.innerText = paces[currentPace].repetition;

}

function changeWeeklyDisplay(week, plan) {
    const currentWeek = week - 1;
    const currentPlan = Number(plan);


    //Monday
    mondayDisplay.miles.innerText = plans[currentPlan][currentWeek][0].mileage
    mondayDisplay.workout.innerText = plans[currentPlan][currentWeek][0].workout
    mondayDisplay.instructions.innerText = plans[currentPlan][currentWeek][0].instruction
    //Tuesday
    tuesdayDisplay.miles.innerText = plans[currentPlan][currentWeek][1].mileage
    tuesdayDisplay.workout.innerText = plans[currentPlan][currentWeek][1].workout
    tuesdayDisplay.instructions.innerText = plans[currentPlan][currentWeek][1].instruction
    //Wednesday
    wednesdayDisplay.miles.innerText = plans[currentPlan][currentWeek][2].mileage
    wednesdayDisplay.workout.innerText = plans[currentPlan][currentWeek][2].workout
    wednesdayDisplay.instructions.innerText = plans[currentPlan][currentWeek][2].instruction
    //Thursday
    thursdayDisplay.miles.innerText = plans[currentPlan][currentWeek][3].mileage
    thursdayDisplay.workout.innerText = plans[currentPlan][currentWeek][3].workout
    thursdayDisplay.instructions.innerText = plans[currentPlan][currentWeek][3].instruction
    //Friday
    fridayDisplay.miles.innerText = plans[currentPlan][currentWeek][4].mileage
    fridayDisplay.workout.innerText = plans[currentPlan][currentWeek][4].workout
    fridayDisplay.instructions.innerText = plans[currentPlan][currentWeek][4].instruction
    //Saturday
    saturdayDisplay.miles.innerText = plans[currentPlan][currentWeek][5].mileage
    saturdayDisplay.workout.innerText = plans[currentPlan][currentWeek][5].workout
    saturdayDisplay.instructions.innerText = plans[currentPlan][currentWeek][5].instruction
    //Sunday
    sundayDisplay.miles.innerText = plans[currentPlan][currentWeek][6].mileage
    sundayDisplay.workout.innerText = plans[currentPlan][currentWeek][6].workout
    sundayDisplay.instructions.innerText = plans[currentPlan][currentWeek][6].instruction

    calculateTotalWeeklyMileage();
}

function calculateTotalWeeklyMileage() {
    const totalWeeklyMileage = Number(mondayDisplay.miles.innerText) + Number(tuesdayDisplay.miles.innerText) + Number(wednesdayDisplay.miles.innerText) + Number(thursdayDisplay.miles.innerText) + Number(fridayDisplay.miles.innerText) + Number(saturdayDisplay.miles.innerText) + Number(sundayDisplay.miles.innerText)
    weeklyMileageDisplay.innerText = totalWeeklyMileage;
}

//causing plan to show on initial load
changeWeeklyDisplay(week.value, plan.value);
changePacingDisplay(pace.value);