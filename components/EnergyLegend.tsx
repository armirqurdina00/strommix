const EnergyLegend = () => {
    return (
        <>
            <div className='flex items-center text-[12px] w-full justify-center'>
                <div className='flex items-center mx-1'>
                    <i className="fa-solid fa-wind text-[lightblue] text-lg"></i>
                    <p className='mx-1 text-white'>Windkraft</p>
                </div>
                <div className='flex items-center mx-1'>
                    <i className="fa-solid fa-sun text-[yellow] text-lg"></i>
                    <p className='mx-1 text-white'>Photovoltaik</p>
                </div>
                <div className='flex items-center mx-1'>
                    <i className="fa-solid fa-water text-blue-600 text-lg"></i>
                    <p className='mx-1 text-white'>Wasserkraft</p>
                </div>
                <div className='flex items-center mx-1'>
                    <i className="fa-solid fa-bolt-lightning text-[#BBBBBB] text-lg"></i>
                    <p className='mx-1 text-white leading-5'>Andere</p>
                </div>
            </div>
        </>
    );
}

export default EnergyLegend;