import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  const createDate = formatDate(repo.created_at);
  const updateDate = formatDate(repo.updated_at);

  return (
    <div className='card grid-2'>
      <div>
        <h3>
          <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
            {repo.name}
          </a>
        </h3>
        {repo.description && <p>{repo.description}</p>}
      </div>
      <div>
        <h4>Language: {repo.language}</h4>
        <p>
          <strong>Created on:</strong> {createDate}
        </p>
        <p>
          <strong>Last updated:</strong> {updateDate}
        </p>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

const formatDate = isoDate => {
  const date = new Date(isoDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  return day + '-' + month + '-' + year;
};

export default RepoItem;
