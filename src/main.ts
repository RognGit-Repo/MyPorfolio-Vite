import './style.css'
import myLogo from './myLogo.svg'
import myPhoto from './Ronald.jpg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="navbrand">
  
    <div class="Avatar">
            <img class="my_photo" src="${myPhoto}" alt="MyPhoto">
            <div class="avatar_info">
              <span class="text-light title">
                Ronald Reyes
              </span>
              <p href="" class="text-light description">
                Developer
              </a>
            </div>
    </div>
    
    </div>

      <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${myLogo}" class="logo myLogo" alt="TypeScript logo" />
    </a>
    <h1>Hi, I'm Ronald ;</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="description">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
