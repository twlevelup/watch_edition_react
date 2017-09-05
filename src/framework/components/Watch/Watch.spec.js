import React from 'react';
import { shallow } from 'enzyme';
import Watch from './Watch';

describe('Watch component', () => {
  let wrappedWatch;
  const buttonConfigs = {
    TOP: jest.fn(),
    BOTTOM: jest.fn(),
    LEFT: jest.fn(),
    RIGHT: jest.fn(),
    SCREEN: jest.fn(),
    OVERRIDE: false,
  };

  beforeEach(() => {
    wrappedWatch = shallow(
      <Watch buttonConfigs={ buttonConfigs }>
        <div>Mock</div>
      </Watch>);
  });

  it('it should display the straps', () => {
    const result = wrappedWatch.find('.strap');
    expect(result).toBePresent();
    expect(result.length).toBe(2);
  });

  it('it should display the watch case', () => {
    expect(wrappedWatch.find('.case')).toBePresent();
  });

  it('should have a left button', () => {
    expect(wrappedWatch.find({ type: 'LEFT' }).length).toBe(1);
  });

  it('should have a right button', () => {
    expect(wrappedWatch.find({ type: 'RIGHT' }).length).toBe(1);
  });

  it('should have a TOP button', () => {
    expect(wrappedWatch.find({ type: 'TOP' }).length).toBe(1);
  });

  it('should have a bottom button', () => {
    expect(wrappedWatch.find({ type: 'BOTTOM' }).length).toBe(1);
  });

  it('it should have a ViewRouter component', () => {
    expect(wrappedWatch.find('ViewRouter')).toBePresent();
  });

  it('it should contain screen layout component', () => {
    const result = wrappedWatch.find('ScreenLayout');
    expect(result).toHaveLength(1);
  });
});
