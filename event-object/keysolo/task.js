class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector(".status__timer");
    this.timerCheck();
    this.reset();
    this.registerEvents();
  }

  timerN(){
    this.timer.textContent = this.getWord().length;
    this.timerCheck();
  }
  timerCheck() {
    let timerId = setInterval(()=> { 
      this.timer.textContent--;
      if(this.timer.textContent == 0) {
        clearInterval(timerId);
        this.fail();
        this.timerN();
       }
    },1000);
  }
  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.timer.textContent = this.getWord().length;
  }

  registerEvents() {
   document.addEventListener("keyup",event => {
    if(this.currentSymbol.textContent.toUpperCase() === event.key.toUpperCase() && this.timer.textContent > 0 || this.currentSymbol.textContent === event.key && this.timer.textContent > 0) {
      this.success();
    }
    else{
      this.fail();
      this.timer.textContent = this.getWord().length;
    }
   })
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
  }
  
  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }

    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    this.timer.textContent = this.getWord().length;
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);
      console.log(words[index].length);
    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

