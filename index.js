import {fromEvent, interval} from 'rxjs'
import {switchMap} from 'rxjs/operators'

const log = console.log
const startButton = document.querySelector('#start')

fromEvent(startButton, 'click')
  .pipe(switchMap(x => interval(1000)))
  .subscribe(x => console.log(x))
