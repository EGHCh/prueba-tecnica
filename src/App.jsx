import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import PropertyCard from './components/PropertyCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [compareMode, setCompareMode] = useState(false)
  const [selected, setSelected] = useState([])

  const handleCompareToggle = () => {
    setCompareMode(prev => {
      const next = !prev
      if (!next) setSelected([])
      return next
    })
  }

  const handleSelectProperty = (id, data) => {
    if (!compareMode) return
    setSelected(prev => {
      const exists = prev.find(p => p.id === id)
      if (exists) return prev.filter(p => p.id !== id)
      return [...prev, { id, ...data }]
    })
  }

  const handleRemoveSelected = (id) => {
    setSelected(prev => prev.filter(p => p.id !== id))
  }

  return (
    <>
      <section id='navbar'>
        <nav className="navbar navbar-expand-lg bg-navy-blue">
          <div className="container-fluid">
            <img
              alt="Logo"
              loading="lazy"
              width={231} radioGroup=''
              height={31}
              decoding="async"
              src="https://static.portalterreno.cl/logo.svg"
              style={{ color: "transparent" }}
            />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </section>
      <section id='actions'>
        <div className='row my-4'>
          <div className='col-4 text-start'>
            <h5>Industriales en Venta en Chile</h5>
            <small>217 resultados</small>
          </div>
          <div className='col-8'>
            <div className='col-12 rounded-pill h-100 shadow bg-light'></div>
          </div>
        </div>
        <div className='row mb-4'>
          <div className='col text-start'>
            <button type="button" className={"btn " + (compareMode ? 'btn-primary' : 'btn-outline-primary')} onClick={handleCompareToggle}>
              {compareMode ? 'Cerrar comparar' : 'Comparar'}
            </button>
          </div>
        </div>
      </section>
      <section id='center'>
        <div className='row row-cols-2'>
          <div className='col'>
            <div className='row row-cols-2'>

              <div>
                <PropertyCard
                  id="p1"
                  image="https://images.pexels.com/photos/39075680/pexels-photo-39075680.jpeg"
                  price="$170.000"
                  title="Terreno industrial"
                  size="200 m²"
                  location="Industrial, En Puerto Montt, Los Lagos"
                  showRoad={true}
                  electricity={true}
                  water={true}
                  onSelect={handleSelectProperty}
                  selected={selected.some(s => s.id === 'p1')}
                />
              </div>
              <div>
                <PropertyCard
                  id="p2"
                  image="https://images.pexels.com/photos/39075680/pexels-photo-39075680.jpeg"
                  price="$442.332"
                  title="Terreno industrial"
                  size="400 m²"
                  location="Industrial, En Puerto Montt, Los Lagos"
                  showRoad={true}
                  electricity={true}
                  water={true}
                  onSelect={handleSelectProperty}
                  selected={selected.some(s => s.id === 'p2')}
                />
              </div>
              <div>
                <PropertyCard
                  id="p3"
                  image="https://images.pexels.com/photos/39075680/pexels-photo-39075680.jpeg"
                  price="$74.983"
                  title="Terreno industrial"
                  size="300 m²"
                  location="Industrial, En Puerto Montt, Los Lagos"
                  showRoad={true}
                  onSelect={handleSelectProperty}
                  selected={selected.some(s => s.id === 'p3')}
                />
              </div>
              <div>
                <PropertyCard
                  id="p4"
                  image="https://images.pexels.com/photos/39075680/pexels-photo-39075680.jpeg"
                  price="$52.553"
                  title="Terreno industrial"
                  size="100 m²"
                  location="Industrial, En Puerto Montt, Los Lagos"
                  showRoad={true}
                  electricity={true}
                  water={true}
                  onSelect={handleSelectProperty}
                  selected={selected.some(s => s.id === 'p4')}
                />
              </div>
              <div>
                <PropertyCard
                  id="p5"
                  image="https://images.pexels.com/photos/39075680/pexels-photo-39075680.jpeg"
                  price="$155.253"
                  title="Terreno industrial"
                  size="100 m²"
                  location="Industrial, En Puerto Montt, Los Lagos"
                  showRoad={true}
                  electricity={true}
                  water={true}
                  onSelect={handleSelectProperty}
                  selected={selected.some(s => s.id === 'p5')}
                />
              </div>

            </div>
          </div>
          <div className='col'>
            {!compareMode ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11846098.49344022!2d-83.29567458659464!3d-33.5795906084185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x505e1131102b91d!2sChile!5e1!3m2!1ses!2scl!4v1787628481858!5m2!1ses!2scl"
                width={400}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className='comparison-table p-3'>
                {selected.length === 0 ? (
                  <div>No hay propiedades seleccionadas</div>
                ) : (
                  <div className='table-responsive'>
                    <table className='table table-bordered text-small small'>
                      <thead>
                        <tr>
                          <th>Precio</th>
                          <th>Título</th>
                          <th>Tamaño</th>
                          <th>Ubicación</th>
                          <th>Servicios</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selected.map((s, idx) => (
                          <tr key={s.id}>
                            <td>{s.price}</td>
                            <td>{s.title}</td>
                            <td>{s.size}</td>
                            <td>{s.location}</td>
                            <td>
                              {s.showRoad ? ' 🛣️ ' : ''}
                              {s.electricity ? '⚡' : ''}
                              {s.water ? '💧' : ''}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default App
