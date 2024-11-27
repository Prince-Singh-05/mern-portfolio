export default function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills__name">C++</h3>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills__name">Mongo DB</h3>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills__name">Firebase</h3>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills__name">SQL</h3>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills__name">Express JS</h3>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <h3 className="skills__name">Node JS</h3>
          </div>
          {/* Can add more skills */}
        </div>
      </div>
    </div>
  );
}

