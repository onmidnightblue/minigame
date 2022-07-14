### :tada::bowling: minigame :balloon::video_game:
with react
<br />


#### ✊✌️🖐 rock-scissors-paper 
<hr />

[README.md](https://github.com/onmidnightblue/minigame/blob/1de705dc63bbfea0c0024260d747a84f9191aa9b/rock-scissors-paper/README.md)

![untitled](https://user-images.githubusercontent.com/92494452/176613937-95533c49-a29d-4a4e-a8be-84d061197a39.gif)
<br />

##### condition
- computer's choice / user's choice / result 세 섹션을 만든다.
- 처음 화면을 열었을 때 computer's choice에서 "rock", "scissors", "paper" 가 순서대로 되풀이되어 출력된다.
- 사용자가 선택할 수 있는 "rock", "scissors", "paper" 버튼 세개가 있다.
- 버튼을 선택하면 computer's choice에서 되풀이 되던 것이 멈추고 result에 "you win", "draw", "you lose"를 출력한다.
<br />

##### to use
- let, const
- if
- useState, useEffect, useRef
- setInterval, clearInterval
- Math.floor()
- Math.random()
- Array.length
- Array.map()
- onClick()
<br />
<br />


#### :mag_right: find-deffrent-letter :mag:
<hr />

[README.md](https://github.com/onmidnightblue/minigame/blob/e7e3315f0ecd8a59c183c65617988aeca25fabd4/find-deffrent-letter/README.md)

![untitled0](https://user-images.githubusercontent.com/92494452/177073288-58776fdf-9992-42b3-847e-a29a43db953a.gif)
<br />

##### condition
- 여러 개의 글자 중 하나만 다른 글자(정답 글자)로 채운다.
- 정답 글자 위치는 매번 달라져야 한다.
- 정답 글자를 선택하면 다음 stage로 넘어간다.
- 정답이 아닌 글자를 선택하면 화면의 변화가 없다.
<br />

##### to use
- object로 이루어진 array data
- useState, useEffect
- props
- reduce()
- concat()
- find()
- Array.length
- Array.map()
- Math.floor
- Math.random
- event.target.textContent
<br />
<br />

#### :hearts::spades: matching-card :clubs::diamonds:
<hr />

[README.md](https://github.com/onmidnightblue/minigame/blob/e7e3315f0ecd8a59c183c65617988aeca25fabd4/matching-card/README.md)

![untitled](https://user-images.githubusercontent.com/92494452/177254942-87f421e4-14fc-46ef-bcd7-f371b6ef6d3a.gif)
<br />

##### condition
- 2개의 같은 모양 카드를 랜덤하게 섞은 data를 만든다.
- 3초간 모든 카드를 보여준 후 다시 보이지 않게 한다.
- 사용자가 카드 1장을 선택하면 해당 카드만 보여준다.
- 다른 카드 1장을 선택했을 때 이전 카드와 같은 모양의 카드일 경우 오픈된 상태로 둔다.
- 이전 카드와 다른 모양의 카드일 경우 이전 카드와 현재 선택한 카드를 다시 보이지 않게 한다.
<br />

##### to use
- object로 이루어진 array data
- useState, useEffect
- JSON.parse()
- JSON.stringify()
- new Promise(resolve, reject)
- setTimeout, clearTimeout
- Math.random()
- concat()
- sort()
- forEach()
- map()
- if
- spread operator
- ?.
<br />
<br />

#### :one::two::three::three: memory-tile 
<hr />

[README.md](https://github.com/onmidnightblue/minigame/blob/72705ae31a2a34fb1cd9909107592ca6e6d67ec4/memory-tile/README.md)

![untitled](https://user-images.githubusercontent.com/92494452/177720175-0e902ee4-75d9-4eda-abe2-a63d25e26ab5.gif)
<br />

##### condition
- 컴퓨터가 랜덤으로 타일 하나를 사용자에게 보여준다.
- 사용자가 같은 타일을 선택하면 2단계로 넘어간다.
- 컴퓨터가 랜덤으로 타일 두 개를 사용자에게 보여준다.
- 사용자가 같은 타일을 선택하면 다음 단계로 넘어간다.
- 위 과정을 반복하는 메모리 타일 게임을 만든다.
- 사용자가 선택을 잘못했을 경우 gameover를 보여준다.
<br />

##### to use
- useEffect, useRef, useState
- setTimeout, clearTimeout
- Math.floor()
- Math.random()
- Array.length
- for()
- forEach()
- replace()
- map()
- spread operator
- JSON.stringify
<br />
<br />


#### :baseball: bulls-and-cows :baseball:
<hr />

[README.md](https://github.com/onmidnightblue/minigame/blob/f8a0a8bbdd379f4110b91f682846124b1002d9fd/bulls-and-cows/README.md)


![untitled](https://user-images.githubusercontent.com/92494452/177914536-b7d4a094-4251-4cc5-8209-c799c5daf953.gif)
<br />

##### condition
- 컴퓨터가 랜덤으로 1~9 중 3가지 중복되지 않은 숫자를 고른다.
- 사용자가 3가지 숫자를 입력한다.
- 사용자가 인풋에 숫자가 아니거나 중복되었거나 3자리가 아닌 경우 메세지를 출력한다.
- 사용자가 입력한 숫자와 컴퓨터가 고른 숫자를 비교해 포함이 되었으나 위치가 다르면 ball이고, 포함 되고 위치도 같은 경우 strike를 출력한다.
- 3 strike인 경우 승리한다.
<br />

##### to use
- useEffect, useRef, useState
- Array.length
- Array.push()
- indexOf()
- lastIndexOf()
- Math.floor()
- Math.random()
- for
- isNaN()
- split()
- map()
- parseInt()
- forEach()
- nested loop
- event.preventDefault();
