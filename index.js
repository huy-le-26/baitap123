const stopwatchContainer = document.querySelector("#stopwatch")

const btnAddStopwatch = document.querySelector("#addStopwatch") 
const btnStopAll = document.querySelector("#stopAll") 
const btnStartAll = document.querySelector("#startAll") 
const btnPause = document.querySelector("#pause") 
const list = [];

//  hàm đổi thời gian 
const convertSecondToTime = (seconds) => {
    let s = seconds % 60
    let m = Math.floor(seconds / 60)

    if (s < 10) s = "0" + s
    if (m < 10) m = "0" + m

    return m + ":" + s
}
// hàm thêm sự kiện vào button
btnAddStopwatch.addEventListener("click", () => {
    const stopwatch = new Stopwatch()
    list.push(stopwatch);  
    // thêm các nút vào 1 mảng 
    stopwatchContainer.appendChild(stopwatch.container)
    // thêm phần khung đồng hồ 
})
btnStartAll.addEventListener("click", () => {
    list.forEach(stopwatch =>{
        // lọc mảng
        stopwatch.handleStart();
    })
btnStopAll.addEventListener("click", () => {
         list.forEach(stopwatch =>{
         stopwatch.handleStop();
     })
 })
 btnPause.addEventListener("click", () => {
    list.forEach(stopwatch =>{
    stopwatch.handlePause();
})
})

class Stopwatch {
    count = 0;
    interval = null;
    
    isStarted = false;
    container;
    txtTime;
    btnStart;
    btnPause;
    btnStop;

    constructor() {
        this.container = document.createElement("div")

        this.txtTime = document.createElement("span")
        this.txtTime.innerHTML = "00:00"

        this.btnStart = document.createElement("button")
        this.btnStart.innerHTML = "Start"
        this.btnStart.addEventListener("click", this.handleStart)

        this.btnPause = document.createElement("button")
        this.btnPause.innerHTML = "Pause"
        this.btnPause.addEventListener("click", this.handlePause)
        
        this.btnStop = document.createElement("button")
        this.btnStop.innerHTML = "Stop"
        this.btnStop.addEventListener("click", this.handlePause)
        

        this.container.appendChild(this.txtTime)
        this.container.appendChild(this.btnStart)
        this.container.appendChild(this.btnPause)
        this.container.appendChild(this.btnStop)

    }
// hàm chạy
handleStart = () => {
    if(!this.isStarted){
        this.interval = setInterval(()=>{
        this.count++;
        this.txtTime.innerHTML = convertSecondToTime(this.count);
        },1000)
        this.isStarted = true;
        // nếu isstarted mà đúng thì cho đồng hồ chạy
    }else{
        alert("Started!");
        return;
    }
    
    
}

handlePause = () => {
    clearInterval(this.interval)
    this.isStarted = false;
    // nếu isstarted mà sai thì cho đồng hồ dừng
}
handleStop = () => {
    clearInterval(this.interval)
    this.count=0;
    this.txtTime.innerHTML = "00:00:00"
    this.isStarted = false; 
}
}
