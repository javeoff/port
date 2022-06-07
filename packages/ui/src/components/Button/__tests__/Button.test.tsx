import { render } from '@testing-library/react';

import { Button } from '../Button';

describe('Button Component', () => {
  test('should render a Button', () => {
    const text = 'Primary Button';

    const { getByText } = render(<Button>{text}</Button>);

    expect(getByText(text)).toBeInTheDocument();
  });
});
