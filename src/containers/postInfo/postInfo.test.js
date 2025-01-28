    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import '@testing-library/jest-dom';
    import PostInfo from './PostInfo';

    describe('PostInfo Component', () => {
        test('renders correctly with modal prop as true', () => {
            render(<PostInfo modal={true} votes={123} totalComments={45} />);
            
            const container = screen.getByTestId('postInfoContainer');
            expect(container).toHaveClass('postInfoContainer', 'displayRow', 'modal');

            const votesText = screen.getByText('123');
            expect(votesText).toBeInTheDocument();

            const commentsText = screen.getByText('45');
            expect(commentsText).toBeInTheDocument();
        });

        test('renders correctly with modal prop as false', () => {
            render(<PostInfo modal={false} votes={456} totalComments={78} />);
            
            const container = screen.getByTestId('postInfoContainer');
            expect(container).toHaveClass('postInfoContainer', 'displayFlex');
            expect(container).not.toHaveClass('modal');

            const votesText = screen.getByText('456');
            expect(votesText).toBeInTheDocument();

            const commentsText = screen.getByText('78');
            expect(commentsText).toBeInTheDocument();
        });

        test('renders votes and comments correctly', () => {
            render(<PostInfo modal={false} votes={789} totalComments={123} />);
            
            const votesText = screen.getByText('789');
            expect(votesText).toBeInTheDocument();

            const commentsText = screen.getByText('123');
            expect(commentsText).toBeInTheDocument();
        });

        test('renders SVGs for votes and comments', () => {
            render(<PostInfo modal={true} votes={123} totalComments={45} />);
            
            const voteUpIcon = screen.getByRole('voteUp', { hidden: true });
            expect(voteUpIcon).toBeInTheDocument();
            
            const commentIcon = screen.getByRole('comments', { hidden: true });
            expect(commentIcon).toBeInTheDocument();
        });
    });
