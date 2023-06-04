import React from 'react';
import './MoviesDownload.css';

function MoviesDownload(props) {
  const { onDownloadMore, onDisable } = props;

  const downloadButtonClassName =
    `${!onDisable
      ? 'movies-download__button'
      : 'movies-download__button_disabled'}`;

  return (
    <div className="sectoin movies-download">
      <button
        onClick={onDownloadMore}
        className={downloadButtonClassName}
      >
        Еще
      </button>

    </div>
  )
}

export default MoviesDownload;