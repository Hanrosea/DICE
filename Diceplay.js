let Dice = new Array("DiceImg/1.png","DiceImg/2.png","DiceImg/3.png","DiceImg/4.png","DiceImg/5.png","DiceImg/6.png")
let DiceArray = new Array(0,0,0,0,0,0)
let Dice_CountPick=0
function rnd(){ // 랜덤 값 받아오기
    let rand_num=Math.floor(Math.random()*6)
    return rand_num
}
function SwapDice(){ // 플레이 보드 주사위 굴리기
    let obj1 = document.getElementById("D1P")
    let r1 = rnd()
    obj1.src = Dice[r1]
    DiceArray[0] = r1+1

    let obj2 = document.getElementById("D2P")
    let r2 = rnd()
    obj2.src = Dice[r2]
    DiceArray[1] = r2+1

    let obj3 = document.getElementById("D3P")
    let r3 = rnd()
    obj3.src = Dice[r3]
    DiceArray[2] = r3+1

    let obj4 = document.getElementById("D4P")
    let r4 = rnd()
    obj4.src = Dice[r4]
    DiceArray[3] = r4+1

    let obj5 = document.getElementById("D5P")
    let r5 = rnd()
    obj5.src = Dice[r5]
    DiceArray[4] = r5+1

    let obj6 = document.getElementById("D6P")
    let r6 = rnd()
    obj6.src = Dice[r6]
    DiceArray[5] = r6+1
}
function ResetDice(){ // 플레이 보드 초기화
    let obj1 = document.getElementById("D1P")
    obj1.src = 'DiceImg/Basis.png'
    let obj2 = document.getElementById("D2P")
    obj2.src = 'DiceImg/Basis.png'
    let obj3 = document.getElementById("D3P")
    obj3.src = 'DiceImg/Basis.png'
    let obj4 = document.getElementById("D4P")
    obj4.src = 'DiceImg/Basis.png'
    let obj5 = document.getElementById("D5P")
    obj5.src = 'DiceImg/Basis.png'
    let obj6 = document.getElementById("D6P")
    obj6.src = 'DiceImg/Basis.png'
    
    let D1 = document.getElementById("1D")
    D1.innerText = 0
    let D2 = document.getElementById("2D")
    D2.innerText = 0
    let D3 = document.getElementById("3D")
    D3.innerText = 0
    let D4 = document.getElementById("4D")
    D4.innerText = 0
    let D5 = document.getElementById("5D")
    D5.innerText = 0
    let D6 = document.getElementById("6D")
    D6.innerText = 0
    let D7 = document.getElementById("7D")
    D7.innerText = 0

    let D8 = document.getElementById("1D2")
    D8.innerText = 0
    let D9 = document.getElementById("2D2")
    D9.innerText = 0
    let D10 = document.getElementById("3D2")
    D10.innerText = 0
    let D11 = document.getElementById("4D2")
    D11.innerText = 0
    let D12 = document.getElementById("5D2")
    D12.innerText = 0
    let D13 = document.getElementById("6D2")
    D13.innerText = 0
    let D14 = document.getElementById("7D2")
    D14.innerText = 0
    
    count=0
    count2=0
}
function DiceCalc_Single(){ // 싱글 점수 기록
    let Max=0
    for(i=0; i<6; i++){
        if(DiceArray[i]>Max){
            Max=DiceArray[i]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("1D")
    Dip.innerText = `${Max}`
}
function DiceCalc_Double(){ // 더블 점수 기록
    let DCD = new Array(0,0,0,0,0,0)
    for(i=0; i<6; i++){
        let getNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);
        let count = getNum(DiceArray,i+1)
        if(count==2||count==3||count==4||count==5||count==6){
            DCD[i]=i+1
        }
        else if(count==0||count==1){
            DCD[i]=0
        }
    }
    let Max=0
    for(j=0; j<6; j++){
        if(DCD[j]>Max){
            Max=DCD[j]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("2D")
    Dip.innerText = `${Max*2}`
}
function DiceCalc_Triple(){ // 트리플 점수 기록
    let DCD = new Array(0,0,0,0,0,0)
    for(i=0; i<6; i++){
        let getNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);
        let count = getNum(DiceArray,i+1)
        if(count==3||count==4||count==5||count==6){
            DCD[i]=i+1
        }
        else if(count==0||count==1||count==2){
            DCD[i]=0
        }
    }
    let Max=0
    for(j=0; j<6; j++){
        if(DCD[j]>Max){
            Max=DCD[j]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("3D")
    Dip.innerText = `${Max*3}`
}
function DiceCalc_Quads(){ // 쿼드러플 점수 기록
    let DCD = new Array(0,0,0,0,0,0)
    for(i=0; i<6; i++){
        let getNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);
        let count = getNum(DiceArray,i+1)
        if(count==4||count==5||count==6){
            DCD[i]=i+1
        }
        else if(count==0||count==1||count==2||count==3){
            DCD[i]=0
        }
    }
    let Max=0
    for(j=0; j<6; j++){
        if(DCD[j]>Max){
            Max=DCD[j]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("4D")
    Dip.innerText = `${Max*4}`
}
function DiceCalc_Full_H(){ // 풀하우스 점수 기록
    let DCD = new Array(0,0,0,0,0,0)
    for(i=0; i<6; i++){
        let getNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);
        let count = getNum(DiceArray,i+1)
        if(count==5 || count==6){
            DCD[i]=i+1
        }
        else if(count==0||count==1||count==2||count==3||count==4){
            DCD[i]=0
        }
    }
    let Max=0
    for(j=0; j<6; j++){
        if(DCD[j]>Max){
            Max=DCD[j]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("5D")
    Dip.innerText = `${Max*5}`
}
function DiceCalc_Sextu(){ // 섹터 점수 기록
    let DCD = new Array(0,0,0,0,0,0)
    for(i=0; i<6; i++){
        let getNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);
        let count = getNum(DiceArray,i+1)
        if(count==6){
            DCD[i]=i+1
        }
        else{
            DCD[i]=0
        }
    }
    let Max=0
    for(j=0; j<6; j++){
        if(DCD[j]>Max){
            Max=DCD[j]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("6D")
    Dip.innerText = `${Max*6}`
}
let count = 0
function Dice_Count(){ // 점수 입력 횟수
    let Dip = document.getElementById("7D")  
    count += 1
    Dip.innerText = `${count}`
}
//---------------------------------------------------------------------------------------------------------//
function DiceCalc_Single2(){ // 싱글 점수 기록
    let Max=0
    for(i=0; i<6; i++){
        if(DiceArray[i]>Max){
            Max=DiceArray[i]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("1D2")
    Dip.innerText = `${Max}`
}
function DiceCalc_Double2(){ // 더블 점수 기록
    let DCD = new Array(0,0,0,0,0,0)
    for(i=0; i<6; i++){
        let getNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);
        let count = getNum(DiceArray,i+1)
        if(count==2||count==3||count==4||count==5||count==6){
            DCD[i]=i+1
        }
        else if(count==0||count==1){
            DCD[i]=0
        }
    }
    let Max=0
    for(j=0; j<6; j++){
        if(DCD[j]>Max){
            Max=DCD[j]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("2D2")
    Dip.innerText = `${Max*2}`
}
function DiceCalc_Triple2(){ // 트리플 점수 기록
    let DCD = new Array(0,0,0,0,0,0)
    for(i=0; i<6; i++){
        let getNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);
        let count = getNum(DiceArray,i+1)
        if(count==3||count==4||count==5||count==6){
            DCD[i]=i+1
        }
        else if(count==0||count==1||count==2){
            DCD[i]=0
        }
    }
    let Max=0
    for(j=0; j<6; j++){
        if(DCD[j]>Max){
            Max=DCD[j]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("3D2")
    Dip.innerText = `${Max*3}`
}
function DiceCalc_Quads2(){ // 쿼드러플 점수 기록
    let DCD = new Array(0,0,0,0,0,0)
    for(i=0; i<6; i++){
        let getNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);
        let count = getNum(DiceArray,i+1)
        if(count==4||count==5||count==6){
            DCD[i]=i+1
        }
        else if(count==0||count==1||count==2||count==3){
            DCD[i]=0
        }
    }
    let Max=0
    for(j=0; j<6; j++){
        if(DCD[j]>Max){
            Max=DCD[j]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("4D2")
    Dip.innerText = `${Max*4}`
}
function DiceCalc_Full_H2(){ // 풀하우스 점수 기록
    let DCD = new Array(0,0,0,0,0,0)
    for(i=0; i<6; i++){
        let getNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);
        let count = getNum(DiceArray,i+1)
        if(count==5 || count==6){
            DCD[i]=i+1
        }
        else if(count==0||count==1||count==2||count==3||count==4){
            DCD[i]=0
        }
    }
    let Max=0
    for(j=0; j<6; j++){
        if(DCD[j]>Max){
            Max=DCD[j]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("5D2")
    Dip.innerText = `${Max*5}`
}
function DiceCalc_Sextu2(){ // 섹터 점수 기록
    let DCD = new Array(0,0,0,0,0,0)
    for(i=0; i<6; i++){
        let getNum = (arr, el) => arr.reduce((ac, v) => ac + (v === el), 0);
        let count = getNum(DiceArray,i+1)
        if(count==6){
            DCD[i]=i+1
        }
        else{
            DCD[i]=0
        }
    }
    let Max=0
    for(j=0; j<6; j++){
        if(DCD[j]>Max){
            Max=DCD[j]
        }
        else{
            Max=Max
        }
    }
    let Dip = document.getElementById("6D2")
    Dip.innerText = `${Max*6}`
}
let count2 = 0
function Dice_Count2(){ // 점수 입력 횟수
    let Dip2 = document.getElementById("7D2")  
    count2 += 1
    Dip2.innerText = `${count2}`
}
//---------------------------------------------------------------------------------------------------------//
