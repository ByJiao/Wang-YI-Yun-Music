import service from "..";
export function getMusicitemList(data){
    return service({
        method:'GET',
        url:`/playlist/detail?id=${data}`
    })
}
export function getMusicItem(data){
    return service({
        method:'GET',
        url:`/playlist/track/all?id=${data}&offset=0`
    })
}
export function getMusiclyric(data){
    return service({
        method:'GET',
        url:`/lyric?id=${data}`
    })
}