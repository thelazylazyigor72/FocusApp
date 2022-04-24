//?ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ-------------------------------------------------------------------

//!get focus length input
const inputSession = document.querySelector('#focusTime')
//!get pause length input
const inputPause = document.querySelector('#restTime')
//!get time container
const timeContainer = document.querySelector('.time_container')
//!get submit button
const submit = document.querySelector('.btn_submit')
//!get pause switcher 
const pauseSwitcher = document.querySelector('#pause_switcher')
//!get whole clock div
const clockDiv = document.querySelector('.timer')
//!get go back button
const goBack = document.querySelector('.btn_back')
//!get timerForm
const timerForm = document.querySelector('.timer_form')
//!get start session button
const startFocus = document.querySelector('.btn_start_focus')
//!get start break button
const startRest = document.querySelector('.btn_start_rest')
//!get stop button
const stop = document.querySelector('.btn_stop')



//?ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ-----------------------------------------------------------------

//!variable to store current time
let startTime;
//!variable to store target time
let targetTime;
//!variabe to store timer
let interval;
//!variable to store focus session
let focusSession;
//!variable to store rest session
let restSession;
//!variable to store object w/ vars needed to reload
let obj = {};
//!variable to store data id
let dataId;
//!variable to store how many seconds pause was
let secondsOfPause = 0;
//!variable to store pause timer
let pauseInterval;

//? EVENTS-----------------------------------------------------------------------------------------------

//!goback button
goBack.addEventListener('click', () => {
    timerForm.style.display = 'flex'
    clockDiv.style.display = 'none'
})

//!submit button
//getting user parameters
submit.addEventListener('click', () => {
    if (inputSession.value && inputPause.value) {
        [focusSession, restSession] = [Number(inputSession.value), Number(inputPause.value)]
        //clear input field after passing the value
        inputSession.value = '';
        inputPause.value = ''
        timerForm.style.display = 'none'
        clockDiv.style.display = 'flex'
    } else {
        alert('Ты что-то не ввел походу')
    }

})

//!startSession button
startFocus.addEventListener('click', (e) => {
    dataId = e.currentTarget.dataset.id
    makeUnclickable(dataId)
    getEnds(focusSession)
    saveRequiredData(focusSession,restSession,targetTime,dataId)
    actualTimeLeft(targetTime,dataId)
})

//!startBreak button
startRest.addEventListener('click', (e) => {
    dataId = e.currentTarget.dataset.id
    makeUnclickable(dataId)
    getEnds(restSession)
    saveRequiredData(focusSession,restSession,targetTime,dataId)
    actualTimeLeft(targetTime,dataId)
})

//!If pauseSwithcer active or not we do something
pauseSwitcher.addEventListener('click', () => {
    if (pauseSwitcher.checked) {
        //clearing interval and start to count seconds in paused state
        clearInterval(interval)
        wrapPauseCounter()
    } else {
        //clearing pause interval and updating targetTime
        //then just call functions
        clearInterval(pauseInterval)
        secondsOfPause = secondsOfPause/60;
        targetTime = addMinutes(targetTime,secondsOfPause)
        saveRequiredData(focusSession,restSession,targetTime,dataId)
        actualTimeLeft(targetTime,dataId)
    }
})

//!Stop button making stoppin timer and preventin reload imunity
stop.addEventListener('click', () => {
    makeCLickable(dataId)
    clearInterval(interval)
    targetTime = 0;
    timeContainer.innerHTML = '00:00'
    saveRequiredData(focusSession,restSession,targetTime,dataId)
})

//!When page reloads we bringing back all needed parameters
document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.length > 1) {
        timerForm.style.display = 'none'
        clockDiv.style.display = 'flex'
        assignRequiredData()
        makeUnclickable(obj.id)
        actualTimeLeft(targetTime,obj.id)
    } else {
        timerForm.style.display = 'flex'
        clockDiv.style.display = 'none'
    }
})

//?FUNCTIONS----------------------------------------------------------------

//!Function that makes current time point and target time point
function getEnds(period, act = (new Date)) {
    startTime = act;
    return targetTime = addMinutes(startTime,period)
}

//!Function that creates target time point
function addMinutes(timePoint, minutes) {
    if (minutes === 60) {
        return new Date(timePoint.getTime() + (minutes**60*1000));
    } else {
        return new Date(timePoint.getTime() + minutes*60000);
    }
}

//!Callback function for setInterval that displays time left before we get to target every second
function actualTimeBeforeTarget (target, data, act = (new Date)) {
        let diff = target.getTime() - act;
        if (diff >= 0) {
        timeContainer.innerHTML = new Date(diff).toLocaleTimeString("en-US", {minute: '2-digit', second: '2-digit'});
        } else {
            alert('Time is out!')
            clearInterval(interval)
            makeCLickable(data)
        }
}

//!Wrapper function for interval
function actualTimeLeft(target,data,act) {
        interval = setInterval(actualTimeBeforeTarget,1000,target,data,act)
}

//!Function that makes button clickable based on passed data-id
function makeCLickable(data) {
    switch (data) {
        case 'focusSession':
            startRest.disabled = false
            break;
        case 'restSession':
            startFocus.disabled = false
            break;
        default:
            alert('Can not make it clickable')
            break;
    }
}

//!Function that makes button unclickable based on passed data-id
function makeUnclickable(data) {
    switch (data) {
        case 'focusSession':
            startRest.disabled = true
            break;
        case 'restSession':
            startFocus.disabled = true
            break;
        default:
            alert('Can not make it unclickable')
            break;
    }
}

//!Function that saves all important parameters as object and make it JSON, so I will be able to store in sessionStorage
function saveRequiredData(s,pS,tgt,data) {
    obj = {
        ses: s,
        paSes: pS,
        target: tgt,
        id: data
    }
    obj = JSON.stringify(obj)
    sessionStorage.setItem(1,obj)
}

//!Get object from sessionStorage and reassign exesting(but empty cuz of reload) variables
function assignRequiredData() {
    obj = sessionStorage.getItem(1)
    obj = JSON.parse(obj)
    obj.target = new Date(obj.target)
    targetTime = obj.target
    focusSession = obj.ses
    restSession = obj.paSes
    dataId = obj.id
}

//!Function that counts how many second pause was
function wrapPauseCounter() {
    pauseInterval = setInterval(() => {
        secondsOfPause++;
    },1000)
}