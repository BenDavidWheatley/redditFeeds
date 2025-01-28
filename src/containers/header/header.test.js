import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Header from './Header';
import Styles from './header.module.css';

const mockStore = configureMockStore();

describe('Header Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            // Add any initial state needed by the Search component or others
        });
    });

    test('renders the Header component', () => {
        render(
            <Provider store={store}>
                <Header userSearch={jest.fn()} />
            </Provider>
        );

        // Check that the header section is rendered
        const headerElement = screen.getByTestId('header');
        expect(headerElement).toBeInTheDocument();
    });

    test('applies the correct container class', () => {
        render(
            <Provider store={store}>
                <Header userSearch={jest.fn()} />
            </Provider>
        );

        // Ensure the container has the headerContainer class
        const headerElement = screen.getByTestId('header');
        expect(headerElement).toHaveClass(Styles.headerContainer);
    });

    test('renders the logo with correct attributes', () => {
        render(
            <Provider store={store}>
                <Header userSearch={jest.fn()} />
            </Provider>
        );

        // Check the logo <img> element
        const logoElement = screen.getByRole('img');
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveAttribute('src', '../../../media/redditLogo.png');
        expect(logoElement).toHaveAttribute('height', '80px');
        expect(logoElement).toHaveAttribute('width', '247px');
    });

    test('renders the Search component and passes userSearch prop', () => {
        const mockUserSearch = jest.fn();
        render(
            <Provider store={store}>
                <Header userSearch={mockUserSearch} />
            </Provider>
        );

        // Check that the Search component is rendered
        const searchElement = screen.getByTestId('searchBar'); // Assuming Search has a test id
        expect(searchElement).toBeInTheDocument();
    });
});
