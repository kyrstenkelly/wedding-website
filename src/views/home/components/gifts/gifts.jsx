import React from 'react';
import Link from 'shared/components/link';

const Gifts = () => {
  return (
    <div className='gifts'>
      <div className='section'>
        <div className='title-main center'>Gifts</div>

        <p>
          For gifts, we often give each other experiences rather than items. On top of that, we are already blessed
          {' '}with a house full of stuff. So, we have chosen to set up just one non-traditional registry.
          {' '}We would be eternally greatful if you helped contribute to our grand Honeymoon adventure.
        </p>

        <p>
          <Link href='http://www.zola.com/registry/kyrstenandjames' label='Contribute to the Honeymoon Fund'/>
        </p>
      </div>
    </div>
  );
}

export default Gifts;
