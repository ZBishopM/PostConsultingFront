

const Hero = () => {
    return (
        <div className="hero grow bg-base-200 m-auto">
            <div className="hero-content w-full justify-around flex-col lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt="spiderman"
                />
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">Estándares de calidad, excelencia e integridad</h1>
                    <p className="max-w-lg py-6 lg:text-xl">
                    El socio tecnológico por excelencia para nuestros clientes, proporcionando valor a través de productos y servicios.
                    </p>
                    <div className="flex">
                    <button type="button" className="btn btn-outline"><a href="/register">Únete a la comunidad</a></button>
                        <div className="divider divider-horizontal"></div>
                    <button type="button" className="btn btn-primary"><a href="/posts">Nuestros proyectos</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero