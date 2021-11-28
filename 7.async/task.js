class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(date, func, idNumber) {
        if (!idNumber) throw new Error('Нет ID');
        if (this.alarmCollection.some((elem) => elem.id == idNumber)) {
            console.error('Звонок с таким ID уже существует')
        } else {
            this.alarmCollection.push({ id: idNumber, time: date, callback: func });
        }

    }
    removeClock(id) {
        let longStart = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((elem) => elem.id != id)
        let longEnd = this.alarmCollection.length;
        return longStart == longEnd;
    }
    getCurrentFormattedTime() {
        let current = new Date();
        return `${(current.getHours() < 10 ? '0' : '') + current.getHours()}:${(current.getMinutes() < 10 ? '0' : '') + current.getMinutes()}`;
    }
    start() {
        let checkClock = (call) => {
            if (call.time === this.getCurrentFormattedTime()) call.callback();
        }
        if (!this.timerId) this.timerId = setInterval(() => { this.alarmCollection.forEach((elem)=>checkClock(elem)) },1000);

    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach((elem) => console.log(`${elem.id}: ${elem.time}`))
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection.length = 0;
    }
}
/*let clock = new AlarmClock();
clock.addClock("16:45", () => console.log('пора вставать'), 1);
clock.addClock("16:45", () => {console.log('давай вставай уже'); clock.removeClock(2)}, 2);
clock.addClock("16:45", () => console.log('иди умывайся'));
clock.addClock("16:45", () => {
    console.log('вставай а то проспишь'); 
    clock.clearAlarms();
    clock.printAlarms();
    clock.removeClock(2)
}, 3);
clock.addClock("16:45", () => console.log('вставай а то проспишь'), 1);
clock.printAlarms();
clock.start();*/

let clock = new AlarmClock();
clock.addClock("13:07", () => console.log('пора вставать'), 1);
clock.addClock("13:08", () => {console.log('давай вставай уже'); clock.removeClock(2)}, 2);
clock.addClock("13:09", () => {
    console.log('вставай а то проспишь'); 
    clock.clearAlarms();
    clock.printAlarms();
    clock.removeClock(2)
}, 3);
clock.printAlarms();
clock.start();