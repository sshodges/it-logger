import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';
// import connect
import { connect } from 'react-redux';
// bring in functions
import { deleteLog, setCurrentLog } from '../../actions/logActions';

const LogItem = ({ log, deleteLog, setCurrentLog }) => {
  const onDeleteLog = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted', classes: 'orange' });
  };

  return (
    <li className='collection-item'>
      <div className=''>
        <a
          href='#edit-log-modal'
          onClick={() => setCurrentLog(log)}
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> Last updated by
          <span className='black-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' onClick={onDeleteLog} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrentLog: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteLog, setCurrentLog }
)(LogItem);
