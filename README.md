# Wontae Choi SimpleGameHosting Developer Coding Assignment

### Implementation

- Implementation agenda at each PRs and commits can be found at [PRs](https://github.com/wontae-gramin9/sgh/pulls?q=is%3Apr+is%3Aclosed).
- Each commit has its own agenda, so that it is easy to present my thought process and reasons for writing code at each steps.
  - As much as it can be found on the commit history of the repository, as many branches have been merged to the main, it can be better easily viewed on any Git GUI program. In my case, I use SourceCode.
    ![Image](https://github.com/user-attachments/assets/fd5bb68e-50f0-409a-a988-e8436315ac46)

For the readable code and consistent formatting, utilised `Tailwind Eslint`.

### Functionalities

![Image](https://github.com/user-attachments/assets/c7df056d-516b-4d4e-afaa-0aeb25bfe298)
![Image](https://github.com/user-attachments/assets/7c282393-780c-40c5-8f96-7173f7cf5d2f)

#### Data fetching / propagation

- Start/Stop Server button

  - Receive result(succees/error) from mock db operations(at `data/mockServers.ts`) through app router(GET/POST at `api/mock/route.ts`)

    - Renamed `mockServers` → `mockData` and moved it to `data/mockServers.ts`, to categorise route hanlers and their HTTP methods sorely on `api/mock/routes.ts` file.
    - Also, placing `mockData` and `UpdateServerStatusOfCard()` in the same file enables mutating mockData easily, as at ES6, imported objects are immutable, so on tried mutating it exudes a compile error.
    - Give a 500ms delay `UpdateServerStatusOfCard()` to mock a real-life DB interaction as closely as possible. So once the button is clicked and the operation is being executed, display `<Spinner />` in the button and have the button `disabled`.

  - Based on the success of the toggling operation, it also toggled the `ServerStatusBadge`.

- Loading Spinner for data fetching
  - When loading `NextResponse.json(mockData)`, display a loading `Spinner`

#### Toast

- Customized the looks and feels along with this project, off of `react-toastify`
  - Responsiveness on mobile devices tested.
- Depending on the result of the handlesubmit of Start/Stop server button, it displays a success/error toast message.
- Give a 50/50 success/error rate to `UpdateServerStatusOfCard()` to equally show success/error toast message for a test purpose.

#### Dark Mode

- Implement dark mode with `DarkModeContext` from Context API & `useLocalStorageState` hook from local storage.
  - `DarkModeContext`
    - Follow the initial user browser dark mode setting by getting the value of window.matchMedia("(prefers-color-scheme: dark)").matches
      - `ProviderWrapper` encapsulates all possible providers that use Browser API and makes it a client component, so it can utilize the with-no-ssr option.
      - As `layout.tsx` imports metadata that can be only used on server sides, it needed to be separated into different files and made it a client component.
      - `DarkModeProvider` propagates `isDarkMode`, `setIsDarkMode` down to children elements.
  - `useLocalStorageState`
    - On rendering, get the value of the passed key from localStorage and set the key/value on the localStorage whenever there is a change.
  - Both of the above use browser API, which means they are only available and accessible on the client side, causing a hydration error.
    - Solved by dynamic import, importing DarkModeProvider with no ssr option, useful if an external dependency or component relies on browser APIs like "window" or "localStorage"( →[NextjsDoc](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr) )
      - Although the hydration error would show rarely among many refreshes on my personal Chrome account, which has many extensions that also cause it, I made sure it does not show on Chrome Guest mode, which does not have any Chrome extensions. So, the code itself is safe.
- Implemented the colour palette at `globals.css`/ `tailwind.config.js` suitable for the dark mode/light mode.

#### Responsiveness

- extended `tailwind.config.js` screens breakpoint
- grid layout at `ResponsiveGrid.tsx`
