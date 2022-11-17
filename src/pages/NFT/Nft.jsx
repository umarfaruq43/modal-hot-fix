import NftCards from "../../components/Cards/NftCards";
import settingImg from "../../assets/setting-5.png"
export default function Nft () {
    return (
        <>
        <main className="md:mt-24 mt-16">
            <div className="flex justify-between p-12 align-center">
                <p> Restuarant </p>
                <p> Cottage </p>
                <p> Castle </p>
                <p> fantast city </p>
                <p> Beach </p>
                <p> Cabins </p>
                <p>Off-grid </p>
                <p> Farm </p>
                <button className="border border-gray-400 px-6 flex justify-between rounded-md p-1">
                    <span className=""> Location</span>
                    <img src={settingImg} alt="settings__icon" />
                </button>
            </div>
            <NftCards />
        </main>
        </>
    )
}