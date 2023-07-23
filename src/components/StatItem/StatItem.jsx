import PropTypes from 'prop-types';
import css from './StatItem.module.css';
import { generateColor } from 'index';

export const StatItem = ({ label, percentage }) => (
  <li className={css.item} style={{ backgroundColor: generateColor() }}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
);
