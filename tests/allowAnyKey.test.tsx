import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Container from './TestApp';

function wrapper() {
  return render(<Container allowAnyKey />);
}

describe('close with other keys', () => {
  it('displays the toggleable component when the button is clicked', async () => {
    const { getByTestId } = wrapper();

    fireEvent(
      getByTestId('clickable-button'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );
    await waitFor(() => {
      expect(getByTestId('toggle-component')).toBeInTheDocument();
    });
  });
  it('toggles the component on and off when the button is clicked twice', async () => {
    const { getByTestId, queryByTestId } = wrapper();

    fireEvent(
      getByTestId('clickable-button'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );
    await waitFor(() => {
      expect(getByTestId('toggle-component')).toBeInTheDocument();
    });

    fireEvent(
      getByTestId('clickable-button'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );
    await waitFor(() => {
      expect(queryByTestId('toggle-component')).not.toBeInTheDocument();
    });
  });
  it('toggles child component off screen when dummy div is clicked', async () => {
    const { getByTestId, queryByTestId } = wrapper();

    fireEvent(
      getByTestId('clickable-button'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );
    await waitFor(() => {
      expect(getByTestId('toggle-component')).toBeInTheDocument();
    });

    fireEvent(
      getByTestId('dummy'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );
    await waitFor(() => {
      expect(queryByTestId('toggle-component')).not.toBeInTheDocument();
    });
  });
  it('toggles component off when `Escape` key is pressed', async () => {
    const { getByTestId, queryByTestId } = wrapper();

    fireEvent(
      getByTestId('clickable-button'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );
    await waitFor(() => {
      expect(getByTestId('toggle-component')).toBeInTheDocument();
    });
    fireEvent.keyUp(document, { key: 'Escape' });
    await waitFor(() => {
      expect(queryByTestId('toggle-component')).not.toBeInTheDocument();
    });
  });
  it('toggles component off when `b` key is pressed', async () => {
    const { getByTestId, queryByTestId } = wrapper();

    fireEvent(
      getByTestId('clickable-button'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );
    await waitFor(() => {
      expect(getByTestId('toggle-component')).toBeInTheDocument();
    });
    fireEvent.keyUp(document, { key: 'b' });
    await waitFor(() => {
      expect(queryByTestId('toggle-component')).not.toBeInTheDocument();
    });
  });
  it('toggles component off when `Tab` key is pressed', async () => {
    const { getByTestId, queryByTestId } = wrapper();

    fireEvent(
      getByTestId('clickable-button'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );
    await waitFor(() => {
      expect(getByTestId('toggle-component')).toBeInTheDocument();
    });
    fireEvent.keyUp(document, { key: 'Tab' });
    await waitFor(() => {
      expect(queryByTestId('toggle-component')).not.toBeInTheDocument();
    });
  });
});
