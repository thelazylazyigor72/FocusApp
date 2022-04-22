//!get input field
const inputField = document.querySelector('#input')


//!get btn that creates task in list based on input
const pullToList = document.querySelector('.btn_add')


//!get container where tasks should be 
const tasksContainer = document.querySelector('.todo_list')


//!get container where done tasks should be
const tasksContainerDone = document.querySelector('.todo_list_done')

//!get clear done tasks btn
const clearDoneTasks = document.querySelector('.btn_clear_done')

/*
?Issue was founded, if key=value in localStorage, then localStorage start to give no fucks to order of pairs in storage
So i decided to create function dat creates unique key for each task and dat key is growing up lineary, so basically
i get pairs like 1:value1 , 2:value2, etc.
!functions below is based on Closure concept, and checking of localStorage keys, so i get what i want
*/


//!generate unique key for active tasks
const generateUniqueKey = () => {
    //this count changin 'on the spot' - according to closure theory
    let count = 0;
    //inside we check, if lS is empty then we start from 0, else we start from max key+1 to keep the growing order
    return function() {
        if (localStorage.length === 0) {
        return count
        } else {
        let keysStore = Object.keys(localStorage)
        let higherKey = Math.max(...keysStore)
        return count = higherKey + 1
        }
    }
}


//!generate negative unique key for done tasks
const generateNegativeUniqueKey = () => {
    //this count changin 'on the spot' - according to closure theory
    let count = 0;
    //inside we check, if length 0 or 1 we call -1 else we get lower key and decreasing it
    return function() {
        if (localStorage.length <= 1) {
        return count - 1
        } else {
        let keysStore = Object.keys(localStorage)
        //keysStore = keysStore.filter(x => x >= 0)
        let lowerKey = Math.min(...keysStore)
        return count = lowerKey - 1
        }
    }
}


//!assign call of function to make the Closure
let counter = generateUniqueKey()


//!assign call of function to make the Closure
let counterNegative = generateNegativeUniqueKey()


//!function dat populate active task as html element on page
const populateTask = input => {
    const inpVal = input
    const taskNode = document.createElement('li')
    taskNode.classList.add('task')
    taskNode.dataset.key = counter()
    const skeleton = `                
        <p class="task_text">${input}</p>
        <div class="controls">
        <button class="btn btn_check">
            <i class="fas fa-check"></i>
        </button>
        <button class="btn btn_times">
            <i class="fas fa-times"></i>
        </button>
        </div>`
    taskNode.innerHTML = skeleton
    tasksContainer.append(taskNode)
    localStorage.setItem(counter(),inpVal)
    //*then we take created node and pass it to function dat will bring live for btns which r inside of passed node
    initBtns(taskNode)
}


//!function dat repopulate done task as html element to their container on page
const populateDoneTask = input => {
    const inpVal = input
    const taskNode = document.createElement('li')
    taskNode.classList.add('task')
    taskNode.dataset.key = counterNegative()
    const skeleton = `                
        <p class="task_text_done">${input}</p>`
    taskNode.innerHTML = skeleton
    tasksContainerDone.append(taskNode)
    localStorage.setItem(counterNegative(),inpVal)
}


//!function to put functionality on buttons accordin to passed task
const initBtns = lazyTask => {
        //!get chech task btn 
        const doneTask = lazyTask.querySelector('.btn_check')
        //!get delete task btn
        const deleteTask = lazyTask.querySelector('.btn_times')
        //!get task text 
        const taskText = lazyTask.querySelector('.task_text')
    
        doneTask.addEventListener('click', (e) => {
            e.preventDefault()

            //!marking task as completed
            taskText.classList.toggle('btn_check_show')
            let savedTaskText = taskText.textContent
            populateDoneTask(savedTaskText)
            deleteNodeTask(e)
        })
    
        deleteTask.addEventListener('click', (e) => {
            //pass event to function that delete node based on coming event
            deleteNodeTask(e)
        })
}


//!function dat populates back all stored tasks to the page when page re/loads
//idea that we take all ordered keys of localStorage and based on them bringing all elements back
const repopulateTasks = () => {
    //sorting keys, so we keep the order
    let store = Object.keys(localStorage)
    //! takin all positive keys (positive - actual)
    store = store.filter(x => x > -1)
    store = store.sort()
    //console.log(store)
    for (let i = 0; i < store.length; i++) {
        const value = localStorage.getItem(store[i]);
        const taskNodeRe = document.createElement('li')
        taskNodeRe.classList.add('task')
        taskNodeRe.dataset.key = store[i]
        const skeleton = `                
        <p class="task_text">${value}</p>
        <div class="controls">
            <button class="btn btn_check">
            <i class="fas fa-check"></i>
            </button>
            <button class="btn btn_times">
            <i class="fas fa-times"></i>
            </button>
        </div>`
        taskNodeRe.innerHTML = skeleton
        //console.log(taskNodeRe)
        tasksContainer.append(taskNodeRe)
    }
    //!get collection of just created lists-tasks and go thru it and for each task bring back her btns functionality 
    const taskCollection = document.querySelectorAll('.task')
    taskCollection.forEach(task => {
        initBtns(task)
    })
}


//!function dat populates back all done tasks to the page
const repopulateDoneTasks = () => {
    //sorting keys, so we keep the order
    let store = Object.keys(localStorage)
    //! takin all positive keys (negative - done)
    store = store.filter(x => x < 0)
    store = store.sort()
    //console.log(store)
    for (let i = 0; i < store.length; i++) {
        const value = localStorage.getItem(store[i]);
        const taskNodeRe = document.createElement('li')
        taskNodeRe.classList.add('task')
        taskNodeRe.dataset.key = store[i]
        const skeleton = `                
        <p class="task_text_done">${value}</p>`
        taskNodeRe.innerHTML = skeleton
        //console.log(taskNodeRe)
        tasksContainerDone.append(taskNodeRe)
    }
}


//!function that deletes node based on what we clicking
const deleteNodeTask = (event) => {
    let target = event.currentTarget.parentNode.parentNode
    if (target.classList.contains('task')) {
        target.remove()
        target.classList.remove('task')
        localStorage.removeItem(target.dataset.key)
    } else {
        alert('Error when JUST deleting')
    }
}


//!event on pullToList, so when we click it we create html element
pullToList.addEventListener('click', () => {
    if (inputField.value) {
        //so we take coming input value and pass it to populating function
        populateTask(inputField.value)
        //clear input field after passing the value
        inputField.value = ''
    } else {
        alert('Ты ничего не вводишь')
    }
})

//!event when we press enter, then we pass the value
input.addEventListener('keyup', e => {
    if (e.keyCode === 13 && inputField.value != '') {
        //same functionaliti as if press btn
        populateTask(inputField.value)
        inputField.value = ''
    }
})


//!When page re/loads whe need to populate all active  and done tasks back to view
document.addEventListener('DOMContentLoaded', () => {
    repopulateTasks()
    repopulateDoneTasks()
})

//!Delete done tasks
clearDoneTasks.addEventListener('click', () => {
    //!Clear only there's no active tasks
    let store = Object.keys(localStorage)
    store = store.filter(x => x >= 0)
    if (store.length === 0) {
        const taskCollection = document.querySelectorAll('.task')
        taskCollection.forEach(task => {
            if (Number(task.dataset.key) < 0) {
                task.remove()
                task.classList.remove('task')
                localStorage.removeItem(task.dataset.key)
            }
        })
    } else {
        alert('U can clear stash only when u did everything, sorry we working on it')
    }

})