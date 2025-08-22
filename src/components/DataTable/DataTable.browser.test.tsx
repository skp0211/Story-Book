import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DataTable, type Column } from './DataTable';

// Test data
const columns: Column<{ id: number; name: string; email: string }>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email', sortable: false }
];

const testData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' }
];

describe('DataTable - Browser Tests', () => {
  it('renders table with data in browser environment', async () => {
    render(<DataTable data={testData} columns={columns} />);
    
    // Check if table headers are rendered
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    
    // Check if data rows are rendered
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('bob@example.com')).toBeInTheDocument();
    expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
  });

  it('handles sorting in browser environment', async () => {
    render(<DataTable data={testData} columns={columns} />);
    
    const nameHeader = screen.getByText('Name');
    
    // Click to sort ascending
    fireEvent.click(nameHeader);
    
    // Click again to sort descending
    fireEvent.click(nameHeader);
    
    // The table should still be visible and functional
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
  });

  it('handles search functionality in browser', async () => {
    render(
      <DataTable
        data={testData}
        columns={columns}
        searchKey="name"
      />
    );

    const searchInput = screen.getByPlaceholderText('Search by name...');
    
    // Type in search input
    fireEvent.change(searchInput, { target: { value: 'Alice' } });
    
    // Should show only matching results
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.queryByText('Bob Smith')).not.toBeInTheDocument();
    expect(screen.queryByText('Charlie Brown')).not.toBeInTheDocument();
    
    // Clear search
    fireEvent.change(searchInput, { target: { value: '' } });
    
    // All results should be visible again
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
  });

  it('handles empty state in browser', async () => {
    render(<DataTable data={[]} columns={columns} />);
    
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });
});
