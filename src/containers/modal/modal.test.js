import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Modal from './Modal';
import { toggleModal } from './modalSlice';

jest.mock('../comments/Comments', () => jest.fn(() => <div data-testid="comments"></div>));
jest.mock('../gallery/gallery', () => jest.fn(() => <div data-testid="gallery"></div>));
jest.mock('../video/video', () => jest.fn(() => <div data-testid="video"></div>));
jest.mock('../image/image', () => jest.fn(() => <div data-testid="image"></div>));
jest.mock('../postInfo/PostInfo', () => jest.fn(() => <div data-testid="post-info"></div>));

const mockStore = configureStore([]);
let store;

describe('Modal Component', () => {
    beforeEach(() => {
        store = mockStore({
            toggleModal: {
                toggle: false,
                data: null,
            },
        });
    });

    test('renders hidden modal when toggle is false', () => {
        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );
        const modalElement = screen.getByTestId('modalMainContainer'); // Ensure this matches the data-testid in Modal.
        expect(modalElement).toHaveClass('hide'); // Verifies the correct CSS class is applied.
    });
    

    test('renders modal with gallery content', () => {
        store = mockStore({
            toggleModal: {
                toggle: true,
                data: {
                    gallery: ['image1.jpg', 'image2.jpg'],
                },
            },
        });

        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );

        const modalElement = screen.getByTestId('modalMainContainer');
        const galleryElement = screen.getByTestId('gallery');

        expect(modalElement).toBeInTheDocument();
        expect(galleryElement).toBeInTheDocument();
    });

    test('renders modal with image content', () => {
        store = mockStore({
            toggleModal: {
                toggle: true,
                data: {
                    image: 'image.jpg',
                },
            },
        });

        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );

        const modalElement = screen.getByTestId('modalMainContainer');
        const imageElement = screen.getByTestId('image');

        expect(modalElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
    });

    test('renders modal with video content', () => {
        store = mockStore({
            toggleModal: {
                toggle: true,
                data: {
                    video: 'video.mp4',
                },
            },
        });

        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );

        const modalElement = screen.getByTestId('modalMainContainer');
        const videoElement = screen.getByTestId('video');

        expect(modalElement).toBeInTheDocument();
        expect(videoElement).toBeInTheDocument();
    });

    test('renders post information and comments', () => {
        store = mockStore({
            toggleModal: {
                toggle: true,
                data: {
                    title: 'Post Title',
                    post: 'This is a sample post.',
                    category: 'Category',
                    author: 'Author Name',
                    date: '2025-01-28',
                    totalComments: 10,
                    votes: 100,
                    comments: 'comments-url',
                },
            },
        });

        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );

        const postInfoElement = screen.getByTestId('post-info');
        const commentsElement = screen.getByTestId('comments');
        const titleElement = screen.getByText('Post Title');
        const postElement = screen.getByText('This is a sample post.');
        const categoryElement = screen.getByText('Category');
        const authorElement = screen.getByText('Author Name');
        const dateElement = screen.getByText('2025-01-28');

        expect(postInfoElement).toBeInTheDocument();
        expect(commentsElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
        expect(postElement).toBeInTheDocument();
        expect(categoryElement).toBeInTheDocument();
        expect(authorElement).toBeInTheDocument();
        expect(dateElement).toBeInTheDocument();
    });

    test('closes modal when "Close" link is clicked', () => {
        store = mockStore({
            toggleModal: {
                toggle: true,
                data: {
                    gallery: ['image1.jpg', 'image2.jpg'],
                },
            },
        });

        store.dispatch = jest.fn();

        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );

        const closeLink = screen.getByText(/close/i);
        fireEvent.click(closeLink);

        expect(store.dispatch).toHaveBeenCalledWith(toggleModal());
    });
});
