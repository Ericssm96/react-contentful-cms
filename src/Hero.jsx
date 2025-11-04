import heroImg from "./assets/hero.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>

          <p>Tbh poke swag jianbing stumptown yr la croix man braid ennui marfa dreamcatcher williamsburg unicorn wayfarers hot chicken. Jianbing 3 wolf moon messenger bag tofu, mukbang taiyaki YOLO quinoa keffiyeh taxidermy prism shaman austin fanny pack bicycle rights. Flannel fashion axe polaroid, pabst bodega boys YOLO vexillologist. Disrupt flexitarian mixtape scenester tilde, street art mukbang seitan gentrify kickstarter kombucha.</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Contentful Illustration" className="img" />
        </div>
      </div>
    </section>
  )
}