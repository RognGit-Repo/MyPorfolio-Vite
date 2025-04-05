import './style.css'
import myLogo from './myLogo.svg'
import myPhoto from './Ronald.png'
import { setupCounter } from './counter.ts'
import { loadHTML } from './util/htmlLoader.ts'

loadHTML()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="navbrand">
  
    <div class="Avatar">
            <img class="logo myLogo" src="${myLogo}" alt="MyPhoto">
            <div class="avatar_info">
              <span class="text-light title">
                My Porfolio
              </span>
              
            </div>
    </div>
    
    </div>

      <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${myPhoto}" class="my_photo" alt="TypeScript logo" />
    </a>
    <h1>Hi, I'm Ronald ;</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="description">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
  <></>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
