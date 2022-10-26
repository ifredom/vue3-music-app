export function shuffle(source: any[]) {
  const arr = source.slice()
  for (let i = 0; i < arr.length; i++) {
    const j = getRandomInt(i)
    swap(arr, i, j)
  }
  return arr
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1))
}

function swap(arr: unknown[], i: number, j: number) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

/**
 *
 * @param interval 时间间隔
 * @returns
 */
export function formatTime(interval: number) {
  interval = interval | 0
  const minute = ((interval / 60 | 0) + '').padStart(2, '0')
  const second = (interval % 60 + '').padStart(2, '0')
  return `${minute}:${second}`
}


export function time_to_sec(s: string) {
  let ss = s.split(":");
  const minute = Math.floor(Number(ss[0])) * 60
  const seconds = Number(ss[1])
  return minute + seconds
}


const a = '00:22:71'
console.log(time_to_sec(a));
