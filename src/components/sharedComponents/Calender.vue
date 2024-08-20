<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const month_abb = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let days_of_month: number[] = []
let date = new Date()
let month: Ref<number> = ref(0)
let year: Ref<number> = ref(0)
let curr_month: Ref<string> = ref('')
let first_day: Ref<number> = ref(0);
let days: Ref<number> = ref(0);
let selectedDay: Ref<{
    day: number,
    month: number,
    year: number
}> = ref({
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
});

const emit = defineEmits(['input'])

let monthsGrid = ref<HTMLElement | null>(null)

const toggleMonthGrid = () => {
    monthsGrid.value?.classList.toggle('show')
}

const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}

const getFebDays = (year: number) => {
    return isLeapYear(year) ? 29 : 28
}

const generateDays = (month: number, year: number) => {
    days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    first_day.value = new Date(year, month, 1).getDay()
    days.value = days_of_month[month];


}

const generateDate = () => {
    let currDate = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate()))
}

const getDate = () => {
    let currDate = new Date()
    month.value = currDate.getMonth()
    year.value = currDate.getFullYear()
    curr_month.value = `${month_names[month.value]}`
    generateDays(month.value, year.value)
    emit('input', selectedDay.value)
    // generateCalender(month, year)
}
const changeMonth = (newMonth: string) => {
    let index = month_abb.indexOf(newMonth)
    if (isValidMonth(index)) {

        month.value = index
        curr_month.value = `${month_names[index]}`
    }
    generateDays(month.value, year.value)
    toggleMonthGrid()
    // console.log(isValidMonth(index));
}
const changeyear = (val: number) => {
    let currentYear = (new Date()).getFullYear()

    if (val === -1) {
        if (year.value === currentYear) return

    }
    let newValue = year.value + val;
    if (newValue == currentYear) {
        month.value = (new Date()).getMonth()
        curr_month.value = month_names[(new Date()).getMonth()]

    }
    year.value += val
    generateDays(month.value, year.value)

}
const isValidMonth = (index: number) => {
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    if (currentYear < year.value) return true
    if (currentYear === year.value) {
        let currentMonth = currentDate.getMonth()
        if (index >= currentMonth) return true

    }
    return false
}

const isValidYear = (year: number) => {
    if (year >= (new Date()).getFullYear()) return true;
    return false

}

const validateMonth = (index: number) => {
    if (isValidMonth(index)) return 'valid'
    return 'invalid'
}

const isValidDay = (day: number) => {

    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()
    let currentDay = currentDate.getDate()
    if (currentYear < year.value) return true
    if (currentYear === year.value) {
        if (currentMonth < month.value) return true
        if (currentMonth === month.value) {
            if (day >= currentDay) return true
        }
    }
    return false
}

const validateDay = (day: number) => {
    if (isValidDay(day)) return 'valid'
    return 'invalid'
}

const isSelectedDay = (day: number) => {

    if(selectedDay.value.month != month.value) return '';
    if(selectedDay.value.year != year.value) return '';
    if ((day === selectedDay.value.day)
    ) return 'selected';

    return ''
}

const updateSelectedDay = (day: number) => {
    if (isValidDay(day)) {
        selectedDay.value = {
            day: day,
            month: month.value,
            year: year.value
        }
    }
    emit('input', selectedDay.value)

}
onMounted(() => {
    getDate();

})

</script>
<template>
    <svg style="display: none;">
        <defs>
            <symbol id="icon-arrow-left" viewBox="0 0 7 12" fill="none">
                <path d="M6 1L1 6L6 11" stroke="#2C3233" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </symbol>
            <symbol id="icon-arrow-right" viewBox="0 0 7 12" fill="none">
                <path d="M1 11L6 6L1 1" stroke="#2C3233" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </symbol>
        </defs>
    </svg>
    <div class="calender-wrapper">
        <div class="months" ref="monthsGrid">
            <div :class="`month ${validateMonth(index)}`" v-for="(month, index) in month_abb" :key="month"
                @click="changeMonth(month)">{{ month }}</div>
        </div>
        <div class="calender-header">
            <div class="month-year">
                <div class="month-name" @click="toggleMonthGrid()">

                    {{ curr_month }}
                    <!-- May -->

                </div>
                <div class="year">
                    <div class="arrow">
                        <svg width="11.5" height="14" @click="changeyear(-1)">
                            <use href="#icon-arrow-left" />
                        </svg>
                    </div>

                    {{ year }}
                    <!-- 2024 -->
                    <div class="arrow">
                        <svg width="11.5" height="14" @click="changeyear(1)">
                            <use href="#icon-arrow-right" />
                        </svg>
                    </div>

                </div>
            </div>
            <div class="days">
                <div>SU</div>
                <div>MO</div>
                <div>TU</div>
                <div>WE</div>
                <div>TH</div>
                <div>FR</div>
                <div>SA</div>
            </div>
        </div>
        <div class="calender-body">
            <div v-for="i in (35 - days)"></div>
            <div :class="`day ${validateDay(i)} ${isSelectedDay(i)}`" :value="i" @click="updateSelectedDay(i)" v-for="i in days"> {{ i }}
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
$padding: 1.3rem 2rem;

.calender-wrapper {
    width: 100%;
    min-width: 25rem;
    height: 26rem;
    background-color: $white;
    border-radius: $border-radius;
    padding: $padding;
    border: 1px solid $blue;
    font-family: $helvetica;
    font-size: 1.25rem;
    position: relative;
    overflow: hidden;

    .months {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $white;
        padding: $padding;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        display: none;

        &.show {
            display: grid;
        }

        .month {
            display: flex;
            justify-content: center;
            align-items: center;

            &.valid {
                cursor: pointer;

                &:hover {
                    background-color: rgba(42, 192, 212, 0.30);
                    border-radius: 0.5rem;
                }
            }

            &.invalid {
                color: darken($grey, 25%);
            }


        }

    }

    .calender-header {
        padding-bottom: 0.7rem;
        border-bottom: 1px solid $blue;
        height: 23%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .month-year {
            font-size: 1.5rem;

            display: flex;
            justify-content: space-between;
            margin: 0 0.5rem;

            span {
                display: block;
                font-size: 1.5rem;
                font-weight: 500;
            }

            >.year {
                display: flex;
                gap: 0.5rem;
                align-items: center;

                .arrow {

                    cursor: pointer;
                }

            }

            >.month-name {
                cursor: pointer;

            }

        }

        .days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);

            >div {
                text-align: center;
            }
        }
    }

    .calender-body {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 0.5rem;
        height: 76%;
        margin-top: 1%;
        // padding-top: 1.3rem;

        .day {
            display: flex;
            justify-content: center;
            align-items: center;

            &.valid {
                cursor: pointer;

                &:not(.selected):hover {
                    background-color: rgba(42, 192, 212, 0.30);
                    border-radius: 0.5rem;
                }
                &.selected{
                    background-color: $navy;
                    color: $white;
                    border-radius: 0.5rem;
                }
            }


            &.invalid {
                color: darken($grey, 25%);
            }

        }
    }
}
</style>