export interface Exerice{
  id:string,
  name:string,
  duration:number,
  calaries:number,
  date?:number,
  state?: 'complete' | 'canceled' | null
}
