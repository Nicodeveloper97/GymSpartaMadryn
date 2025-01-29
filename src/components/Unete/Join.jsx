
import "./Join.css"

const Join= () => {
  return (
    <div className="join" id="joinus">
      <div className="join-left">
        <div className="text-group">
          <div className="text-line">
            <span className="texto-transparente">Listo para</span>
            <span>Mejorar</span>
          </div>
          <div className="text-line">
            <span>Tu cuerpo</span>
            <span className="texto-transparente">Con nosotros?</span>
          </div>
        </div>
        <hr className="join-divider" />
      </div>

      <div className="join-right">
        <form className="email-container">
          <input type="email" name="user_email" placeholder="Ingrese su email" aria-label="Ingrese su email" />
          <button type="submit" className="join-button">
            Únete ahora
          </button>
        </form>
        <p className="privacy-note">
          Protegemos tus datos. Lee nuestra <a href="#">Política de Privacidad</a>.
        </p>
      </div>
    </div>
  )
}

export default Join

