export default function Timeline() {
  return (
    // <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-lg p-6 max-w-md mx-auto my-8 text-white">
    //   <h2 className="text-2xl font-bold mb-4">Mi Timeline</h2>
    //   <div className="border-l-2 border-white ml-4">
    //     <div className="mb-8 ml-6">
    //       <div className="flex items-center mb-2">
    //         <span className="bg-white w-4 h-4 rounded-full mr-2"></span>
    //         <h3 className="text-xl font-semibold">Título del primer punto</h3>
    //       </div>
    //       <p className="text-sm font-medium opacity-75">Subtítulo del primer punto</p>
    //       <p className="mt-1 text-sm opacity-90">Texto descriptivo para el primer punto en el timeline.</p>
    //     </div>
    //     <div className="ml-6">
    //       <div className="flex items-center mb-2">
    //         <span className="bg-white w-4 h-4 rounded-full mr-2"></span>
    //         <h3 className="text-xl font-semibold">Título del segundo punto</h3>
    //       </div>
    //       <p className="text-sm font-medium opacity-75">Subtítulo del segundo punto</p>
    //       <p className="mt-1 text-sm opacity-90">Texto descriptivo para el segundo punto en el timeline.</p>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-green-500 rounded-lg shadow-lg p-6 max-w-md mx-auto my-8 text-white">
      <h2 className="text-2xl font-bold mb-4">Mi Timeline</h2>
      <div className="relative border-l-4 border-white ml-4">
        <div className="mb-8 ml-10">
          <div className="relative mb-2">
            <span className="absolute -left-10 top-0 w-6 h-6 bg-white rounded-full border-4 border-green-500"></span>
            <h3 className="text-xl font-semibold">Título del primer punto</h3>
          </div>
          <p className="text-sm font-medium opacity-75">Subtítulo del primer punto</p>
          <p className="mt-1 text-sm opacity-90">Texto descriptivo para el primer punto en el timeline.</p>
        </div>
        <div className="ml-10">
          <div className="relative mb-2">
            <span className="absolute -left-10 top-0 w-6 h-6 bg-white rounded-full border-4 border-green-500"></span>
            <h3 className="text-xl font-semibold">Título del segundo punto</h3>
          </div>
          <p className="text-sm font-medium opacity-75">Subtítulo del segundo punto</p>
          <p className="mt-1 text-sm opacity-90">Texto descriptivo para el segundo punto en el timeline.</p>
        </div>
      </div>
    </div>

  )
}