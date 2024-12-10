```jsx
import React from 'react';

const App = () => {
const data = [
{
caseId: 'HL-102',
customerName: 'Daniel Ricciardo',
loanPurpose: 'Travel',
currentTask: 'Applicant Details',
city: 'Auckland',
applicationStatus: 'PAST DEADLINE',
dueDate: '23/04/2024',
priority: 100,
},
{
caseId: 'HL-14',
customerName: 'Lewis Hamilton',
loanPurpose: 'Home Renovation',
currentTask: 'Applicant Details',
city: 'Auckland',
applicationStatus: 'PAST DEADLINE',
dueDate: '23/04/2024',
priority: 100,
},
{
caseId: 'HL-56',
customerName: 'Sergio Perez',
loanPurpose: 'Restructure Existing Loans',
currentTask: 'Applicant Details',
city: 'Auckland',
applicationStatus: 'PAST DEADLINE',
dueDate: '23/04/2024',
priority: 100,
},
{
caseId: 'HL-324',
customerName: 'Max Verstappen',
loanPurpose: 'Home Renovation',
currentTask: 'Expenses',
city: 'Auckland',
applicationStatus: 'IN PROGRESS',
dueDate: '23/04/2024',
priority: 100,
},
{
caseId: 'HL-798',
customerName: 'Charles Leclerc',
loanPurpose: 'Home Renovation',
currentTask: 'Income',
city: 'Auckland',
applicationStatus: 'IN PROGRESS',
dueDate: '23/04/2024',
priority: 80,
},
{
caseId: 'HL-98',
customerName: 'Fernando Alonso',
loanPurpose: 'Medical',
currentTask: 'Property Details',
city: 'Auckland',
applicationStatus: 'IN PROGRESS',
dueDate: '23/04/2024',
priority: 80,
},
{
caseId: 'HL-43',
customerName: 'Carlos Sainz',
loanPurpose: 'Lorem ipsum dolor sit amet, consectet',
currentTask: 'Decision Outcome',
city: 'Auckland',
applicationStatus: 'IN PROGRESS',
dueDate: '23/04/2024',
priority: 80,
},
{
caseId: 'HL-122',
customerName: 'Pierre Gasly',
loanPurpose: 'Lorem ipsum dolor sit amet, consectet',
currentTask: 'Completed',
city: 'Auckland',
applicationStatus: 'RESOLVED',
dueDate: '23/04/2024',
priority: 80,
},
{
caseId: 'HL-92',
customerName: 'Lando Norris',
loanPurpose: 'Lorem ipsum dolor sit amet, consectet',
currentTask: 'Completed',
city: 'Auckland',
applicationStatus: 'RESOLVED',
dueDate: '23/04/2024',
priority: 60,
},
{
caseId: 'HL-11',
customerName: 'Yuki Tsunoda',
loanPurpose: 'Lorem ipsum dolor sit amet, consectet',
currentTask: 'Completed',
city: 'Auckland',
applicationStatus: 'RESOLVED',
dueDate: '23/04/2024',
priority: 60,
},
];

const getStatusClass = (status) => {
switch (status) {
case 'PAST DEADLINE':
return 'past-deadline';
case 'IN PROGRESS':
return 'in-progress';
case 'RESOLVED':
return 'resolved';
default:
return '';
}
};

return (
<div className="table-container">
<table>
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
{data.map((row) => (
<tr key={row.caseId}>
<td>{row.caseId}</td>
<td>{row.customerName}</td>
<td>{row.loanPurpose}</td>
<td>{row.currentTask}</td>
<td>{row.city}</td>
<td className={`status ${getStatusClass(row.applicationStatus)}`}>
{row.applicationStatus}
</td>
<td>{row.dueDate}</td>
<td>{row.priority}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};

export default App;
```
