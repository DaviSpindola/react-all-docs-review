export const Section = ({ children, title }) => {
  return (
    <section>
      <blockquote>
        <p>
          <em>{title}</em>
        </p>
      </blockquote>
      <div className="section-children-wrapper">{children}</div>
    </section>
  )
}

export default Section
