import React from 'react';
import { render, screen } from '@testing-library/react';
import MainFeed from './MainFeed';
import Tile from '../tiles/TileContainer';

jest.mock('../tiles/TileContainer', () => jest.fn(() => <div data-testid="tile"></div>));

describe('MainFeed Component', () => {
    test('renders the loading state when no data is provided', () => {
        render(<MainFeed reddits={null} />);
        const loadingElement = screen.getByText(/loading/i);
        const circleElement = screen.getByTestId('circle');

        expect(loadingElement).toBeInTheDocument();
        expect(circleElement).toBeInTheDocument();
    });

    test('renders the correct number of Tile components when data is provided', () => {
        const mockReddits = {
            data: {
                children: [
                    { data: { title: 'Post 1', id: 1 } },
                    { data: { title: 'Post 2', id: 2 } },
                ],
            },
        };

        render(<MainFeed reddits={mockReddits} iconImage="icon.png" />);

        const tileElements = screen.getAllByTestId('tile');
        expect(tileElements).toHaveLength(mockReddits.data.children.length);
        expect(Tile).toHaveBeenCalledWith(
            expect.objectContaining({ data: mockReddits.data.children[0].data, iconImage: 'icon.png' }),
            expect.anything()
        );
        expect(Tile).toHaveBeenCalledWith(
            expect.objectContaining({ data: mockReddits.data.children[1].data, iconImage: 'icon.png' }),
            expect.anything()
        );
    });
});
