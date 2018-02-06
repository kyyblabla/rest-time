export default class Timer {
  constructor(timeCount, step = 1000) {
    this.timeCount = timeCount
    this.step = step
  }
  onStart(cb) {
    this._onStart = cb
    return this
  }
  onStop(cb) {
    this._onStop = cb
    return this
  }
  onTime(cb) {
    this._onTime = cb
    return this
  }
  _updateTime() {
    if (this.status === 'RUNING') {
      this.lastUpdateTime = new Date().getTime()
    } else if (this.status === 'PAUSED') {
    }
  }
  start() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId)
    }
    this.startTime = new Date().getTime()
    this.lastUpdateTime = new Date().getTime()
    this._onStart(this.timeCount)
    this.intervalId = setInterval(this._updateTime, this.step)
  }
  togglePauseResume() {}
  reset() {}
}
