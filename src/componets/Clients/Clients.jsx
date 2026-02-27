import React from 'react'

const Clients = () => {
  const clients = [
    { name: 'Message24', logo: '/assets/logos/message24.png' },
    { name: 'Toyota Iraq', logo: '/assets/logos/toyota.svg' },
    { name: 'Furatpay', logo: '/assets/logos/furatpay.png' },
    { name: 'Frobel', logo: '/assets/logos/frobel.svg' },
    { name: 'Pepu', logo: '/assets/logos/pepu.svg' },
    { name: 'Connected MENA', logo: '/assets/logos/connectedmena.svg' }
  ];

  return (
    <section className="clients-section">
      <div className="max-w">
        <p className="clients-label">Trusted By</p>
        <div className="clients-strip">
          {clients.map((client, index) => (
            <div key={index} className="client-logo-wrapper">
              <img src={client.logo} alt={client.name} className="client-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
