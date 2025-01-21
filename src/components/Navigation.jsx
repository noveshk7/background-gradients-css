import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export function Navigation({ onPrev, onNext }) {
  return (
    <>
      <button className="nav-button prev" onClick={onPrev}><FontAwesomeIcon icon={faAngleLeft} /></button>
      <button className="nav-button next" onClick={onNext}><FontAwesomeIcon icon={faAngleRight} /></button>
    </>
  );
}