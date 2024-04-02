import "./Banner.scss"

function Banner ({BannerImage, text, lighter}){
    return (
        <div className="Banner">
            <img className="Banner__image" src={BannerImage} alt="falaises" />
            <h1 className={`Banner__title ${lighter === "true" ? "Banner__title--lighter" : ""}`}>{text}</h1>
        </div>
    )
}

export default Banner
