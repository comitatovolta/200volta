import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function FormPatrocini({ formId }) {
  const [state, handleSubmit] = useForm(formId);
  const [validated, setValidated] = useState(false);

  const onSubmit = (e) => {
    const form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(true);
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="col-12">
        <div className="alert alert-success" role="alert">
          <strong>Grazie!</strong> La tua richiesta di patrocinio è stata inviata con successo.
        </div>
      </div>
    );
  }

  return (
    <div>
      <div class="row">
        <form
          onSubmit={onSubmit}
          className={`needs-validation${validated ? " was-validated" : ""}`}
          noValidate
        >
          {/* SCHEDA PROGETTO */}
          <fieldset>

            <div className="row">
              <div className="form-group col-md-6">
                <label className="active" htmlFor="titolo_progetto">
                  Titolo progetto *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titolo_progetto"
                  name="titolo_progetto"
                  required
                />
                <div className="invalid-feedback">
                  Questo campo è richiesto.
                </div>
                <ValidationError
                  field="titolo_progetto"
                  errors={state.errors}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="sede_progetto">Sede del progetto</label>
                <input
                  type="text"
                  className="form-control"
                  id="sede_progetto"
                  name="sede_progetto"
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-12">
                <label className="active" htmlFor="descrizione_progetto">
                  Descrizione del progetto *
                </label>
                <textarea
                  className="form-control"
                  id="descrizione_progetto"
                  name="descrizione_progetto"
                  rows="4"
                  required
                />
                <div className="invalid-feedback">
                  Questo campo è richiesto.
                </div>
                <ValidationError
                  field="descrizione_progetto"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label className="active" htmlFor="data_inizio">
                  Data inizio progetto
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="data_inizio"
                  name="data_inizio"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="active" htmlFor="data_fine">
                  Data fine progetto
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="data_fine"
                  name="data_fine"
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-12">
                <label className="active" htmlFor="immagine_url">
                  URL immagine associata al progetto *
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="immagine_url"
                  name="immagine_url"
                  placeholder="https://esempio.com/immagine.jpg"
                  required
                />
                <small className="form-text text-muted">
                  Carica la tua immagine su un servizio di hosting (es. Imgur,
                  Google Drive, Dropbox) e incolla qui il link diretto. Formati
                  consigliati: JPG, PNG.
                </small>
                <div className="invalid-feedback">
                  Inserisci un URL valido per l'immagine.
                </div>
                <ValidationError field="immagine_url" errors={state.errors} />
              </div>
            </div>
          </fieldset>

          {/* DETTAGLI PROGETTO */}
          <fieldset className="mt-4">
            <legend className="h4 mb-4">Dettagli Progetto</legend>

            <div className="row">
              <div className="form-group col-md-6">
                <label htmlFor="pubblicazioni">Pubblicazioni previste</label>
                <input
                  type="text"
                  className="form-control"
                  id="pubblicazioni"
                  name="pubblicazioni"
                />
              </div>
              <div className="form-group col-md-6">
                <div className="select-wrapper">
                  <label htmlFor="tipologia">Tipologia</label>
                  <select id="tipologia" name="tipologia">
                    <option selected value="">Seleziona tipologia</option>
                    <option value="convegno">Convegno</option>
                    <option value="didattica">Didattica</option>
                    <option value="mostra">Mostra</option>
                    <option value="pubblicazione">Pubblicazione</option>
                    <option value="spettacolo">Spettacolo</option>
                    <option value="varie">Varie</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <fieldset>
                  <legend className="h6">Stato di avanzamento</legend>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="stato_avanzamento"
                      id="stato_progettazione"
                      value="progettazione"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="stato_progettazione"
                    >
                      Progettazione
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="stato_avanzamento"
                      id="stato_realizzazione"
                      value="realizzazione"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="stato_realizzazione"
                    >
                      Realizzazione
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="stato_avanzamento"
                      id="stato_concluso"
                      value="concluso"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="stato_concluso"
                    >
                      Concluso
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="form-group col-md-6">
                <fieldset>
                  <legend className="h6">Iniziativa ad accesso *</legend>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="accesso"
                      id="accesso_gratuito"
                      value="gratuito"
                      required
                    />
                    <label
                      className="form-check-label"
                      htmlFor="accesso_gratuito"
                    >
                      Gratuito
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="accesso"
                      id="accesso_pagamento"
                      value="a pagamento"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="accesso_pagamento"
                    >
                      A pagamento
                    </label>
                  </div>
                  <div className="invalid-feedback">Seleziona un'opzione.</div>
                </fieldset>
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label className="active" htmlFor="ente_promotore">
                  Ente promotore *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ente_promotore"
                  name="ente_promotore"
                  required
                />
                <div className="invalid-feedback">
                  Questo campo è richiesto.
                </div>
                <ValidationError field="ente_promotore" errors={state.errors} />
              </div>
              <div className="form-group col-md-6">
                <label className="active" htmlFor="responsabile">
                  Responsabile e/o curatore *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="responsabile"
                  name="responsabile"
                  required
                />
                <div className="invalid-feedback">
                  Questo campo è richiesto.
                </div>
                <ValidationError field="responsabile" errors={state.errors} />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label className="active" htmlFor="altri_patrocini">
                  Altri Patrocini *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="altri_patrocini"
                  name="altri_patrocini"
                  required
                />
                <div className="invalid-feedback">
                  Questo campo è richiesto.
                </div>
                <ValidationError
                  field="altri_patrocini"
                  errors={state.errors}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="partner">Partner</label>
                <input
                  type="text"
                  className="form-control"
                  id="partner"
                  name="partner"
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-6">
                <label className="active" htmlFor="email_progetto">
                  Email *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email_progetto"
                  name="email_progetto"
                  required
                />
                <div className="invalid-feedback">
                  Inserisci un indirizzo email valido.
                </div>
                <ValidationError field="email_progetto" errors={state.errors} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="sitoweb">Sito web</label>
                <input
                  type="url"
                  className="form-control"
                  id="sitoweb"
                  name="sitoweb"
                  placeholder="https://"
                />
              </div>
            </div>
          </fieldset>

          {/* REFERENTE INSERIMENTO */}
          <fieldset className="mt-4">
            <legend className="h4 mb-4">Referente Inserimento</legend>

            <div className="row">
              <div className="form-group col-md-4">
                <label className="active" htmlFor="nome_referente">
                  Nome *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome_referente"
                  name="nome_referente"
                  required
                />
                <div className="invalid-feedback">
                  Questo campo è richiesto.
                </div>
                <ValidationError field="nome_referente" errors={state.errors} />
              </div>
              <div className="form-group col-md-4">
                <label className="active" htmlFor="email_referente">
                  Email *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email_referente"
                  name="email_referente"
                  required
                />
                <div className="invalid-feedback">
                  Inserisci un indirizzo email valido.
                </div>
                <ValidationError
                  field="email_referente"
                  errors={state.errors}
                />
              </div>
              <div className="form-group col-md-4">
                <label className="active" htmlFor="email_referente_conferma">
                  Conferma email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email_referente_conferma"
                  name="email_referente_conferma"
                />
              </div>
            </div>
          </fieldset>

          {/* SUBMIT */}
          <div className="row mt-4">
            <div className="col-12 d-flex justify-content-center">
              <button
                className="btn btn-primary"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Invio in corso..." : "Invia richiesta"}
              </button>
            </div>
          </div>

          <ValidationError errors={state.errors} />
        </form>
      </div>
    </div>
  );
}
