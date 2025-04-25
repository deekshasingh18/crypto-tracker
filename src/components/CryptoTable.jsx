// src/components/CryptoTable.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FaChevronDown } from 'react-icons/fa';
// If your CSS is global you don’t need this import; otherwise:
// import '../styles.css';

export default function CryptoTable() {
  const assets = useSelector(state => state.crypto.assets);
  const [sortOption, setSortOption] = useState('priceLowHigh');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptionLabel = {
    priceLowHigh: 'Price Low → High',
    priceHighLow: 'Price High → Low',
    nameAZ:        'Name A → Z',
    nameZA:        'Name Z → A',
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sort the assets array based on the selection
  const sortedAssets = [...assets].sort((a, b) => {
    switch (sortOption) {
      case 'priceLowHigh':  return a.price - b.price;
      case 'priceHighLow':  return b.price - a.price;
      case 'nameAZ':        return a.name.localeCompare(b.name);
      case 'nameZA':        return b.name.localeCompare(a.name);
      default:              return 0;
    }
  });

  // Renders the ↑/↓ arrow with green/red color
  const renderChange = value => {
    const isPos = value >= 0;
    const arrow = isPos ? '▲' : '▼';
    const color = isPos ? 'green' : 'red';
    return <span style={{ color }}>{arrow} {Math.abs(value).toFixed(2)}%</span>;
  };

  return (
    <>
      {/* SORT DROPDOWN */}
      <div className="relative inline-block mb-4" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sort-button"
        >
          Sort by {sortOptionLabel[sortOption]} <FaChevronDown />
        </button>

        {isOpen && (
          <div className="sort-menu">
            {Object.entries(sortOptionLabel).map(([key, label], idx, arr) => (
              <button
                key={key}
                onClick={() => {
                  setSortOption(key);
                  setIsOpen(false);
                }}
                className={
                  `sort-option` +
                  (sortOption === key ? ' active' : '') +
                  (idx === 0 ? ' first' : '') +
                  (idx === arr.length - 1 ? ' last' : '')
                }
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* CRYPTO TABLE */}
      <div className="overflow-x-auto">
        <table className="crypto-table">
          <thead>
            <tr className="bg-gray-100">
              <th>#</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>1h %</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Market Cap</th>
              <th>24h Volume</th>
              <th>Circulating Supply</th>
              <th>Max Supply</th>
              <th>7D Chart</th>
            </tr>
          </thead>
          <tbody>
            {sortedAssets.map((asset, i) => (
              <tr key={asset.symbol} className="hover:bg-blue-50 hover:shadow-md transition-all duration-200">
                <td>{i + 1}</td>
                <td><img src={asset.logo} alt={asset.symbol} className="h-6 w-6 mx-auto" /></td>
                <td>{asset.name}</td>
                <td>{asset.symbol}</td>
                <td>${asset.price.toFixed(2)}</td>
                <td>{renderChange(asset.percent1h)}</td>
                <td>{renderChange(asset.percent24h)}</td>
                <td>{renderChange(asset.percent7d)}</td>
                <td>${asset.marketCap.toLocaleString()}</td>
                <td>${asset.volume24h.toLocaleString()}</td>
                <td>{asset.circulatingSupply}</td>
                <td>{asset.maxSupply}</td>
                <td>
                  <img
                    src={asset.chart}
                    alt="7D chart"
                    style={{ width: '64px', height: '32px', objectFit: 'contain' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}