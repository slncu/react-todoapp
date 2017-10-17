import React from 'react';
import FilterLink from '../containers/FilterLink';

class Footer extends React.Component {
  render() {
    return (
      <p>
        Show:{""}
        <FilterLink filter="SHOW_ALL">
        All
        </FilterLink>
        {","}
        <FilterLink filter="SHOW_ACTIVE">
        active
        </FilterLink>
        {","}
        <FilterLink filter="SHOW_COMPLETED">
        completed
        </FilterLink>
      </p>
    );
  }
}

export default Footer;
