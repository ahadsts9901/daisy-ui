import React from 'react'
import "./tailwind.css"
import "./App.css"

import StatsDUI from "./DUI/StatsDUI"

const App = () => {
  return (
    <>

      {/* chat bubbbe */}
      <div className="chat chat-start">
        <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
      </div>

      {/* counter */}
      <span className="countdown font-mono text-6xl">
        <span style={{ "--value": 54 }}></span>
      </span>

      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": 34 }}></span>
          </span>
          sec
        </div>
      </div>

      {/* difference */}
      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <h1 className='text-slate-950 bg-yellow-600'>2222222222</h1>
        </div>
        <div className="diff-item-2">
          <h1 className='text-slate-950 bg-yellow-600'>3333333333</h1>
        </div>
        <div className="diff-resizer"></div>
      </div>


      {/* kbd */}
      <>
        <kbd className="kbd">ctrl</kbd>
        +
        <kbd className="kbd">shift</kbd>
        +
        <kbd className="kbd">del</kbd>
      </>

      {/* stats */}
      <StatsDUI title="Title" description="i am desxription from daisy-ui" value="123,456" />

      {/* table and timeline has more code and data */}

      {/* navigation components are not functional chakra-ui amd material-ui are much better */}

      {/* alerts are same as ant-design and chakra-ui */}

      {/* progress */}
      <>
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-dots loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
      </>

      {/* skeleton toast tooltip radial-progress are same as ant-design and chakra-ui */}

      {/* form controls */}
      <>
        <input type="checkbox" className='checkbox' />
        <input type="radio" className='radio' />
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        <input type="range" min={0} max="100" className="range" />
        <input type="range" min={0} max="100" className="range" step="25" />
        <input type="checkbox" className="toggle" />
      </>

      {/* rating */}
      <div className="rating rating-lg">
        <input type="radio" name="rating-9" className="rating-hidden" />
        <input type="radio" name="rating-9" className="mask mask-star-2" />
        <input type="radio" name="rating-9" className="mask mask-star-2" checked />
        <input type="radio" name="rating-9" className="mask mask-star-2" />
        <input type="radio" name="rating-9" className="mask mask-star-2" />
        <input type="radio" name="rating-9" className="mask mask-star-2" />
      </div>


      <div className="rating rating-lg rating-half">
        <input type="radio" name="rating-10" className="rating-hidden" />
        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2" />
        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1" checked />
        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2" />
        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2" />
        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2" />
        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1" />
        <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2" />
      </div>

      {/* text area and text are normal */}

      {/* arthboard */}
      <div className="artboard phone-2">375×667</div>

      {/* divider */}
      <>
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        </div>
      </>

      {/* drawer is better in material-ui and chakra-ui */}

      {/* footer // footers are very good I like them*/}
      <>
        <footer className="footer p-10 bg-base-200 text-base-content">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
          <aside className="items-center grid-flow-col">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
            <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
              <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
          </nav>
        </footer>
      </>

      <br /><br /><br />

      {/* indicator // this is like badge in chakra-ui */}
      <div className="indicator">
        <span className="indicator-item badge badge-primary">99+</span>
        <button className="btn">inbox</button>
      </div>

      {/* group items */}
      <>
        <div className="join">
          <input className="input input-bordered join-item" placeholder="Email" />
          <button className="btn join-item rounded-r-full">Subscribe</button>
        </div>

        <div className="join">
          <button className='btn btn-primary join-item'>Hello</button>
          <button className='btn btn-primary join-item'>Hello</button>
        </div>
      </>

      {/* mask */}
      <>
        <img className="mask mask-hexagon" src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />
        <img className="mask mask-pentagon" src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />
        <img className="mask mask-circle" src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />
      </>


      {/* stack */}
      <div className="stack">
        <button className='btn btn-primary'>Primary</button>
        <button className='btn btn-secondary'>Primary</button>
        <button className='btn btn-accent'>Primary</button>
        <button className='btn btn-success'>Primary</button>
      </div>

      {/* mockups */}

      {/* browser */}
      <div className="mockup-browser border bg-base-300">
        <div className="mockup-browser-toolbar">
          <input className="input" placeholder='https://daisyui.com' />
        </div>
        <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
      </div>

      {/* code */}
      <div className="mockup-code">
        <pre data-prefix="$"><code>npm i daisyui</code></pre>
        <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        <pre data-prefix=">" className="text-error"><code>Done!</code></pre>
      </div>

      {/* phone */}
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
      </div>

      {/* window */}
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
      </div>

    </>
  )
}

export default App