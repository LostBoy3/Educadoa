function DashBoard() {
  const data = [
    { label: "Alimentos", value: 70 },
    { label: "Educação", value: 45 },
    { label: "Saúde", value: 90 },
  ];

  return (
    <div>
      <h2 className="text-3xl text-center p-15 pt-35 font-potta">
        Metas de doações:
      </h2>

      <div className="w-full flex justify-center fade-up">
        <div className="bg-[#F8F8F2] bg-w p-15 rounded-3xl shadow-lg opacity-80 w-full max-w-2xl text-center transition-all duration-300 hover:scale[1.02] hover:translate-y-1 hover:opacity-100">
          <h2 className="text-2xl font-bold mb-12">Nosso objetivo é 100%!</h2>
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-14">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center md:flex-1">
                <div className="w-28 md:w-full h-40 md:h-52 bg-gray-200 rounded-4xl flex items-end overflow-hidden">
                  <div className="relative w-full h-full flex items-end">
                    <div
                      className="w-full bg-gradient-to-r from-bgreen to-green rounded-3x1 transition-all duration-500"
                      style={{ height: `${item.value}%` }}
                    />
                    <h3 className="absolute inset-0 flex items-center justify-center text-center font-bold text-black">
                      {item.value}%
                    </h3>
                  </div>
                </div>

                <span className="mt-3 font-dm font-medium text-black font-bold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <p className="inset-0 pt-8 italic">
            Estes dados correspondem às quantidades exatas doadas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
