React (JSX) Code:

```jsx
import React from 'react';
import './LoanApplicationsTable.module.css'; // Import CSS module

interface LoanApplication {
  caseId: string;
  customerName: string;
  loanPurpose: string;
  currentTask: string;
  city: string;
  applicationStatus: string;
  dueDate: string;
  priority: number;
}

interface LoanApplicationsTableProps {
  loanApplications: LoanApplication[];
}

const LoanApplicationsTable: React.FC<LoanApplicationsTableProps> = ({ loanApplications }) => {
  return (
    <table className="loan-applications-table">
      <thead>
        <tr>
          <th>Case ID</th>
          <th>Customer Name</th>
          <th>Loan Purpose</th>
          <th>Current Task</th>
          <th>City</th>
          <th>Application Status</th>
          <th>Due Date</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {loanApplications.map((application) => (
          <tr key={application.caseId}>
            <td>{application.caseId}</td>
            <td>{application.customerName}</td>
            <td>{application.loanPurpose}</td>
            <td>{application.currentTask}</td>
            <td>{application.city}</td>
            <td className={`status-${application.applicationStatus.toLowerCase().replace(" ", "-")}`}>
              {application.applicationStatus}
            </td>
            <td>{application.dueDate}</td>
            <td>{application.priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LoanApplicationsTable;

```

