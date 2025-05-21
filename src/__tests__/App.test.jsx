/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Task Manager App', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('renders app title', () => {
        render(<App />);
        expect(screen.getByText('Task Manager')).toBeInTheDocument();
    });

    test('adds a new task', () => {
        render(<App />);
        const input = screen.getByPlaceholderText('Add a new task');
        const addButton = screen.getByText('Add');
        fireEvent.change(input, { target: { value: 'Testing' } });
        fireEvent.click(addButton);
        expect(screen.getByText('Testing')).toBeInTheDocument();
    });

    test('edits a task', () => {
        render(<App />);
        fireEvent.change(screen.getByPlaceholderText('Add a new task'), {
            target: { value: 'Task to Edit' },
        });
        fireEvent.click(screen.getByText('Add'));
        fireEvent.click(screen.getByText('Edit'));
        const input = screen.getByDisplayValue('Task to Edit');
        fireEvent.change(input, { target: { value: 'Updated Task' } });
        fireEvent.click(screen.getByText('Save'));
        expect(screen.getByText('Updated Task')).toBeInTheDocument();
    });

    test('deletes a task', () => {
        render(<App />);
        fireEvent.change(screen.getByPlaceholderText('Add a new task'), {
            target: { value: 'Task to Delete' },
        });
        fireEvent.click(screen.getByText('Add'));
        fireEvent.click(screen.getByText('Delete'));
        expect(screen.queryByText('Task to Delete')).not.toBeInTheDocument();
    });

    test('filters tasks', () => {
        render(<App />);
        fireEvent.change(screen.getByPlaceholderText('Add a new task'), {
            target: { value: 'Task 1' },
        });
        fireEvent.click(screen.getByText('Add'));
        fireEvent.click(screen.getByText('Task 1'));
        fireEvent.click(screen.getByText('Active'));
        expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
        fireEvent.click(screen.getByText('Completed'));
        expect(screen.getByText('Task 1')).toBeInTheDocument();
    });
});