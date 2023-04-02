export const generarId = ()=>{
    const random = Math.random();
    const date = Date.now();

    return date + random;
}