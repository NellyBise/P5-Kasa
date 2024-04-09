import './Banner.scss'

function Banner({ BannerImage, text, lighter }) {
  return (
    <article className="Banner">
      <img className="Banner__image" src={BannerImage} alt="falaises" />
      <div
        className={`Banner__shadow ${
          lighter === 'true' ? 'Banner__shadow--lighter' : ''
        }`}
      >
        <h1 className="Banner__title">{text}</h1>
      </div>
    </article>
  )
}

export default Banner
