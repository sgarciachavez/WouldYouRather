
let avatars = {
    urls: ["https://image.flaticon.com/icons/svg/145/145842.svg",
    "https://image.flaticon.com/icons/svg/145/145843.svg",
    "https://image.flaticon.com/icons/svg/145/145844.svg",
    "https://image.flaticon.com/icons/svg/145/145845.svg",
    "https://image.flaticon.com/icons/svg/145/145846.svg",
    "https://image.flaticon.com/icons/svg/145/145847.svg",
    "https://image.flaticon.com/icons/svg/145/145848.svg",
    "https://image.flaticon.com/icons/svg/145/145849.svg",
    "https://image.flaticon.com/icons/svg/145/145850.svg"
    ]
}

export function _getAvatars () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...avatars}), 1000)
  })
}
