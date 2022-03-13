import { render } from '@testing-library/react';

import DesignStyles from './design-styles';

describe('DesignStyles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesignStyles />);
    expect(baseElement).toBeTruthy();
  });
});
