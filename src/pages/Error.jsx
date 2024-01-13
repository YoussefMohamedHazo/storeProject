import { useRouteError,Link } from "react-router-dom"


const Error = () => {
  const error = useRouteError()
  if(error.status===404){
    return <main className=" flex flex-col justify-center items-center min-h-screen px-8">
      <div className="text-center">
        <p className="text-9xl text-primary font-bold">404</p>
        <h1 className=" text-3xl sm:text-5xl font-bold tracking-tight mt-4">Page not found</h1>
        <p className="text-lg leading-7 mt-6">sorry ,لامؤخذا يا صاحبي الصفحه الي عاوزها مش موجوده </p>
        <div className="mt-10">
          <Link className=" btn btn-secondary" to='/'>Back to home</Link>

        </div>
      </div>

    </main>
  }
  return (
    <main className=" grid min-h-screen place-items-center">
        <h4 className="font-bold text-4xl"> there was an error .........</h4>
    </main>
  )
}

export default Error