import { CardList } from '../../utils/card'

export default function Cards() {
    return (
        <>
            <section>
                <h1 className="font-bold text-center text-4xl mt-4">
                    Inspiration for your next adventure
                </h1>
                <div className='flex flex-wrap justify-around mb-3 p-5 m-5'>
                    {
                        CardList.map((card, index) => {
                            return (
                                <div
                                    className="p-3 m-2 rounded-lg border border-gray-400"
                                    key={index}
                                >
                                    <div className="md:max-w-sm rounded overflow-hidden shadow bg-white mb-3">
                                        <img src={card.img} alt="card__image" />
                                    </div>
                                    <div className="flex justify-between align-center mb-2 ">
                                        <p className="text-gray-600 text-sm">
                                            {" "}
                                            {card.title}{" "}
                                        </p>
                                        <p className="text-sm font-semibold">
                                            {" "}
                                            {card.description}{" "}
                                        </p>
                                    </div>
                                    <div className="flex justify-between text-gray-500 mb-4">
                                        <p className="text-xs">
                                            {" "}
                                            {card.distance}{" "}
                                        </p>
                                        <p className="text-xs">
                                            {" "}
                                            {card.availability}{" "}
                                        </p>
                                    </div>
                                    <div>
                                        <img src={card.rating} alt="rating" />
                                    </div>
                                </div>
                            );
                        })

                    }
                </div>
            </section>
        </>
    );
}