import React from 'react';

const makanans = [
    {
        nama: 'Soto',
        harga: 12000
    },
    {
        nama: 'Bakso',
        harga: 10000
    },
    {
        nama: 'Mie Ayam',
        harga: 7000
    },
    {
        nama: 'Nasi Goreng',
        harga: 15000
    },
]

const Map = () => {
  return (
      <div>
          <h2>Map</h2>
          <ul>
              {makanans.map((makanan) => (
                  <li>{makanan.nama} - Harga {makanan.harga}</li>
              ))}
          </ul>
      </div>
  )
};

export default Map;