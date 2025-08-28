import { Outlet } from "react-router-dom"

function App() {

  return (
    <body className=" text-white bg-[url(/background.jpeg)] bg-cover bg-fixed bg-no-repeat">
      <Outlet />
    </body>
  )
}

export default App
