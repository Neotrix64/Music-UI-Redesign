import unnamed from "../Icons/unnamed.png";

function Theme() {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-screen gap-5">
          {/* Contenedor para los elementos en fila */}
          <div className="sm:flex sm:gap-10 grid gap-5 grid-cols-2">
            <div className="text-white text-center scale-100 hover:scale-110 ease-in-out duration-300">
              <img src={unnamed} alt="" className="size-36 rounded-full hover:cursor-pointer border-2 border-transparent hover:border-white" />
              <p className="text-xl tracking-wider">Add Theme</p>
            </div>
            <div className="text-white text-center scale-100 hover:scale-110 ease-in-out duration-300">
              <img src={unnamed} alt="" className="size-36 rounded-full hover:cursor-pointer border-2 border-transparent hover:border-white" />
              <p className="text-xl tracking-wider">Black Theme</p>
            </div>
            <div className="text-white text-center scale-100 hover:scale-110 ease-in-out duration-300">
              <img src={unnamed} alt="" className="size-36 rounded-full hover:cursor-pointer border-2 border-transparent hover:border-white" />
              <p className="text-xl tracking-wider">Light Theme</p>
            </div>
            <div className="text-white text-center scale-100 hover:scale-110 ease-in-out duration-300">
              <img src={unnamed} alt="" className="size-36 rounded-full hover:cursor-pointer border-2 border-transparent hover:border-white" />
              <p className="text-xl tracking-wider">Dark Theme</p>
            </div>
            
          </div>
          
          {/* Botón centrado en la columna */}
          <button className="text-white p-2 rounded-full border-[2px] hover:bg-green-400 hover:border-green-400 hover:duration-700 tracking-wider font-semibold">
            Manage Themes
          </button>
        </div>
      </>
    );
  }
  
  
  

export default Theme;
