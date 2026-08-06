function DownloadApp(){
    return(
        <section className="bg-gray-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-5xl font-bold">
                            Download Our Mobile App
                            </h2>
                            <p className="mt-6 text-gray-300 text-lg">
                                Order your favorite pizzas anytime, anywhere.
                            </p>
                            <div className="flex justify-center gap-6 mt-10">
                                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200">
                                    📱 Google Play
                                </button>
                                <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200">
                                    🍎 App Store
                                </button>
                            </div>
                    </div>
                </section>
    );
}
export default DownloadApp;