import React from 'react';
import Date from '../../../framework/components/Date/Date';
import Time from '../../../framework/components/Time/Time';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';

import logo from './logo.png';

export const HomeScreenComponent = () => {
  return (
    <div id='watch-home-page'>
      <Date />
      <Time />

      <div id='home-page-content'>
        <img src={ logo } alt='logo' />

        <div>Hello, World!</div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec at feugiat massa. Nullam et pellentesque mauris.
          Aenean vel molestie velit.
          Aenean dui metus, pellentesque nec molestie sit amet,
          tempus vel velit. Donec nec dui sapien.
          Nunc fermentum, erat et condimentum facilisis, nunc nisl placerat enim,
          non tincidunt massa felis ut libero.
          Proin tincidunt lectus sit amet sollicitudin fermentum.
        </p>

        <p>
          Donec dapibus velit a bibendum pulvinar.
          Nulla sit amet nisl fringilla, ullamcorper dui vitae, ullamcorper nisi.
          Fusce sit amet nunc ultrices, malesuada urna a, venenatis purus.
          Morbi hendrerit, magna ut tempus imperdiet, felis est vestibulum quam,
          nec suscipit ex risus ac eros. Mauris interdum, odio vel ultricies aliquet,
          erat eros pulvinar leo, a ultrices Don&apos;t read this diam ante eu libero.
          Donec imperdiet non Don&apos;t risus vel fringilla.
          Cras vitae orci eu ligula lobortis consectetur id et lacus.
          Morbi STAAAP ut mi in leo iaculis ullamcorper.
          Pellentesque elementum tortor eros, non Gosh stop reading.
          finibus felis varius consequat. Suspendisse potenti.
        </p>
      </div>
    </div>
  );
};

export const HomeScreenButtons = {
  LEFT: () => ButtonAction.goToPage({ pathname: '/counter', state: { number: 5 } }),
  RIGHT: () => ButtonAction.goToPage('/contacts'),
  TOP: () => ButtonAction.scrollUp(),
  BOTTOM: () => ButtonAction.scrollDown(),
};

export default WithButtonConfigs(HomeScreenComponent, HomeScreenButtons);
